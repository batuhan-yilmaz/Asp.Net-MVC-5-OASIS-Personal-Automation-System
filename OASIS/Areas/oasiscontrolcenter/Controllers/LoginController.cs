using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OASIS.Models.Entity;
using System.Web.Security;
using System.Web.Configuration;
using Google.Authenticator;
using System.Text;
using System.Web.Helpers;
using OASIS.Models;
using System.Net.Mail;
using System.IO;
using System.Net;

namespace OASIS.Areas.oasiscontrolcenter.Controllers
{
    [AllowAnonymous]
    public class LoginController : Controller
    {
        oasisEntities db = new oasisEntities();
        // GET: oasiscontrolcenter/Login

        //--------------------------------------- FORGET-RESET PASSWORD---------------------------------------//
        public ActionResult ForgotPassword()
        {

            return View();
        }

        [HttpPost]
        public ActionResult ForgotPassword(users model)
        {

            var veri = db.users.Find(model.userid);
            if(veri != null && veri.email == model.email)
            { 
                veri.email = model.email;
                veri.securitykey = hash.hashmd5(hash.hashmd5(model.securitykey) + "@F=$½tV4c5£Un$}₺->$i#9{TMC5hZ½1@F29]U4JYF*");

            using (MailMessage mm = new MailMessage(model.fgEmail, model.email))
            {
                mm.Subject = model.fgSubject;
                mm.Body = hash.hashmd5(hash.hashmd5(model.securitykey) + "@F=$½tV4c5£Un$}₺->$i#9{TMC5hZ½1@F29]U4JYF*");

                mm.IsBodyHtml = false;
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.EnableSsl = true;
                NetworkCredential NetworkCred = new NetworkCredential(model.fgEmail, model.fgPassword);
                smtp.UseDefaultCredentials = true;
                smtp.Credentials = NetworkCred;
                smtp.Port = 587;
                smtp.Send(mm);
            }
                db.SaveChanges();
                ModelState.Clear();
                ViewBag.Succes2 = "Güvenlik kodunuz E-Posta adresinize başarıyla gönderilmiştir.";
                return View();
            }
            else
            {
                ModelState.Clear();
                ViewBag.Error2 = "E-Posta Adresi Bulunamadı";
                return View();
            }
        }

        public JsonResult ForgotPw()
        {
            var forgotpw = db.users.ToList();
            return Json(
                new
                {
                    Result = from obj in forgotpw
                             select new
                             {
                                 obj.userid,
                                 obj.profilephoto,
                                 obj.name,
                                 obj.surname,
                                 obj.usrname,
                                 obj.password,
                                 obj.email,
                                 obj.tc,
                                 obj.tel,
                                 obj.role,
                                 obj.gender,
                                 obj.securitykey
                             }
                }, JsonRequestBehavior.AllowGet
            );

        }


        public ActionResult ResetPassword()
        {
            return View();
        }

        [HttpPost]
        public ActionResult ResetPassword(users model)
        {
                var veri = db.users.Find(model.userid);
            if (veri !=null && veri.securitykey == model.securitykey && veri.tc == model.tc)
            {
                veri.password = hash.hashmd5(hash.hashmd5(model.password) + "@F=$½tV4c5£Un$}₺->$i#9{TMC5hZ½1@F29]U4JYF*");
                veri.tc = model.tc;
                veri.email = model.email;
                veri.securitykey = hash.hashmd5(hash.hashmd5(model.securitykey) + "@F=$½tV4c5£Un$}₺->$i#9{TMC5hZ½1@F29]U4JYF*");
                db.SaveChanges();
                ModelState.Clear();
                ViewBag.Succes3 = "Şifreniz Başarıyla Değiştirildi.";
                return View();
            }
            else {
                ModelState.Clear();
                ViewBag.Error3 = "Güvenlik Kodunuz veya Tc Kimlik Numaranız Yanlış.";
            return View();
            }
        }
        public JsonResult ResetPw()
        {
            var respw = db.users.ToList();
            return Json(
                new
                {
                    Result = from obj in respw
                             select new
                             {
                                 obj.userid,
                                 obj.name,
                                 obj.surname,
                                 obj.usrname,
                                 obj.password,
                                 obj.email,
                                 obj.tc,
                                 obj.tel,
                                 obj.role,
                                 obj.gender,
                                 obj.active,
                                 obj.securitykey
                             }
                }, JsonRequestBehavior.AllowGet
            );

        }

        //--------------------------------------- LOGİN - LOGOUT---------------------------------------//
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Alogin(users usersForm, string ReturnUrl)
        {
            if (!ModelState.IsValid)
            {
                return View("Index", usersForm);
            }


            string message = "";
            bool status = false;
            //check UserName and password form our database here
            string GAuthPrivKey = WebConfigurationManager.AppSettings["GAuthPrivateKey"];
            string UserUniqueKey = (usersForm.usrname + GAuthPrivKey);

            usersForm.password = hash.hashmd5(hash.hashmd5(usersForm.password) + "@F=$½tV4c5£Un$}₺->$i#9{TMC5hZ½1@F29]U4JYF*");

            var usersVarmi = db.users.FirstOrDefault(x => x.usrname == usersForm.usrname && x.password == usersForm.password && x.active == usersForm.active);

            var usersaktif = db.users.Find(usersForm.userid);

            if (usersaktif != null && usersaktif.active != usersForm.active)
            {
                ViewBag.Error2 = "Sisteme Erişiminiz İptal Edilmiştir!";
                ModelState.Clear();
                return View("Index");
            }         
            else if (usersVarmi != null)
            {
                status = true;
                Session["UserName"] = usersForm.usrname;
                ViewBag.User = usersForm.usrname;
                if (WebConfigurationManager.AppSettings["GAuthEnable"].ToString() == "1")
                {
                    HttpCookie TwoFCookie = Request.Cookies["TwoFCookie"];
                    int k = 0;
                    if (TwoFCookie == null)
                    {
                        k = 1;
                    }
                    else
                    {

                        if (!string.IsNullOrEmpty(TwoFCookie.Values["UserCode"]))
                        {
                            string UserCodeE = TwoFCookie.Values["UserCode"].ToString();
                            string UserCodeD = Encoding.UTF8.GetString(MachineKey.Unprotect(Convert.FromBase64String(UserCodeE)));

                            if (UserUniqueKey == UserCodeD)
                            {
                                FormsAuthentication.SetAuthCookie(Session["Username"].ToString(), true);
                                if (!string.IsNullOrEmpty(ReturnUrl))
                                {
                                    return Redirect(ReturnUrl);
                                }
                                else
                                {
                                    //return View("UserProfile"); İlk girişte direk buraya atıyor.
                                    TempData["login"] = " ";
                                    return RedirectToAction("index", "Home");
                                }
                            }
                            else
                            {
                                k = 1;
                            }


                        }
                    }

                    if (k == 1)
                    {

                        message = "Lütfen Google Authenticator Uygulamasına QR Kodu Okutarak veya Hesap ismi ve Kurulum Anahtarını Girerek Oluşan Doğrulama Kodu ile Oturumunuza Erişim Sağlayınız.";

                        //Two Factor Authentication Setup
                        TwoFactorAuthenticator TwoFacAuth = new TwoFactorAuthenticator();

                        Session["UserUniqueKey"] = UserUniqueKey;
                        var setupInfo = TwoFacAuth.GenerateSetupCode("HaneefPuttur.com", usersForm.usrname, UserUniqueKey, 300, 300);
                        ViewBag.BarcodeImageUrl = setupInfo.QrCodeSetupImageUrl;
                        ViewBag.SetupCode = setupInfo.ManualEntryKey;
                    }
                }
                else
                {
                    FormsAuthentication.SetAuthCookie(Session["Username"].ToString(), true);
                    if (!string.IsNullOrEmpty(ReturnUrl))
                    {
                        return Redirect(ReturnUrl);
                    }
                    else
                    {
                        //       return View("UserProfile");
                        TempData["login"] = " ";
                        return RedirectToAction("index", "Home");
                    }
                }

            }


            else if(usersaktif !=null)
            { 
            var usersVarmi2 = db.users.FirstOrDefault(x => x.active == usersForm.active);

            if (usersaktif != usersVarmi2)
            {
                ViewBag.Error2 = "Sisteme Erişiminiz İptal Edilmiştir!";
                    ModelState.Clear();
                    return View("Index");
            }
            }

            else
            {
                message = "Please Enter the Valid Credential!";

            }

            ViewBag.Message = message;
            ViewBag.Status = status;

            ViewBag.Error = "Kullanıcı adı veya parola hatalı!";
            ModelState.Clear();
            return View("Index");

        }

        public ActionResult TwoFactorAuthenticate(string ReturnUrl)
        {
            var token = Request["CodeDigit"];
            TwoFactorAuthenticator TwoFacAuth = new TwoFactorAuthenticator();
            string UserUniqueKey = Session["UserUniqueKey"].ToString();
            bool isValid = TwoFacAuth.ValidateTwoFactorPIN(UserUniqueKey, token);
            if (isValid)
            {
                HttpCookie TwoFCookie = new HttpCookie("TwoFCookie");
                string UserCode = Convert.ToBase64String(MachineKey.Protect(Encoding.UTF8.GetBytes(UserUniqueKey)));

                TwoFCookie.Values.Add("UserCode", UserCode);
                TwoFCookie.Expires = DateTime.Now.AddDays(1);
                Response.Cookies.Add(TwoFCookie);
                Session["IsValidTwoFactorAuthentication"] = true;
                TempData["login"] = " ";
                return RedirectToAction("index", "Home");
            }
            if (!string.IsNullOrEmpty(ReturnUrl))
            {
                return Redirect(ReturnUrl);
            }
            else
            {
                return RedirectToAction("");
            }
        }

        public ActionResult Logout()
        {
            Session["UserName"] = null;
            FormsAuthentication.SignOut();
            return RedirectToAction("index");
        }


    }
}