using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OASIS.Models.Entity;

namespace OASIS.Areas.oasiscontrolcenter.Controllers
{
    [Authorize(Roles = "Admin")]
    public class SettingsController : Controller
    {

        // GET: oasiscontrolcenter/Settings
        oasisEntities db = new oasisEntities();
        //-----------------------------------------------BORDRO--------------------------------------------------------//
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult bordro()
        {
            var deger = db.ucretbordro.ToList();
            return View(deger);
        }

        public ActionResult bordroguncelle(int ucretbordroid)
        {
            var bordro = db.ucretbordro.Find(ucretbordroid);

            return View("bordroguncelle", bordro);
        }

        [HttpPost]
        public ActionResult bguncelle(ucretbordro b)
        {
            if (!ModelState.IsValid)
            {
                return View("bguncelle");
            }
            var veri = db.ucretbordro.Find(b.ucretbordroid);
            veri.sgksabiti = b.sgksabiti;
            veri.sgkisveren = b.sgkisveren;
            veri.isverenissizsigfon = b.isverenissizsigfon;
            veri.isverenmaliyet = b.isverenmaliyet;
            veri.nrkazanc = b.nrkazanc;
            veri.iszsigiscipayi = b.iszsigiscipayi;
            veri.sgkiscipayi = b.sgkiscipayi;
            veri.gvmahtari = b.gvmahtari;
            veri.gelirvergisi = b.gelirvergisi;
            veri.agi = b.agi;
            veri.kendiagiyuzdesi = b.kendiagiyuzdesi;
            veri.esagiyuzdesi = b.esagiyuzdesi;
            veri.birveikicocukagiyuzdesi = b.birveikicocukagiyuzdesi;
            veri.uccocukyuzdesi = b.uccocukyuzdesi;
            veri.dortveuzericocukyuzdesi = b.dortveuzericocukyuzdesi;
            veri.damgavergi = b.damgavergi;
            veri.netkazanc = b.netkazanc;
            veri.gunlukkazanc = b.gunlukkazanc;
            veri.pirimyuzdesi = b.pirimyuzdesi;
            veri.mesaiucreti = b.mesaiucreti;
            veri.yoneticifark = b.yoneticifark;
            veri.yoneticipirimyuzdesi = b.yoneticipirimyuzdesi;
            veri.yoneticimesaiucreti = b.yoneticimesaiucreti;
            veri.pirimlimit = b.pirimlimit;
            db.SaveChanges();
            TempData["bordroGuncelle"] = " ";
            return RedirectToAction("bordro");
        }
        //-----------------------------------------------USERS = kullanicilar--------------------------------------------------------//


        public ActionResult kullanicilar()
        {
            var deger = db.users.ToList();
            return View(deger);
        }

        public ActionResult kullaniciguncelle(int userid)
        {
            var users = db.users.Find(userid);
            return View("kullaniciguncelle", users);
        }
        public ActionResult kullaniciaktifdegis(int userid)
        {
            var usersz = db.users.Find(userid);
            return View("kullaniciaktifdegis", usersz);
        }
        public ActionResult kullanicifotodegis(int userid)
        {
            var userszf = db.users.Find(userid);
            return View("kullanicifotodegis", userszf);
        }


        [HttpPost]
        public ActionResult kGuncelle(users r2)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
                var veri = db.users.Find(r2.userid);
                veri.name = Turkce.sesliharfDuzenle(r2.name);
                veri.surname = Turkce.sesliharfDuzenle(r2.surname);
                veri.usrname = Turkce.sesliharfDuzenle(r2.usrname);
                veri.password = hash.hashmd5(hash.hashmd5(r2.password) + "@F=$½tV4c5£Un$}₺->$i#9{TMC5hZ½1@F29]U4JYF*");
                veri.email = r2.email;
                veri.tc = r2.tc;
                veri.tel = Turkce.NoDuzenle(r2.tel);
                veri.securitykey = hash.hashmd5(hash.hashmd5(r2.securitykey) + "@F=$½tV4c5£Un$}₺->$i#9{TMC5hZ½1@F29]U4JYF*");
                veri.gender = r2.gender;
                db.SaveChanges();
                TempData["kullaniciGuncelle"] = " ";
                return RedirectToAction("kullanicilar");        
        }
        [HttpPost]
        public ActionResult kGuncellefoto(users rz2)
        {
            if (ModelState.IsValid)
            {
                return View();
            }
            var veri = db.users.Find(rz2.userid);
            veri.profilephoto = Turkce.DosyaAdiDuzenle(rz2.profilephoto);
            db.SaveChanges();
            TempData["kullaniciGuncelle"] = " ";
            return RedirectToAction("kullanicilar");
        }

        [HttpPost]
        public ActionResult kGuncelleactive(users z2)
        {
            if (ModelState.IsValid)
            {
                return View();
            }
            var veriz = db.users.Find(z2.userid); 
            veriz.active = z2.active;
            veriz.role = z2.role;
            db.SaveChanges();
            TempData["kullaniciGuncelle"] = " ";
            return RedirectToAction("kullanicilar");
        }

        public JsonResult usersistatistik()
        {
            var uistatistik = db.users.ToList();
            return Json(
                new
                {
                    Result = from obj in uistatistik
                             select new
                             {
                                 obj.name,
                                 obj.surname,
                                 obj.usrname,
                                 obj.password,
                                 obj.email,
                                 obj.tc,
                                 obj.tel,
                                 obj.role,
                                 obj.gender
                             }
                }, JsonRequestBehavior.AllowGet
            );

        }

        [HttpGet]
        public ActionResult kullanicikayit()
        { 
        return View();
        }


        [HttpPost]
        public ActionResult kullanicikayit(users r1)
        {
            if (!ModelState.IsValid)
            {
                return View("kullanicikayit", r1);
            }
            var kayitvarmi1 = db.users.FirstOrDefault(x => x.usrname == r1.usrname);
            var kayitvarmi2 = db.users.FirstOrDefault(x => x.tc == r1.tc);
            var kayitvarmi3 = db.users.FirstOrDefault(x => x.email == r1.email);
            var kayitvarmi = db.users.FirstOrDefault(x => x.usrname == r1.usrname && x.email == r1.email && x.tc == r1.tc);

            if (kayitvarmi1 != null)
            {
                TempData["usernamevar"] = " ";
                return RedirectToAction("kullanicikayit");

            }
            else if (kayitvarmi2 != null)
            {
                TempData["tcvar"] = " ";
                return RedirectToAction("kullanicikayit");

            }
            else if (kayitvarmi3 != null)
            {
                TempData["emailvar"] = " ";
                return RedirectToAction("kullanicikayit");

            }
            else if (kayitvarmi == null)
            {
                r1.password = hash.hashmd5(hash.hashmd5(r1.password) + "@F=$½tV4c5£Un$}₺->$i#9{TMC5hZ½1@F29]U4JYF*");
                r1.securitykey = hash.hashmd5(hash.hashmd5(r1.securitykey) + "@F=$½tV4c5£Un$}₺->$i#9{TMC5hZ½1@F29]U4JYF*");
                r1.profilephoto = Turkce.DosyaAdiDuzenle(r1.profilephoto);
                r1.tel = Turkce.NoDuzenle(r1.tel);
                r1.name = Turkce.sesliharfDuzenle(r1.name);
                r1.surname = Turkce.sesliharfDuzenle(r1.surname);
                r1.usrname = Turkce.sesliharfDuzenle(r1.usrname);
                db.users.Add(r1);
                db.SaveChanges();
                TempData["kullaniciGuncelle"] = " ";
                return RedirectToAction("kullanicilar");
            }           
            else
            {
                TempData["kullaniciHata1"] = " ";
                return RedirectToAction("kullanicikayit");
            }
        }


        public ActionResult kullanicisil(int userid)
        {
            var sil = db.users.Find(userid);
            if (sil == null)
            {
                return RedirectToAction("kullanicilar");
            }
            db.users.Remove(sil);
            db.SaveChanges();
            TempData["kullaniciGuncelle"] = " ";
            return RedirectToAction("kullanicilar");
        }

        //-----------------------------------------------Company---------------------------------------------------------//

        public PartialViewResult companypartial()
        {
            var deger = db.company.ToList();
            return PartialView(deger);
        }

        public ActionResult companyguncelle(int companyid)
        {
            var company = db.company.Find(companyid);
            return View("companyguncelle", company);
        }
        [HttpPost]
        public ActionResult cGuncelle(company c2)
        {
            if (!ModelState.IsValid)
            {
                return View("companyguncelle");
            }
            var veri = db.company.Find(c2.companyid);
            veri.company1 = Turkce.sesliharfDuzenle(c2.company1);
            db.SaveChanges();
            TempData["companyGuncelle"] = " ";
            return RedirectToAction("firmabilgileri");
        }

        [HttpGet]
        public ActionResult companyekle()
        {
            return View();
        }


        [HttpPost]
        public ActionResult companyekle(company c1)
        {
            if (!ModelState.IsValid)
            {
                return View("companyekle", c1);
            }
            c1.company1 = Turkce.sesliharfDuzenle(c1.company1);
            db.company.Add(c1);
            db.SaveChanges();
            TempData["companyGuncelle"] = " ";
            return RedirectToAction("firmabilgileri");
        }


        public ActionResult companysil(int companyid)
        {
            var sil = db.company.Find(companyid);
            if (sil == null)
            {
                return RedirectToAction("firmabilgileri");
            }
            db.company.Remove(sil);
            db.SaveChanges();
            TempData["companyGuncelle"] = " ";
            return RedirectToAction("firmabilgileri");
        }

        //-----------------------------------------------Region---------------------------------------------------------//

        public PartialViewResult regionpartial()
        {
            var degerler = db.region.ToList();
            return PartialView(degerler);
        }


        [HttpGet]
        public ActionResult regionekle()
        {
            {
                List<SelectListItem> degerler = (from i in db.company.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.company1,
                                                     Value = i.companyid.ToString()
                                                 }).ToList();
                ViewBag.CompanyList = degerler;
            }

            return View();
        }


        [HttpPost]
        public ActionResult regionekle(region re1)
        {
            if (!ModelState.IsValid)
            {
                return View("regionekle");
            }
            var companyget = db.company.Where(m => m.companyid == re1.company.companyid).FirstOrDefault();
            re1.company = companyget;
            re1.region1 = Turkce.sesliharfDuzenle(re1.region1);
            db.region.Add(re1);
            db.SaveChanges();
            TempData["regionGuncelle"] = " ";
            return RedirectToAction("firmabilgileri");
        }

        public ActionResult regionguncelle(int regionid)
        {
            var region = db.region.Find(regionid);
            {
                List<SelectListItem> degerler = (from i in db.company.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.company1,
                                                     Value = i.companyid.ToString()
                                                 }).ToList();
                ViewBag.CompanyList = degerler;
            }
           

            return View("regionguncelle", region);
        }

        [HttpPost]
        public ActionResult rguncelle(region re)
        {
            if (!ModelState.IsValid)
            {
                return View("rguncelle");
            }
            var veri = db.region.Find(re.regionid);
            var companyget = db.company.Where(m => m.companyid == re.company.companyid).FirstOrDefault();
            veri.region1 = Turkce.sesliharfDuzenle(re.region1);
            veri.companyget = companyget.companyid;
            db.SaveChanges();
            TempData["regionGuncelle"] = " ";
            return RedirectToAction("firmabilgileri");
        }

        public ActionResult regionsil(int regionid)
        {
            var sil = db.region.Find(regionid);
            if (sil == null)
            {
                return RedirectToAction("firmabilgileri");
            }
            db.region.Remove(sil);
            db.SaveChanges();
            TempData["regionGuncelle"] = " ";
            return RedirectToAction("firmabilgileri");
        }

        //-----------------------------------------------Unit---------------------------------------------------------//

        public PartialViewResult unitpartial()
        {
            var degerler = db.unit.ToList();
            return PartialView(degerler);
        }


        [HttpGet]
        public ActionResult unitekle()
        {
            {
                List<SelectListItem> degerler = (from i in db.region.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.region1,
                                                     Value = i.regionid.ToString()
                                                 }).ToList();
                ViewBag.RegionList = degerler;
            }

            return View();
        }


        [HttpPost]
        public ActionResult unitekle(unit u1)
        {
            if (!ModelState.IsValid)
            {
                return View("unitekle");
            }
            var regionget = db.region.Where(m => m.regionid == u1.region.regionid).FirstOrDefault();
            u1.region = regionget;
            u1.unit1 = Turkce.sesliharfDuzenle(u1.unit1);
            db.unit.Add(u1);
            db.SaveChanges();
            TempData["unitGuncelle"] = " ";
            return RedirectToAction("firmabilgileri");
        }

        public ActionResult unitguncelle(int unitid)
        {
            var unit = db.unit.Find(unitid);
            {
                List<SelectListItem> degerler = (from i in db.region.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.region1,
                                                     Value = i.regionid.ToString()
                                                 }).ToList();
                ViewBag.RegionList = degerler;
            }


            return View("unitguncelle", unit);
        }

        [HttpPost]
        public ActionResult uguncelle(unit un)
        {
            if (!ModelState.IsValid)
            {
                return View("uguncelle");
            }
            var veri = db.unit.Find(un.unitid);
            var regionget = db.region.Where(m => m.regionid == un.region.regionid).FirstOrDefault();
            veri.unit1 = un.unit1;
            veri.regionget = regionget.regionid;
            veri.unit1 = Turkce.sesliharfDuzenle(un.unit1);
            db.SaveChanges();
            TempData["unitGuncelle"] = " ";
            return RedirectToAction("firmabilgileri");
        }

        public ActionResult unitsil(int unitid)
        {
            var sil = db.unit.Find(unitid);
            if (sil == null)
            {
                return RedirectToAction("firmabilgileri");
            }
            db.unit.Remove(sil);
            db.SaveChanges();
            TempData["unitGuncelle"] = " ";
            return RedirectToAction("firmabilgileri");
        }
        //----------------------------------------------- Departman ---------------------------------------------------------//

        public PartialViewResult departmanpartial()
        {
            var deger = db.departman.ToList();
            return PartialView(deger);
        }

        public ActionResult departmanguncelle(int departmanid)
        {
            var departman = db.departman.Find(departmanid);
            return View("departmanguncelle", departman);
        }
        [HttpPost]
        public ActionResult dGuncelle(departman d2)
        {
            if (!ModelState.IsValid)
            {
                return View("departmanguncelle");
            }
            var veri = db.departman.Find(d2.departmanid);
            veri.departman1 = Turkce.sesliharfDuzenle(d2.departman1);
            db.SaveChanges();
            TempData["departmanGuncelle"] = " ";
            return RedirectToAction("firmabilgileri");
        }

        [HttpGet]
        public ActionResult departmanekle()
        {
            return View();
        }


        [HttpPost]
        public ActionResult departmanekle(departman d1)
        {
            if (!ModelState.IsValid)
            {
                return View("departmanekle", d1);
            }
            d1.departman1 = Turkce.sesliharfDuzenle(d1.departman1);
            db.departman.Add(d1);
            db.SaveChanges();
            TempData["departmanGuncelle"] = " ";
            return RedirectToAction("firmabilgileri");
        }


        public ActionResult departmansil(int departmanid)
        {
            var sil = db.departman.Find(departmanid);
            if (sil == null)
            {
                return RedirectToAction("firmabilgileri");
            }
            db.departman.Remove(sil);
            db.SaveChanges();
            TempData["departmanGuncelle"] = " ";
            return RedirectToAction("firmabilgileri");
        }

        public ActionResult firmabilgileri()
        {
            return View();
        }



    }
}