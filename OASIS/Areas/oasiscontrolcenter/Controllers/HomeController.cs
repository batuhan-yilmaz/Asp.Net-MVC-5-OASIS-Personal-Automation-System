using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OASIS.Models.Entity;
using System.Net;
using System.Net.Mail;
using System.Text.RegularExpressions;
using OASIS.Models;

namespace OASIS.Areas.oasiscontrolcenter.Controllers
{

    public class HomeController : Controller
    {
        // GET: oasiscontrolcenter/Home
        oasisEntities db = new oasisEntities();


        //--------------------------------------------- ANASAYFA PERSONEL GUNCELLE AKIŞ VE YORUM!------------------------------------//

        public ActionResult Index()
        {
            return View();
        }

        public PartialViewResult homeget()
        {
            var degerler = db.home.ToList();
            return PartialView(degerler);
        }

        [Authorize(Roles = "Admin,Yonetici")]
        [HttpGet]
        public ActionResult homeekle()
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
            {
                List<SelectListItem> degerler = (from i in db.region.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.region1,
                                                     Value = i.regionid.ToString()
                                                 }).ToList();
                ViewBag.RegionList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.unit.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.unit1,
                                                     Value = i.unitid.ToString()
                                                 }).ToList();
                ViewBag.UnitList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.departman.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.departman1,
                                                     Value = i.departmanid.ToString()
                                                 }).ToList();
                ViewBag.DepartmanList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.process.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.process1,
                                                     Value = i.processid.ToString()
                                                 }).ToList();
                ViewBag.ProcessList = degerler;
            }

            return View();
        }

        [Authorize(Roles = "Admin,Yonetici")]

        public ActionResult homeekle(home h1)
        {
            if (!ModelState.IsValid)
            {
                return View("home");
            }
            var companyget = db.company.Where(m => m.companyid == h1.company.companyid).FirstOrDefault();
            var regionget = db.region.Where(m => m.regionid == h1.region.regionid).FirstOrDefault();
            var unitget = db.unit.Where(m => m.unitid == h1.unit.unitid).FirstOrDefault();
            var departmanget = db.departman.Where(m => m.departmanid == h1.departman.departmanid).FirstOrDefault();
            var processget = db.process.Where(m => m.processid == h1.process.processid).FirstOrDefault();
            h1.company = companyget;
            h1.region = regionget;
            h1.unit = unitget;
            h1.departman = departmanget;
            h1.process = processget;
            h1.subject = Turkce.sesliharfDuzenle(h1.subject);
            h1.descriptions = Turkce.sesliharfDuzenle(h1.descriptions);
            h1.content1 = Turkce.DosyaAdiDuzenle(h1.content1);
            h1.content2 = Turkce.DosyaAdiDuzenle(h1.content2);
            h1.content3 = Turkce.DosyaAdiDuzenle(h1.content3);
            h1.content4 = Turkce.DosyaAdiDuzenle(h1.content4);
            db.home.Add(h1);
            db.SaveChanges();
            TempData["homeGuncelle"] = " ";
            return RedirectToAction("index");
        }

        [Authorize(Roles = "Admin,Yonetici")]
        public ActionResult homeguncelle(int homeid)
        {
            var home = db.home.Find(homeid);
            {
                List<SelectListItem> degerler = (from i in db.company.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.company1,
                                                     Value = i.companyid.ToString()
                                                 }).ToList();
                ViewBag.CompanyList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.region.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.region1,
                                                     Value = i.regionid.ToString()
                                                 }).ToList();
                ViewBag.RegionList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.unit.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.unit1,
                                                     Value = i.unitid.ToString()
                                                 }).ToList();
                ViewBag.UnitList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.departman.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.departman1,
                                                     Value = i.departmanid.ToString()
                                                 }).ToList();
                ViewBag.DepartmanList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.process.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.process1,
                                                     Value = i.processid.ToString()
                                                 }).ToList();
                ViewBag.ProcessList = degerler;
            }

            return View("homeguncelle", home);
        }

        [Authorize(Roles = "Admin,Yonetici")]
        [HttpPost]
        public ActionResult hguncelle(home h)
        {
            if (!ModelState.IsValid)
            {
                return View("hguncelle");
            }
            var veri = db.home.Find(h.homeid);
            var companyget = db.company.Where(m => m.companyid == h.company.companyid).FirstOrDefault();
            var regionget = db.region.Where(m => m.regionid == h.region.regionid).FirstOrDefault();
            var unitget = db.unit.Where(m => m.unitid == h.unit.unitid).FirstOrDefault();
            var departmanget = db.departman.Where(m => m.departmanid == h.departman.departmanid).FirstOrDefault();
            var processget = db.process.Where(m => m.processid == h.process.processid).FirstOrDefault();
            veri.subject = Turkce.sesliharfDuzenle(h.subject);
            veri.descriptions = Turkce.sesliharfDuzenle(h.descriptions);
            veri.eventsstart = h.eventsstart;
            veri.eventsend = h.eventsend;
            veri.color = h.color;
            veri.content1 = Turkce.DosyaAdiDuzenle(h.content1);
            veri.content2 = Turkce.DosyaAdiDuzenle(h.content2);
            veri.content3 = Turkce.DosyaAdiDuzenle(h.content3);
            veri.content4 = Turkce.DosyaAdiDuzenle(h.content4);
            veri.companyget = companyget.companyid;
            veri.regionget = regionget.regionid;
            veri.unitget = unitget.unitid;
            veri.departmanget = departmanget.departmanid;
            veri.processget = processget.processid;
            db.SaveChanges();
            TempData["homeGuncelle"] = " ";
            return RedirectToAction("index");
        }

        [Authorize(Roles = "Admin")]
        public ActionResult homesil(int homeid)
        {
            var sil = db.home.Find(homeid);
            if (sil == null)
            {
                return RedirectToAction("index");
            }
            db.home.Remove(sil);
            db.SaveChanges();
            TempData["homeGuncelle"] = " ";
            return RedirectToAction("index");
        }

        [HttpPost]
        public ActionResult profilguncelle(users up2)
        {
            var veri = db.users.Find(up2.userid);
            if (veri != null)
            {
                veri.name = Turkce.sesliharfDuzenle(up2.name);
                veri.surname = Turkce.sesliharfDuzenle(up2.surname);
                veri.password = hash.hashmd5(hash.hashmd5(up2.password) + "@F=$½tV4c5£Un$}₺->$i#9{TMC5hZ½1@F29]U4JYF*");
                veri.email = up2.email;
                veri.tc = up2.tc;
                veri.tel = Turkce.NoDuzenle(up2.tel);
                veri.securitykey = hash.hashmd5(hash.hashmd5(up2.securitykey) + "@F=$½tV4c5£Un$}₺->$i#9{TMC5hZ½1@F29]U4JYF*");
                db.SaveChanges();
                TempData["kullaniciGuncelle"] = " ";
                return RedirectToAction("index");
            }
            else
            {
                TempData["kullaniciGuncelleHata"] = " ";
                return RedirectToAction("index");
            }
        }

        [HttpPost]
        public ActionResult profilfotoguncelle(users upz2)
        {
            var veri = db.users.Find(upz2.userid);
            if (veri != null)
            {
                veri.profilephoto = Turkce.DosyaAdiDuzenle(upz2.profilephoto);
                db.SaveChanges();
                TempData["kullaniciGuncelle"] = " ";
                return RedirectToAction("index");
            }
            else
            {
                TempData["kullaniciGuncelleHata"] = " ";
                return RedirectToAction("index");
            }
        }


        //-------------------------------------------- PERSONEL ALANI --------------------------------------------------

        [Authorize(Roles = "Admin,Yonetici")]
        public ActionResult personel()
        {
            var degerler = db.personel.ToList();
            return View(degerler);
        }

        [Authorize(Roles = "Admin,Yonetici")]
        public ActionResult personelizin(int personelid)
        {
            var personel = db.personel.Find(personelid);
            return View(personel);
        }

        [Authorize(Roles = "Admin,Yonetici")]
        [HttpGet]
        public ActionResult personelekle()
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
            {
                List<SelectListItem> degerler = (from i in db.region.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.region1,
                                                     Value = i.regionid.ToString()
                                                 }).ToList();
                ViewBag.RegionList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.unit.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.unit1,
                                                     Value = i.unitid.ToString()
                                                 }).ToList();
                ViewBag.UnitList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.departman.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.departman1,
                                                     Value = i.departmanid.ToString()
                                                 }).ToList();
                ViewBag.DepartmanList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.authorized.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.authorized1,
                                                     Value = i.authorizedid.ToString()
                                                 }).ToList();
                ViewBag.AuthorizedList = degerler;
            }
            return View();
        }

        [Authorize(Roles = "Admin,Yonetici")]
        [HttpPost]
        public ActionResult personelekle(personel p1)
        {
            if (!ModelState.IsValid)
            {
                return View("personelekle");
            }
            var personelvarmi1 = db.personel.FirstOrDefault(x => x.tel == p1.tel);
            var personelvarmi2 = db.personel.FirstOrDefault(x => x.tc == p1.tc);
            var personelvarmi3 = db.personel.FirstOrDefault(x => x.email == p1.email);
            var personelvarmi = db.personel.FirstOrDefault(x => x.tel == p1.tel && x.email == p1.email && x.tc == p1.tc);

            if (personelvarmi1 != null)
            {
                TempData["ptelvar"] = " ";
                return RedirectToAction("personelekle");

            }
            else if (personelvarmi2 != null)
            {
                TempData["ptcvar"] = " ";
                return RedirectToAction("personelekle");

            }
            else if (personelvarmi3 != null)
            {
                TempData["pemailvar"] = " ";
                return RedirectToAction("personelekle");

            }
            else if (personelvarmi == null)
            {

                var companyget = db.company.Where(m => m.companyid == p1.company.companyid).FirstOrDefault();
                var regionget = db.region.Where(m => m.regionid == p1.region.regionid).FirstOrDefault();
                var unitget = db.unit.Where(m => m.unitid == p1.unit.unitid).FirstOrDefault();
                var departmanget = db.departman.Where(m => m.departmanid == p1.departman.departmanid).FirstOrDefault();
                var authorizedget = db.authorized.Where(m => m.authorizedid == p1.authorized.authorizedid).FirstOrDefault();
                p1.company = companyget;
                p1.region = regionget;
                p1.unit = unitget;
                p1.departman = departmanget;
                p1.authorized = authorizedget;
                p1.profilephoto = Turkce.DosyaAdiDuzenle(p1.profilephoto);
                p1.digitalcv = Turkce.DosyaAdiDuzenle(p1.digitalcv);
                p1.personel1 = Turkce.sesliharfDuzenle(p1.personel1);
                p1.tel = Turkce.NoDuzenle(p1.tel);
                p1.adres = Turkce.sesliharfDuzenle(p1.adres);
                db.personel.Add(p1);
                db.SaveChanges();
                TempData["personelGuncelle"] = " ";
                return RedirectToAction("personel");
            }
            else
            {
                TempData["personelHata1"] = " ";
                return RedirectToAction("personelekle");
            }
        }

        [Authorize(Roles = "Admin,Yonetici")]
        public ActionResult personelguncelle(int personelid)
        {
            var personel = db.personel.Find(personelid);
            {
                List<SelectListItem> degerler = (from i in db.company.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.company1,
                                                     Value = i.companyid.ToString()
                                                 }).ToList();
                ViewBag.CompanyList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.region.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.region1,
                                                     Value = i.regionid.ToString()
                                                 }).ToList();
                ViewBag.RegionList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.unit.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.unit1,
                                                     Value = i.unitid.ToString()
                                                 }).ToList();
                ViewBag.UnitList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.departman.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.departman1,
                                                     Value = i.departmanid.ToString()
                                                 }).ToList();
                ViewBag.DepartmanList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.authorized.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.authorized1,
                                                     Value = i.authorizedid.ToString()
                                                 }).ToList();
                ViewBag.AuthorizedList = degerler;
            }

            return View("personelguncelle", personel);
        }

        [Authorize(Roles = "Admin,Yonetici")]
        public ActionResult personelfotocvguncelle(int personelid)
        {
            var personelfv = db.personel.Find(personelid);
            return View("personelfotocvguncelle", personelfv);
        }

        [Authorize(Roles = "Admin,Yonetici")]
        [HttpPost]
        public ActionResult pguncelle(personel p)
        {
            if (!ModelState.IsValid)
            {
                return View("pguncelle");
            }
            var veri = db.personel.Find(p.personelid);
            var companyget = db.company.Where(m => m.companyid == p.company.companyid).FirstOrDefault();
            var regionget = db.region.Where(m => m.regionid == p.region.regionid).FirstOrDefault();
            var unitget = db.unit.Where(m => m.unitid == p.unit.unitid).FirstOrDefault();
            var departmanget = db.departman.Where(m => m.departmanid == p.departman.departmanid).FirstOrDefault();
            var authorizedget = db.authorized.Where(m => m.authorizedid == p.authorized.authorizedid).FirstOrDefault();
            veri.personel1 = Turkce.sesliharfDuzenle(p.personel1);
            veri.tc = p.tc;
            veri.tel = Turkce.NoDuzenle(p.tel);
            veri.email = p.email;
            veri.adres = Turkce.sesliharfDuzenle(p.adres);
            veri.workingstart = p.workingstart;
            veri.workingstop = p.workingstop;
            veri.performance = p.performance;
            veri.pirim = p.pirim;
            veri.pay = p.pay;
            veri.children = p.children;
            veri.civilstatusget = p.civilstatusget;
            veri.mesai = p.mesai;
            veri.mesaidays = p.mesaidays;
            veri.gender = p.gender;
            veri.companyget = companyget.companyid;
            veri.regionget = regionget.regionid;
            veri.unitget = unitget.unitid;
            veri.departmanget = departmanget.departmanid;
            veri.authorizedget = authorizedget.authorizedid;
            db.SaveChanges();
            TempData["personelGuncelle"] = " ";
            return RedirectToAction("personel");
        }

        [Authorize(Roles = "Admin,Yonetici")]
        [HttpPost]
        public ActionResult pguncellefv(personel pfv)
        {
            if (!ModelState.IsValid)
            {
                return View("pguncellefv");
            }
            var verifvp = db.personel.Find(pfv.personelid);    
            verifvp.profilephoto = Turkce.DosyaAdiDuzenle(pfv.profilephoto);
            verifvp.digitalcv = Turkce.DosyaAdiDuzenle(pfv.digitalcv);
            db.SaveChanges();
            TempData["personelGuncelle"] = " ";
            return RedirectToAction("personel");
        }

        [Authorize(Roles = "Admin,Yonetici")]
        public ActionResult personelsil(int personelid)
        {
            var sil = db.personel.Find(personelid);
            if (sil == null)
            {
                return RedirectToAction("personel");
            }
            db.personel.Remove(sil);
            db.SaveChanges();
            TempData["personelGuncelle"] = " ";
            return RedirectToAction("personel");
        }

        //--------------------------------------- YONETİM ALANI --------------------------------------------------------
        [Authorize(Roles = "Admin")]
        public ActionResult yonetim()
        {
            var degerlera = db.authorized.ToList();
            return View(degerlera);
        }

        [Authorize(Roles = "Admin,Yonetici")]
        public ActionResult yonetimizin(int authorizedid)
        {
            var yonetim = db.authorized.Find(authorizedid);
            return View(yonetim);
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        public ActionResult yoneticiekle()
        {
            {
                List<SelectListItem> degerlera = (from i in db.company.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.company1,
                                                     Value = i.companyid.ToString()
                                                 }).ToList();
                ViewBag.CompanyList = degerlera;
            }
            {
                List<SelectListItem> degerlera = (from i in db.region.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.region1,
                                                     Value = i.regionid.ToString()
                                                 }).ToList();
                ViewBag.RegionList = degerlera;
            }
            {
                List<SelectListItem> degerlera = (from i in db.unit.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.unit1,
                                                     Value = i.unitid.ToString()
                                                 }).ToList();
                ViewBag.UnitList = degerlera;
            }
            {
                List<SelectListItem> degerlera = (from i in db.departman.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.departman1,
                                                     Value = i.departmanid.ToString()
                                                 }).ToList();
                ViewBag.DepartmanList = degerlera;
            }
            return View();
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult yoneticiekle(authorized p3)
        {
            if (!ModelState.IsValid)
            {
                return View("yoneticiekle");
            }
            var yoneticivarmi1 = db.personel.FirstOrDefault(x => x.tel == p3.tel);
            var yoneticivarmi2 = db.personel.FirstOrDefault(x => x.tc == p3.tc);
            var yoneticivarmi3 = db.personel.FirstOrDefault(x => x.email == p3.email);
            var yoneticivarmi = db.personel.FirstOrDefault(x => x.tel == p3.tel && x.email == p3.email && x.tc == p3.tc);

            if (yoneticivarmi1 != null)
            {
                TempData["ytelvar"] = " ";
                return RedirectToAction("yoneticiekle");

            }
            else if (yoneticivarmi2 != null)
            {
                TempData["ytcvar"] = " ";
                return RedirectToAction("yoneticiekle");

            }
            else if (yoneticivarmi3 != null)
            {
                TempData["yemailvar"] = " ";
                return RedirectToAction("yoneticiekle");

            }
            else if (yoneticivarmi == null)
            {
                var companyget = db.company.Where(x=> x.companyid == p3.company.companyid).FirstOrDefault();
            var regionget = db.region.Where(x => x.regionid == p3.region.regionid).FirstOrDefault();
            var unitget = db.unit.Where(x => x.unitid == p3.unit.unitid).FirstOrDefault();
            var departmanget = db.departman.Where(x => x.departmanid == p3.departman.departmanid).FirstOrDefault();
            p3.company = companyget;
            p3.region = regionget;
            p3.unit = unitget;
            p3.departman = departmanget;
            p3.profilephoto = Turkce.DosyaAdiDuzenle(p3.profilephoto);
            p3.digitalcv = Turkce.DosyaAdiDuzenle(p3.digitalcv);
            p3.authorized1 = Turkce.sesliharfDuzenle(p3.authorized1);
            p3.tel = Turkce.NoDuzenle(p3.tel);
            p3.adres = Turkce.sesliharfDuzenle(p3.adres);
            db.authorized.Add(p3);
            db.SaveChanges();
            TempData["yonetimGuncelle"] = " ";
            return RedirectToAction("yonetim");
            }
            else
            {
                TempData["yonetimHata1"] = " ";
                return RedirectToAction("yoneticiekle");
            }
        }

        [Authorize(Roles = "Admin")]
        public ActionResult yonetimguncelle(int authorizedid)
        {
            var yonetim = db.authorized.Find(authorizedid);
            {
                List<SelectListItem> degerler = (from i in db.company.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.company1,
                                                     Value = i.companyid.ToString()
                                                 }).ToList();
                ViewBag.CompanyList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.region.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.region1,
                                                     Value = i.regionid.ToString()
                                                 }).ToList();
                ViewBag.RegionList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.unit.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.unit1,
                                                     Value = i.unitid.ToString()
                                                 }).ToList();
                ViewBag.UnitList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.departman.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.departman1,
                                                     Value = i.departmanid.ToString()
                                                 }).ToList();
                ViewBag.DepartmanList = degerler;
            }
            return View("yonetimguncelle", yonetim);
        }

        [Authorize(Roles = "Admin")]
        public ActionResult yonetimfotocvguncelle(int authorizedid)
        {
            var yonetimfv = db.authorized.Find(authorizedid);
            return View("yonetimfotocvguncelle", yonetimfv);
        }

        [Authorize(Roles = "Admin")]

        [HttpPost]
        public ActionResult yguncelle(authorized p2)
        {
            if (!ModelState.IsValid)
            {
                return View("yguncelle");
            }
            var veri = db.authorized.Find(p2.authorizedid);
            var companyget = db.company.Where(m => m.companyid == p2.company.companyid).FirstOrDefault();
            var regionget = db.region.Where(m => m.regionid == p2.region.regionid).FirstOrDefault();
            var unitget = db.unit.Where(m => m.unitid == p2.unit.unitid).FirstOrDefault();
            var departmanget = db.departman.Where(m => m.departmanid == p2.departman.departmanid).FirstOrDefault();
            veri.authorized1 = Turkce.sesliharfDuzenle(p2.authorized1);
            veri.tc = p2.tc;
            veri.tel = Turkce.NoDuzenle(p2.tel);
            veri.adres = Turkce.sesliharfDuzenle(p2.adres);
            veri.workingstart = p2.workingstart;
            veri.workingstop = p2.workingstop;
            veri.pay = p2.pay;
            veri.performance = p2.performance;
            veri.pirim = p2.pirim;
            veri.email = p2.email;
            veri.children = p2.children;
            veri.civilstatusget = p2.civilstatusget;
            veri.mesai = p2.mesai;
            veri.mesaidays = p2.mesaidays;
            veri.gender = p2.gender;
            veri.companyget = companyget.companyid;
            veri.regionget = regionget.regionid;
            veri.unitget = unitget.unitid;
            veri.departmanget = departmanget.departmanid;
            db.SaveChanges();
            TempData["yonetimGuncelle"] = " ";
            return RedirectToAction("yonetim");
        }

        [Authorize(Roles = "Admin")]

        [HttpPost]
        public ActionResult yguncellefv(authorized pfv2)
        {
            if (!ModelState.IsValid)
            {
                return View("yguncellefv");
            }
            var verifv = db.authorized.Find(pfv2.authorizedid);    
            verifv.profilephoto = Turkce.DosyaAdiDuzenle(pfv2.profilephoto);
            verifv.digitalcv = Turkce.DosyaAdiDuzenle(pfv2.digitalcv);
            db.SaveChanges();
            TempData["yonetimGuncelle"] = " ";
            return RedirectToAction("yonetim");
        }

        [Authorize(Roles = "Admin")]
        public ActionResult yonetimsil(int authorizedid)
        {
            var sil = db.authorized.Find(authorizedid);
            if (sil == null)
            {
                return RedirectToAction("yonetim");
            }
            db.authorized.Remove(sil);
            db.SaveChanges();
            TempData["yonetimGuncelle"] = " ";
            return RedirectToAction("yonetim");
        }

        //-----------------------------------------------------MESSAGE BOX------------------------------------------//
        public JsonResult mbox()
        {
            var mboxsay = db.messagebox.ToList();
            return Json(
                new
                {
                    Result = from obj in mboxsay
                             select new
                             {
                                 obj.messageid,
                                 obj.color
                             }
                }, JsonRequestBehavior.AllowGet
            );

        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        public ActionResult MessageBox()
        {
            var degerlera = db.messagebox.ToList();
            return View(degerlera);
        }

        [Authorize(Roles = "Admin")]
        public ActionResult MessageBoxguncelle(int messageid)

        {
            var messagebox = db.messagebox.Find(messageid);
            return View("messageboxguncelle", messagebox);
        }

        [Authorize(Roles = "Admin")]
        public ActionResult MessageCevapla(int messageid)

        {
            var messageboxcvp = db.messagebox.Find(messageid);
            return View("messagecevapla", messageboxcvp);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult MessageCvp(MessageCevapla model, List<HttpPostedFileBase> attachments)

        {
            if (!ModelState.IsValid)
            {
                return View("messagecevapla");
            }
            var veri = db.messagebox.Find(model.messageid);
            if (veri != null && veri.youremail == model.youremail)
            {
                veri.youremail = model.youremail;
                veri.subject = Turkce.sesliharfDuzenle(model.subject);

                using (MailMessage mm = new MailMessage(model.Email, model.youremail))
            {
                mm.Subject = model.subject;
                mm.Body = Turkce.sesliharfDuzenle(model.Body);
                foreach (HttpPostedFileBase attachment in attachments)
                {
                    if (attachment != null)
                    {
                        string fileName = Path.GetFileName(attachment.FileName);
                        mm.Attachments.Add(new Attachment(attachment.InputStream, fileName));
                    }
                }
                mm.IsBodyHtml = false;
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.EnableSsl = true;
                NetworkCredential NetworkCred = new NetworkCredential(model.Email, model.Password);
                smtp.UseDefaultCredentials = true;
                smtp.Credentials = NetworkCred;
                smtp.Port = 587;
                smtp.Send(mm);
            }
            db.SaveChanges();
            TempData["MessageSend"] = " ";
            return RedirectToAction("messagebox");
            }
            else
            {
                ModelState.Clear();
                ViewBag.Error2 = "E-Posta Adresi Bulunamadı";
                return View();
            }
        }


        [Authorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult mbguncelle(messagebox m2)
        {
            if (!ModelState.IsValid)
            {
                return View("messageboxguncelle");
            }
            var veri = db.messagebox.Find(m2.messageid);
            veri.namesurname = Turkce.sesliharfDuzenle(m2.namesurname);
            veri.youremail = m2.youremail;
            veri.subject = Turkce.sesliharfDuzenle(m2.subject);
            veri.message = Turkce.sesliharfDuzenle(m2.message);
            veri.referancenumber = m2.referancenumber;
            veri.date = m2.date;
            veri.color = m2.color;
            db.SaveChanges();
            TempData["MessageGuncelle"] = " ";
            return RedirectToAction("messagebox");
        }


        [Authorize(Roles = "Admin")]
        public ActionResult MessageBoxsil(int messageid)
        {
            var sil = db.messagebox.Find(messageid);
            if (sil == null)
            {
                return RedirectToAction("messagebox");
            }
            db.messagebox.Remove(sil);
            db.SaveChanges();
            TempData["MessageSil"] = " ";
            return RedirectToAction("messagebox");
        }

        //--------------------------------SEND E-MAİL---------------------------------//
        [Authorize(Roles = "Admin")]
        public ActionResult MessageSend()
        {
            return View();
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult MessageSend(MessageModel model, List<HttpPostedFileBase> attachments)
        {
            using (MailMessage mm = new MailMessage(model.Email, model.To))
            {
                mm.Subject = Turkce.sesliharfDuzenle(model.Subject);
                mm.Body = Turkce.sesliharfDuzenle(model.Body);
                foreach (HttpPostedFileBase attachment in attachments)
                {
                    if (attachment != null)
                    {
                        string fileName = Path.GetFileName(attachment.FileName);
                        mm.Attachments.Add(new Attachment(attachment.InputStream, fileName));
                    }
                }
                mm.IsBodyHtml = false;
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.EnableSsl = true;
                NetworkCredential NetworkCred = new NetworkCredential(model.Email, model.Password);
                smtp.UseDefaultCredentials = true;
                smtp.Credentials = NetworkCred;
                smtp.Port = 587;
                smtp.Send(mm);
                TempData["MessageSend"] = " ";
            }

            return RedirectToAction("messagebox");
        }

        //-------------------------------OTURUM USER - PERSONAL - YONETICI - HOME IMAGE  AND CV - BELGE UPLOAD----------------------------------------//

        public JsonResult belgeUpload(yuklenenbelgeler model)
        {

            var file = model.belgeFile;

            if (file != null)
            {

                var fileName = Path.GetFileName(Turkce.DosyaAdiDuzenle(model.belgeFile.FileName));
                var extention = Path.GetExtension(Turkce.DosyaAdiDuzenle(model.belgeFile.FileName));
                var filenamewithoutextension = Path.GetFileNameWithoutExtension(Turkce.DosyaAdiDuzenle(model.belgeFile.FileName));

                file.SaveAs(Server.MapPath("~/Content/Admin/data/belge/" + Turkce.DosyaAdiDuzenle(model.belgeFile.FileName)));

            }

            return Json(Turkce.DosyaAdiDuzenle(model.belgeFile.FileName), JsonRequestBehavior.AllowGet);

        }
        public JsonResult uImageUpload(users model)
        {

            var file = model.profilephotoFile;

            if (file != null)
            {

                var fileName = Path.GetFileName(Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName));
                var extention = Path.GetExtension(Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName));
                var filenamewithoutextension = Path.GetFileNameWithoutExtension(Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName));

                file.SaveAs(Server.MapPath("~/Content/Admin/data/user/uimg/" + Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName)));

            }

            return Json(Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName), JsonRequestBehavior.AllowGet);

        }
        public JsonResult pImageUpload(personel model)
        {

            var file = model.profilephotoFile;

            if (file != null)
            {

                var fileName = Path.GetFileName(Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName));
                var extention = Path.GetExtension(Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName));
                var filenamewithoutextension = Path.GetFileNameWithoutExtension(Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName));

                file.SaveAs(Server.MapPath("~/Content/Admin/data/personel/pimg/" + Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName)));

            }

            return Json(Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName), JsonRequestBehavior.AllowGet);

        }

        public JsonResult pFileUpload(personel model)
        {

            var file = model.digitalcvFile;

            if (file != null)
            {

                var fileName = Path.GetFileName(Turkce.DosyaAdiDuzenle(model.digitalcvFile.FileName));
                var extention = Path.GetExtension(Turkce.DosyaAdiDuzenle(model.digitalcvFile.FileName));
                var filenamewithoutextension = Path.GetFileNameWithoutExtension(Turkce.DosyaAdiDuzenle(model.digitalcvFile.FileName));

                file.SaveAs(Server.MapPath("~/Content/Admin/data/personel/pcv/" + Turkce.DosyaAdiDuzenle(model.digitalcvFile.FileName)));

            }

            return Json(Turkce.DosyaAdiDuzenle(model.digitalcvFile.FileName), JsonRequestBehavior.AllowGet);

        }
        public JsonResult yImageUpload(authorized model)
        {

            var file = model.profilephotoFile;

            if (file != null)
            {

                var fileName = Path.GetFileName(Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName));
                var extention = Path.GetExtension(Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName));
                var filenamewithoutextension = Path.GetFileNameWithoutExtension(Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName));

                file.SaveAs(Server.MapPath("~/Content/Admin/data/yonetim/yimg/" + Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName)));


            }

            return Json(Turkce.DosyaAdiDuzenle(model.profilephotoFile.FileName), JsonRequestBehavior.AllowGet);

        }
        public JsonResult yFileUpload(authorized model)
        {

            var file = model.digitalcvFile;

            if (file != null)
            {

                var fileName = Path.GetFileName(Turkce.DosyaAdiDuzenle(model.digitalcvFile.FileName));
                var extention = Path.GetExtension(Turkce.DosyaAdiDuzenle(model.digitalcvFile.FileName));
                var filenamewithoutextension = Path.GetFileNameWithoutExtension(Turkce.DosyaAdiDuzenle(model.digitalcvFile.FileName));

                file.SaveAs(Server.MapPath("~/Content/Admin/data/yonetim/ycv/" + Turkce.DosyaAdiDuzenle(model.digitalcvFile.FileName)));

            }

            return Json(Turkce.DosyaAdiDuzenle(model.digitalcvFile.FileName), JsonRequestBehavior.AllowGet);

        }
        public JsonResult hImageUpload(home model)
        {

            var file = model.content1file;

            if (file != null)
            {

                var fileName = Path.GetFileName(Turkce.DosyaAdiDuzenle(model.content1file.FileName));
                var extention = Path.GetExtension(Turkce.DosyaAdiDuzenle(model.content1file.FileName));
                var filenamewithoutextension = Path.GetFileNameWithoutExtension(Turkce.DosyaAdiDuzenle(model.content1file.FileName));

                file.SaveAs(Server.MapPath("~/Content/Admin/data/home/himg/" + Turkce.DosyaAdiDuzenle(model.content1file.FileName)));

            }
           

            return Json(Turkce.DosyaAdiDuzenle(model.content1file.FileName), JsonRequestBehavior.AllowGet);

        }
        public JsonResult h2ImageUpload(home model)
        {

            var file = model.content2file;

            if (file != null)
            {

                var fileName = Path.GetFileName(Turkce.DosyaAdiDuzenle(model.content2file.FileName));
                var extention = Path.GetExtension(Turkce.DosyaAdiDuzenle(model.content2file.FileName));
                var filenamewithoutextension = Path.GetFileNameWithoutExtension(Turkce.DosyaAdiDuzenle(model.content2file.FileName));


                file.SaveAs(Server.MapPath("~/Content/Admin/data/home/himg/" + Turkce.DosyaAdiDuzenle(model.content2file.FileName)));


            }
            return Json(Turkce.DosyaAdiDuzenle(model.content2file.FileName), JsonRequestBehavior.AllowGet);

        }
        public JsonResult h3ImageUpload(home model)
        {

            var file = model.content3file;

            if (file != null)
            {

                var fileName = Path.GetFileName(Turkce.DosyaAdiDuzenle(model.content3file.FileName));
                var extention = Path.GetExtension(Turkce.DosyaAdiDuzenle(model.content3file.FileName));
                var filenamewithoutextension = Path.GetFileNameWithoutExtension(Turkce.DosyaAdiDuzenle(model.content3file.FileName));

                file.SaveAs(Server.MapPath("~/Content/Admin/data/home/himg/" + Turkce.DosyaAdiDuzenle(model.content3file.FileName)));

            }


            return Json(Turkce.DosyaAdiDuzenle(model.content3file.FileName), JsonRequestBehavior.AllowGet);

        }
        public JsonResult h4ImageUpload(home model)
        {

            var file = model.content4file;

            if (file != null)
            {

                var fileName = Path.GetFileName(Turkce.DosyaAdiDuzenle(model.content4file.FileName));
                var extention = Path.GetExtension(Turkce.DosyaAdiDuzenle(model.content4file.FileName));
                var filenamewithoutextension = Path.GetFileNameWithoutExtension(Turkce.DosyaAdiDuzenle(model.content4file.FileName));

                file.SaveAs(Server.MapPath("~/Content/Admin/data/home/himg/" + Turkce.DosyaAdiDuzenle(model.content4file.FileName)));

            }


            return Json(Turkce.DosyaAdiDuzenle(model.content4file.FileName), JsonRequestBehavior.AllowGet);

        }


        /////////////----------------------------------------------YORUMLAR------------------------------------------///


        public JsonResult cbox()
        {
            var cboxsay = db.comment.ToList();
            return Json(
                new
                {
                    Result = from obj in cboxsay
                             select new
                             {
                                 obj.comment1,
                                 obj.color
                             }
                }, JsonRequestBehavior.AllowGet
            );

        }

        [Authorize(Roles = "Admin,Yonetici")]
        public ActionResult yorumlar()
        {
            var comment = db.comment.ToList();
            return View(comment);
        }

        [HttpGet]
        public ActionResult yorumekle()
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
            {
                List<SelectListItem> degerler = (from i in db.region.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.region1,
                                                     Value = i.regionid.ToString()
                                                 }).ToList();
                ViewBag.RegionList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.unit.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.unit1,
                                                     Value = i.unitid.ToString()
                                                 }).ToList();
                ViewBag.UnitList = degerler;
            }
            return View();
        }

        [HttpPost]
        public ActionResult yorumekle(comment y3, invoice i3)
        {
            if (!ModelState.IsValid)
            {
                return View("yorumlar");
            }
            var refvarmi = db.invoice.FirstOrDefault(x => x.referancenumber == i3.referancenumber);
            if (refvarmi != null)
            {
                var companyget = db.company.Where(x => x.companyid == y3.company.companyid).FirstOrDefault();
                var regionget = db.region.Where(x => x.regionid == y3.region.regionid).FirstOrDefault();
                var unitget = db.unit.Where(x => x.unitid == y3.unit.unitid).FirstOrDefault();
                y3.company = companyget;
                y3.region = regionget;
                y3.unit = unitget;
                y3.namesurname = Turkce.sesliharfDuzenle(y3.namesurname);
                y3.subject = Turkce.sesliharfDuzenle(y3.subject);
                y3.tel = Turkce.NoDuzenle(y3.tel);
                y3.comment1 = Turkce.sesliharfDuzenle(y3.comment1);
                db.comment.Add(y3);
                db.SaveChanges();
                TempData["yorumGuncelle"] = " ";
                return RedirectToAction("yorumlar");
            }
            else
            {
                TempData["yorumHata"] = " ";
                return RedirectToAction("yorumekle");
            }
        }

        [Authorize(Roles = "Admin,Yonetici")]
        [HttpGet]
        public ActionResult yorumguncelle(int checkcommentid)
        {
            var yorum = db.comment.Find(checkcommentid);
            {
                List<SelectListItem> degerler = (from i in db.company.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.company1,
                                                     Value = i.companyid.ToString()
                                                 }).ToList();
                ViewBag.CompanyList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.region.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.region1,
                                                     Value = i.regionid.ToString()
                                                 }).ToList();
                ViewBag.RegionList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.unit.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.unit1,
                                                     Value = i.unitid.ToString()
                                                 }).ToList();
                ViewBag.UnitList = degerler;
            }        
            return View("yorumguncelle", yorum);
        }

        [Authorize(Roles = "Admin")]

        [HttpPost]
        public ActionResult yrmguncelle(comment y2)
        {
            if (!ModelState.IsValid)
            {
                return View("yguncelle");
            }
            var veri = db.comment.Find(y2.checkcommentid);
            var companyget = db.company.Where(m => m.companyid == y2.company.companyid).FirstOrDefault();
            var regionget = db.region.Where(m => m.regionid == y2.region.regionid).FirstOrDefault();
            var unitget = db.unit.Where(m => m.unitid == y2.unit.unitid).FirstOrDefault();
            veri.referancenumber = y2.referancenumber;
            veri.date = y2.date;
            veri.namesurname = Turkce.sesliharfDuzenle(y2.namesurname);
            veri.tc = y2.tc;
            veri.tel = Turkce.NoDuzenle(y2.tel);
            veri.email = y2.email;
            veri.subject = Turkce.sesliharfDuzenle(y2.subject);
            veri.comment1 = Turkce.sesliharfDuzenle(y2.comment1);
            veri.color = y2.color;
            veri.companyget = companyget.companyid;
            veri.regionget = regionget.regionid;
            veri.unitget = unitget.unitid;
            db.SaveChanges();
            TempData["yorumGuncelle"] = " ";
            return RedirectToAction("yorumlar");
        }

        [Authorize(Roles = "Admin")]
        public ActionResult yorumsil(int checkcommentid)
        {
            var sil = db.comment.Find(checkcommentid);
            if (sil == null)
            {
                return RedirectToAction("yorumlar");
            }
            db.comment.Remove(sil);
            db.SaveChanges();
            TempData["yorumGuncelle"] = " ";
            return RedirectToAction("yorumlar");
        }


        ///--------------------------------------BORDRO VERİLERİ VE FORMLAR -----------------------------/////
        [Authorize(Roles = "Admin,Yonetici")]
        public JsonResult bordroveriler()
        {
            var bordroveriler = db.ucretbordro.ToList();
            return Json(
                new
                {
                    Result = from obj in bordroveriler
                             select new
                             {
                                 obj.ucretbordroid,
                                 obj.sgksabiti,
                                 obj.sgkisveren,
                                 obj.isverenissizsigfon,
                                 obj.isverenmaliyet,
                                 obj.nrkazanc,
                                 obj.iszsigiscipayi,
                                 obj.sgkiscipayi,
                                 obj.gvmahtari,
                                 obj.gelirvergisi,
                                 obj.agi,
                                 obj.kendiagiyuzdesi,
                                 obj.esagiyuzdesi,
                                 obj.birveikicocukagiyuzdesi,
                                 obj.uccocukyuzdesi,
                                 obj.dortveuzericocukyuzdesi,
                                 obj.damgavergi,
                                 obj.netkazanc,
                                 obj.gunlukkazanc,
                                 obj.pirimyuzdesi,
                                 obj.mesaiucreti,
                                 obj.yoneticifark,
                                 obj.yoneticipirimyuzdesi,
                                 obj.pirimlimit,
                                 obj.yoneticimesaiucreti
                             }
                }, JsonRequestBehavior.AllowGet
            );

        }

        [Authorize(Roles = "Admin,Yonetici")]
        public ActionResult saharaporu()
        {
            return View();
        }
        [Authorize(Roles = "Admin,Yonetici")]
        public ActionResult fiyatteklifi()
        {
            return View();
        }

        [Authorize(Roles = "Admin,Yonetici")]
        public ActionResult yuklenenbelgeler()
        {
            var degerlerb = db.yuklenenbelgeler.ToList();
            return View(degerlerb);
        }

        [Authorize(Roles = "Admin,Yonetici")]
        [HttpGet]
        public ActionResult belgeekle()
        {
            return View();
        }

        [Authorize(Roles = "Admin,Yonetici")]
        [HttpPost]
        public ActionResult belgeekle(yuklenenbelgeler b3)
        {
            if (!ModelState.IsValid)
            {
                return View("belgeekle");
            }
                b3.belge = Turkce.DosyaAdiDuzenle(b3.belge);
                b3.Description = Turkce.sesliharfDuzenle(b3.Description);
                db.yuklenenbelgeler.Add(b3);
                db.SaveChanges();
                TempData["belgeGuncelle"] = " ";
                return RedirectToAction("yuklenenbelgeler");
        }

        [Authorize(Roles = "Admin,Yonetici")]
        public ActionResult belgeguncelle(int belgeid)
        {
            var belge = db.yuklenenbelgeler.Find(belgeid);          
            return View("belgeguncelle", belge);
        }

        [Authorize(Roles = "Admin,Yonetici")]
        [HttpPost]
        public ActionResult belguncelle(yuklenenbelgeler b2)
        {
            if (!ModelState.IsValid)
            {
                return View("belguncelle");
            }
            var veri = db.yuklenenbelgeler.Find(b2.belgeid);
            veri.date = b2.date;
            veri.belge = Turkce.DosyaAdiDuzenle(b2.belge);
            veri.Description = Turkce.sesliharfDuzenle(b2.Description);
            db.SaveChanges();
            TempData["belgeGuncelle"] = " ";
            return RedirectToAction("yuklenenbelgeler");
        }

        [Authorize(Roles = "Admin")]
        public ActionResult belgesil(int belgeid)
        {
            var sil = db.yuklenenbelgeler.Find(belgeid);
            if (sil == null)
            {
                return RedirectToAction("yuklenenbelgeler");
            }
            db.yuklenenbelgeler.Remove(sil);
            db.SaveChanges();
            TempData["belgeGuncelle"] = " ";
            return RedirectToAction("yuklenenbelgeler");
        }


        // ---------------------------------------- FATURA ------------------------------ //

        public ActionResult invoice ()
        {
            var deger = db.invoice.ToList();
            return View(deger);
        }
        public ActionResult invoiceget(int invoiceid)
        {
            var detay = db.invoice.Find(invoiceid);
            {
                List<SelectListItem> degerler = (from i in db.company.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.company1,
                                                     Value = i.companyid.ToString()
                                                 }).ToList();
                ViewBag.CompanyList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.region.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.region1,
                                                     Value = i.regionid.ToString()
                                                 }).ToList();
                ViewBag.RegionList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.unit.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.unit1,
                                                     Value = i.unitid.ToString()
                                                 }).ToList();
                ViewBag.UnitList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.authorized.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.authorized1,
                                                     Value = i.authorizedid.ToString()
                                                 }).ToList();
                ViewBag.AuthorizedList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.personel.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.personel1,
                                                     Value = i.personelid.ToString()
                                                 }).ToList();
                ViewBag.PersonelList = degerler;
            }
            return View("invoiceget", detay);
        }

        [HttpGet]
        public ActionResult invoiceolustur()
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
            {
                List<SelectListItem> degerler = (from i in db.region.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.region1,
                                                     Value = i.regionid.ToString()
                                                 }).ToList();
                ViewBag.RegionList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.unit.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.unit1,
                                                     Value = i.unitid.ToString()
                                                 }).ToList();
                ViewBag.UnitList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.authorized.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.authorized1,
                                                     Value = i.authorizedid.ToString()
                                                 }).ToList();
                ViewBag.AuthorizedList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.personel.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.personel1,
                                                     Value = i.personelid.ToString()
                                                 }).ToList();
                ViewBag.PersonelList = degerler;
            }
            return View();
        }
        public ActionResult invoiceolustur(invoice i3)
        {
            if (!ModelState.IsValid)
            {
                return View("invoiceolustur");
            }
            var companyget = db.company.Where(x => x.companyid == i3.company.companyid).FirstOrDefault();
            var regionget = db.region.Where(x => x.regionid == i3.region.regionid).FirstOrDefault();
            var unitget = db.unit.Where(x => x.unitid == i3.unit.unitid).FirstOrDefault();
            var authorizedget = db.authorized.Where(x => x.authorizedid == i3.authorized.authorizedid).FirstOrDefault();
            var personelget = db.personel.Where(x => x.personelid == i3.personel.personelid).FirstOrDefault();
            i3.company = companyget;
            i3.region = regionget;
            i3.unit = unitget;
            i3.authorized = authorizedget;
            i3.personel = personelget;
            i3.namesurname = Turkce.sesliharfDuzenle(i3.namesurname);
            i3.tel = Turkce.NoDuzenle(i3.tel);
            i3.adres = Turkce.sesliharfDuzenle(i3.adres);
            i3.product = Turkce.sesliharfDuzenle(i3.product);
            i3.description = Turkce.sesliharfDuzenle(i3.description);
            db.invoice.Add(i3);
            db.SaveChanges();
            TempData["invoicelGuncelle"] = " ";
            return RedirectToAction("invoice");
        }

        [HttpGet]
        public ActionResult invoiceguncelle(int invoiceid)
        {
            var guncelle = db.invoice.Find(invoiceid);
            {
                List<SelectListItem> degerler = (from i in db.company.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.company1,
                                                     Value = i.companyid.ToString()
                                                 }).ToList();
                ViewBag.CompanyList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.region.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.region1,
                                                     Value = i.regionid.ToString()
                                                 }).ToList();
                ViewBag.RegionList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.unit.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.unit1,
                                                     Value = i.unitid.ToString()
                                                 }).ToList();
                ViewBag.UnitList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.authorized.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.authorized1,
                                                     Value = i.authorizedid.ToString()
                                                 }).ToList();
                ViewBag.AuthorizedList = degerler;
            }
            {
                List<SelectListItem> degerler = (from i in db.personel.ToList()
                                                 select new SelectListItem
                                                 {
                                                     Text = i.personel1,
                                                     Value = i.personelid.ToString()
                                                 }).ToList();
                ViewBag.PersonelList = degerler;
            }
            return View("invoiceguncelle", guncelle);
        }
        public ActionResult gncinvoice(invoice i2)
        {
            if (!ModelState.IsValid)
            {
                return View("gncinvoice");
            }
            var veri = db.invoice.Find(i2.invoiceid);
            var companyget = db.company.Where(x => x.companyid == i2.company.companyid).FirstOrDefault();
            var regionget = db.region.Where(x => x.regionid == i2.region.regionid).FirstOrDefault();
            var unitget = db.unit.Where(x => x.unitid == i2.unit.unitid).FirstOrDefault();
            var authorizedget = db.authorized.Where(x => x.authorizedid == i2.authorized.authorizedid).FirstOrDefault();
            var personelget = db.personel.Where(x => x.personelid == i2.personel.personelid).FirstOrDefault();
            veri.referancenumber = i2.referancenumber;
            veri.date = i2.date;
            veri.namesurname = Turkce.sesliharfDuzenle(i2.namesurname);
            veri.tc = i2.tc;
            veri.tel = Turkce.NoDuzenle(i2.tel);
            veri.adres = Turkce.sesliharfDuzenle(i2.adres);
            veri.email = i2.email;
            veri.product = Turkce.sesliharfDuzenle(i2.product);
            veri.description = Turkce.sesliharfDuzenle(i2.description);
            veri.tax = i2.tax;
            veri.pay = i2.pay;
            veri.subtotal = i2.subtotal;
            veri.total = i2.total;
            veri.companyget = companyget.companyid;
            veri.regionget = regionget.regionid;
            veri.unitget = unitget.unitid;
            veri.authorizedget = authorizedget.authorizedid;
            veri.personelget = personelget.personelid;
            db.SaveChanges();
            TempData["invoicelGuncelle"] = " ";
            return RedirectToAction("invoice");
        }


        [Authorize(Roles = "Admin")]
        public ActionResult invoicesil(int invoiceid)
        {
            var sil = db.invoice.Find(invoiceid);
            if (sil == null)
            {
                return RedirectToAction("invoice");
            }
            db.invoice.Remove(sil);
            db.SaveChanges();
            TempData["invoicelGuncelle"] = " ";
            return RedirectToAction("invoice");
        }
    }
}