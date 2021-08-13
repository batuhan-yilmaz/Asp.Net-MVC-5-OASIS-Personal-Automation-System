using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OASIS.Models.Entity;

namespace OASIS.Areas.oasiscontrolcenter.Controllers
{
    public class DuyuruController : Controller
    {
        // GET: oasiscontrolcenter/Duyuru
        oasisEntities db = new oasisEntities();
        public ActionResult duyurular()
        {
            var degerler = db.notice.ToList();
            return View(degerler);
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        public ActionResult duyuruekle()
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

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult duyuruekle(notice n1)
        {
            if (!ModelState.IsValid)
            {
                return View("duyuruekle");
            }
            var companyget = db.company.Where(m => m.companyid == n1.company.companyid).FirstOrDefault();
            var regionget = db.region.Where(m => m.regionid == n1.region.regionid).FirstOrDefault();
            var unitget = db.unit.Where(m => m.unitid == n1.unit.unitid).FirstOrDefault();
            var departmanget = db.departman.Where(m => m.departmanid == n1.departman.departmanid).FirstOrDefault();
            var processget = db.process.Where(m => m.processid == n1.process.processid).FirstOrDefault();
            n1.company = companyget;
            n1.region = regionget;
            n1.unit = unitget;
            n1.departman = departmanget;
            n1.process = processget;
            n1.notice1 = Turkce.sesliharfDuzenle(n1.notice1);
            db.notice.Add(n1);
            db.SaveChanges();
            TempData["duyuruGuncelle"] = " ";
            return RedirectToAction("duyurular");
        }

        [Authorize(Roles = "Admin")]
        public ActionResult duyuruguncelle(int noticeid)
        {
            var noticeguncelle = db.notice.Find(noticeid);
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
            return View("duyuruguncelle", noticeguncelle);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult dguncelle(notice n)
        {
            if (!ModelState.IsValid)
            {
                return View("dguncelle");
            }
            var veri = db.notice.Find(n.noticeid);

            var companyget = db.company.Where(m => m.companyid == n.company.companyid).FirstOrDefault();
            var regionget = db.region.Where(m => m.regionid == n.region.regionid).FirstOrDefault();
            var unitget = db.unit.Where(m => m.unitid == n.unit.unitid).FirstOrDefault();
            var departmanget = db.departman.Where(m => m.departmanid == n.departman.departmanid).FirstOrDefault();
            var processget = db.process.Where(m => m.processid == n.process.processid).FirstOrDefault();
            veri.notice1 = Turkce.sesliharfDuzenle(n.notice1);
            veri.noticestart = n.noticestart;
            veri.noticeend = n.noticeend;
            veri.color = n.color;
            veri.companyget = companyget.companyid;
            veri.regionget = regionget.regionid;
            veri.unitget = unitget.unitid;
            veri.departmanget = departmanget.departmanid;
            veri.processget = processget.processid;
            db.SaveChanges();
            TempData["duyuruGuncelle"] = " ";
            return RedirectToAction("duyurular");
        }

        [Authorize(Roles = "Admin")]
        public ActionResult duyurusil(int noticeid)
        {
            var sil = db.notice.Find(noticeid);
            if (sil == null)
            {
                return RedirectToAction("duyurular");
            }
            db.notice.Remove(sil);
            db.SaveChanges();
            TempData["duyuruGuncelle"] = " ";
            return RedirectToAction("duyurular");
        }

    }
}