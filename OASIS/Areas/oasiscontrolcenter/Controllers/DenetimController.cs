using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OASIS.Models.Entity;

namespace OASIS.Areas.oasiscontrolcenter.Controllers
{
    public class DenetimController : Controller
    {
        // GET: oasiscontrolcenter/Denetim
        oasisEntities db = new oasisEntities();
        [Authorize(Roles = "Admin,Yonetici")]
        public ActionResult denetimler()
        {
            var degerler = db.check.ToList();
            return View(degerler);
        }

        [Authorize(Roles = "Admin,Yonetici")]
        [HttpGet]
        public ActionResult denetimekle()
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
        public ActionResult denetimekle(check c1)
        {
            if (!ModelState.IsValid)
            {
                return View("denetimekle");
            }
            var companyget = db.company.Where(m => m.companyid == c1.company.companyid).FirstOrDefault();
            var regionget = db.region.Where(m => m.regionid == c1.region.regionid).FirstOrDefault();
            var unitget = db.unit.Where(m => m.unitid == c1.unit.unitid).FirstOrDefault();
            var departmanget = db.departman.Where(m => m.departmanid == c1.departman.departmanid).FirstOrDefault();
            var authorizedget = db.authorized.Where(m => m.authorizedid == c1.authorized.authorizedid).FirstOrDefault();
            c1.company = companyget;
            c1.region = regionget;
            c1.unit = unitget;
            c1.departman = departmanget;
            c1.authorized = authorizedget;
            c1.suggestion = Turkce.sesliharfDuzenle(c1.suggestion);
            c1.location = Turkce.sesliharfDuzenle(c1.location);
            c1.content1 = Turkce.DosyaAdiDuzenle(c1.content1);
            c1.content2 = Turkce.DosyaAdiDuzenle(c1.content2);
            c1.content3 = Turkce.DosyaAdiDuzenle(c1.content3);
            c1.content4 = Turkce.DosyaAdiDuzenle(c1.content4);
            db.check.Add(c1);
            db.SaveChanges();
            TempData["denetimGuncelle"] = " ";
            return RedirectToAction("denetimler");
        }

        [Authorize(Roles = "Admin,Yonetici")]
        public ActionResult denetimguncelle(int checkid)
        {
            var checkguncelle = db.check.Find(checkid);
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
            return View("denetimGuncelle", checkguncelle);
        }

        [Authorize(Roles = "Admin,Yonetici")]
        [HttpPost]
        public ActionResult denguncelle(check c)
        {
            if (!ModelState.IsValid)
            {
                return View("denguncelle");
            }
            var veri = db.check.Find(c.checkid);

            var companyget = db.company.Where(m => m.companyid == c.company.companyid).FirstOrDefault();
            var regionget = db.region.Where(m => m.regionid == c.region.regionid).FirstOrDefault();
            var unitget = db.unit.Where(m => m.unitid == c.unit.unitid).FirstOrDefault();
            var departmanget = db.departman.Where(m => m.departmanid == c.departman.departmanid).FirstOrDefault();
            var authorizedget = db.authorized.Where(m => m.authorizedid == c.authorized.authorizedid).FirstOrDefault();
            veri.checkdate = c.checkdate;
            veri.check1 = c.check1;
            veri.check2 = c.check2;
            veri.check3 = c.check3;
            veri.check4 = c.check4;
            veri.check5 = c.check5;
            veri.check6 = c.check6;
            veri.check7 = c.check7;
            veri.check8 = c.check8;
            veri.check9 = c.check9;
            veri.check10 = c.check10;
            veri.check11 = c.check11;
            veri.check12 = c.check12;
            veri.check13 = c.check13;
            veri.check14 = c.check14;
            veri.check15 = c.check15;
            veri.suggestion = Turkce.sesliharfDuzenle(c.suggestion);
            veri.location = c.location;
            veri.content1 = Turkce.DosyaAdiDuzenle(c.content1);
            veri.content2 = Turkce.DosyaAdiDuzenle(c.content2);
            veri.content3 = Turkce.DosyaAdiDuzenle(c.content3);
            veri.content4 = Turkce.DosyaAdiDuzenle(c.content4);
            veri.companyget = companyget.companyid;
            veri.regionget = regionget.regionid;
            veri.unitget = unitget.unitid;
            veri.departmanget = departmanget.departmanid;
            veri.authorizedget = authorizedget.authorizedid;
            db.SaveChanges();
            TempData["denetimGuncelle"] = " ";
            return RedirectToAction("denetimler");
        }

        [Authorize(Roles = "Admin")]
        public ActionResult denetimsil(int checkid)
        {
            var sil = db.check.Find(checkid);
            if (sil == null)
            {
                return RedirectToAction("denetimler");
            }
            db.check.Remove(sil);
            db.SaveChanges();
            TempData["denetimGuncelle"] = " ";
            return RedirectToAction("denetimler");
        }
        public JsonResult cImageUpload(check model)
        {

            var file = model.content1file;

            if (file != null)
            {

                var fileName = Path.GetFileName(Turkce.DosyaAdiDuzenle(model.content1file.FileName));
                var extention = Path.GetExtension(Turkce.DosyaAdiDuzenle(model.content1file.FileName));
                var filenamewithoutextension = Path.GetFileNameWithoutExtension(Turkce.DosyaAdiDuzenle(model.content1file.FileName));

                file.SaveAs(Server.MapPath("~/Content/Admin/data/check/cimg/" + Turkce.DosyaAdiDuzenle(model.content1file.FileName)));

            }


            return Json(Turkce.DosyaAdiDuzenle(model.content1file.FileName), JsonRequestBehavior.AllowGet);

        }
        public JsonResult c2ImageUpload(check model)
        {

            var file = model.content2file;

            if (file != null)
            {

                var fileName = Path.GetFileName(Turkce.DosyaAdiDuzenle(model.content2file.FileName));
                var extention = Path.GetExtension(Turkce.DosyaAdiDuzenle(model.content2file.FileName));
                var filenamewithoutextension = Path.GetFileNameWithoutExtension(Turkce.DosyaAdiDuzenle(model.content2file.FileName));


                file.SaveAs(Server.MapPath("~/Content/Admin/data/check/cimg/" + Turkce.DosyaAdiDuzenle(model.content2file.FileName)));


            }
            return Json(Turkce.DosyaAdiDuzenle(model.content2file.FileName), JsonRequestBehavior.AllowGet);

        }
        public JsonResult c3ImageUpload(check model)
        {

            var file = model.content3file;

            if (file != null)
            {

                var fileName = Path.GetFileName(Turkce.DosyaAdiDuzenle(model.content3file.FileName));
                var extention = Path.GetExtension(Turkce.DosyaAdiDuzenle(model.content3file.FileName));
                var filenamewithoutextension = Path.GetFileNameWithoutExtension(Turkce.DosyaAdiDuzenle(model.content3file.FileName));

                file.SaveAs(Server.MapPath("~/Content/Admin/data/check/cimg/" + Turkce.DosyaAdiDuzenle(model.content3file.FileName)));

            }


            return Json(Turkce.DosyaAdiDuzenle(model.content3file.FileName), JsonRequestBehavior.AllowGet);

        }
        public JsonResult c4ImageUpload(check model)
        {

            var file = model.content4file;

            if (file != null)
            {

                var fileName = Path.GetFileName(Turkce.DosyaAdiDuzenle(model.content4file.FileName));
                var extention = Path.GetExtension(Turkce.DosyaAdiDuzenle(model.content4file.FileName));
                var filenamewithoutextension = Path.GetFileNameWithoutExtension(Turkce.DosyaAdiDuzenle(model.content4file.FileName));

                file.SaveAs(Server.MapPath("~/Content/Admin/data/check/cimg/" + Turkce.DosyaAdiDuzenle(model.content4file.FileName)));

            }


            return Json(Turkce.DosyaAdiDuzenle(model.content4file.FileName), JsonRequestBehavior.AllowGet);

        }

    }
}