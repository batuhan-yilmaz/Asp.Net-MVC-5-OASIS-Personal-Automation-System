using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OASIS.Models.Entity;
using OASIS.Areas.oasiscontrolcenter.Controllers;

namespace OASIS.Controllers
{
    [AllowAnonymous]
    public class DefaultController : Controller
    {
        // GET: Default
        oasisEntities db = new oasisEntities();
        public ActionResult Index()
        {
            return View();
        }

        //-----------------------------------------------------MESSAGE BOX------------------------------------------//


        [HttpGet]
        public ActionResult MessageBoxEkle()

        {
            return View();
        }

        [HttpPost]
        public ActionResult MessageBoxEkle(messagebox m1)

        {
            if (!ModelState.IsValid)
            {
                return View("index", m1);
            }
            m1.namesurname = Turkce.sesliharfDuzenle(m1.namesurname);
            m1.subject = Turkce.sesliharfDuzenle(m1.subject);
            m1.message = Turkce.sesliharfDuzenle(m1.message);
            db.messagebox.Add(m1);
            db.SaveChanges();
            TempData["messageGuncelle"] = " ";
            return RedirectToAction("index");
        }

        //----------------------------------------------------- COMMENT - REPORT------------------------------------------//

        [HttpGet]
        public ActionResult report()
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
        public ActionResult report(comment y3, invoice i3)
        {
            if (!ModelState.IsValid)
            {
                return View("index");
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
                return RedirectToAction("index");
            }
            else
            {
                TempData["yorumHata"] = " ";
                return RedirectToAction("report");
            }
        }

    }
}

    