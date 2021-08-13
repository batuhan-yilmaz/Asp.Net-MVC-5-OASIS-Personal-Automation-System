using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OASIS.Models.Entity;


namespace OASIS.Areas.oasiscontrolcenter.Controllers
{
    [Authorize(Roles = "Admin")]
    public class staticsController : Controller
    {
        // GET: oasiscontrolcenter/statics
        oasisEntities db = new oasisEntities();
        public ActionResult istatistikler()
        {
            var deger = db.check.ToList();
            return View(deger);
        }


        public JsonResult istatistik()
        {
            var istatistik = db.check.ToList();
            return Json(
                new
                {
                    Result = from obj in istatistik
                             select new
                             {
                                 obj.authorizedget,
                                 obj.companyget,
                                 obj.regionget,
                                 obj.unitget,
                                 obj.departmanget,
                                 obj.checkid,
                                 obj.checkdate,
                                 obj.check1,
                                 obj.check2,
                                 obj.check3,
                                 obj.check4,
                                 obj.check5,
                                 obj.check6,
                                 obj.check7,
                                 obj.check8,
                                 obj.check9,
                                 obj.check10,
                                 obj.check11,
                                 obj.check12,
                                 obj.check13,
                                 obj.check14,
                                 obj.check15
                             }
                }, JsonRequestBehavior.AllowGet
            );

        }

        public ActionResult personelistatistikleri()
        {
            var deger = db.personel.ToList();
            return View(deger);
        }
        public JsonResult personelistatistik()
        {
            var pistatistik = db.personel.ToList();
            return Json(
                new
                {
                    Result = from obj in pistatistik
                             select new
                             {
                                 obj.companyget,
                                 obj.regionget,
                                 obj.unitget,
                                 obj.departmanget,
                                 obj.authorizedget,
                                 obj.personel1,
                                 obj.tc,
                                 obj.tel,
                                 obj.email,
                                 obj.adres,
                                 obj.civilstatusget,
                                 obj.children,
                                 obj.workingstart,
                                 obj.workingstop,
                                 obj.performance,
                                 obj.pirim,
                                 obj.pay,
                                 obj.mesai,
                                 obj.mesaidays,
                                 obj.gender
                             }
                }, JsonRequestBehavior.AllowGet
            );

        }

        public ActionResult yonetimistatistikleri()
        {
            var deger = db.authorized.ToList();
            return View(deger);
        }
        [HttpGet]
        public JsonResult yonetimistatistik()
        {
            var yistatistik = db.authorized.ToList();
            return Json(
                new
                {
                    Result = from obj in yistatistik
                             select new
                             {
                                 obj.companyget,
                                 obj.regionget,
                                 obj.unitget,
                                 obj.departmanget,
                                 obj.authorized1,
                                 obj.tc,
                                 obj.tel,
                                 obj.email,
                                 obj.adres,
                                 obj.civilstatusget,
                                 obj.children,
                                 obj.workingstart,
                                 obj.workingstop,
                                 obj.performance,
                                 obj.pirim,
                                 obj.pay,
                                 obj.mesai,
                                 obj.mesaidays,
                                 obj.gender
                             }
                }, JsonRequestBehavior.AllowGet
            );

        }

    }
}