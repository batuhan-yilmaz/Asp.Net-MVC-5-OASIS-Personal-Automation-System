using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OASIS.Models.Entity;

namespace OASIS.Areas.oasiscontrolcenter.Controllers
{
    public class EtkinlikController : Controller
    {
        // GET: oasiscontrolcenter/Etkinlik
        oasisEntities db = new oasisEntities();
        public ActionResult etkinlikler()
        {
            var degerler = db.events.ToList();
            return View(degerler);
        }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        public ActionResult etkinlikekle()
        {
            return View();
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult etkinlikekle(events e1)
        {
            if (!ModelState.IsValid)
            {
                return View("etkinlikler");
            }
            e1.Subject = Turkce.sesliharfDuzenle(e1.Subject);
            e1.Description = Turkce.sesliharfDuzenle(e1.Description);
            db.events.Add(e1);
            db.SaveChanges();
            TempData["etkinlikGuncelle"] = " ";
            return RedirectToAction("etkinlikler");
        }

        [Authorize(Roles = "Admin")]
        public ActionResult etkinlikguncelle(int EventID)
        {
            var eventguncelle = db.events.Find(EventID);
            return View("etkinlikguncelle", eventguncelle);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult eguncelle(events e)
        {
            if (!ModelState.IsValid)
            {
                return View("eguncelle");
            }
            var veri = db.events.Find(e.EventID);

            veri.Subject = Turkce.sesliharfDuzenle(e.Subject);
            veri.Description = Turkce.sesliharfDuzenle(e.Description);
            veri.Start = e.Start;
            veri.End = e.End;
            veri.ThemeColor = e.ThemeColor;
            veri.IsFullDay = e.IsFullDay;
            db.SaveChanges();
            TempData["etkinlikGuncelle"] = " ";
            return RedirectToAction("etkinlikler");
        }

        [Authorize(Roles = "Admin")]
        public ActionResult etkinliksil(int EventID)
        {
            var sil = db.events.Find(EventID);
            if (sil == null)
            {
                return RedirectToAction("etkinlikler");
            }
            db.events.Remove(sil);
            db.SaveChanges();
            TempData["etkinlikGuncelle"] = " ";
            return RedirectToAction("etkinlikler");
        }


        //--------------------------------------------------------------FULL EVENT CALENDAR-----------------------------------------------------//


        [HttpGet]//httpget diyerek methodumuz ne iş yapacağını belirtiyoruz.
        public JsonResult GetEvents()
        { //Jquery ile planlarımızı takvim üzerine yerleştireceğiz
          //bu nedenle JSonResult değer döndürüyoruz
            using (oasisEntities dc = new oasisEntities())//Eklediğimiz entitymodel'dan bir örnek alıyoruz
            {
                var events = dc.events.ToList(); //bütün tabloyu select ediyoruz.Bu nedenle ayrıca select yazmıyorum.
                                                     //tabloda birden fazla değer olabilir o nedenle firstOrdefault yerine ToList diyorum
                return new JsonResult { Data = events, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
                //Son olarak methodun döndürdüğü verinin Json Datası olduğunu söylüyor ve Data niteliğine events diyorum.
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]//httpost diyerek methodun kayıt işi yapacağını belirtiyoruz.
        public JsonResult SaveEvent(events e) //Sonucu yine Json döndürüyoruz
        {
            var status = false;//Yapılan işlemin başarısını status değişkeninde tutuyorm
            using (oasisEntities dc = new oasisEntities())
            {//Yine bir örnek alıyorum model'ımdan
                if (e.EventID > 0)//eğer kaydetmek istediğim planın id değeri 0 dan büyükse
                {
                    //Güncelleme yap diyorum. Bunun içinde bu planı tablomda bulup v değişkenine atıyorum.
                    var v = dc.events.Where(a => a.EventID == e.EventID).FirstOrDefault();
                    if (v != null)//v değerinin null olup olmadığını kontrol ediyorum
                    {//ve sırasıyla parametre olarak gelen plan değerlerini, veritabanındaki değerlerle değiştiriyorum
                        v.Subject = Turkce.sesliharfDuzenle(e.Subject);
                        v.Description = Turkce.sesliharfDuzenle(e.Description);
                        v.Start = e.Start;
                        v.End = e.End;
                        v.IsFullDay = e.IsFullDay;
                        v.ThemeColor = e.ThemeColor;
                    }
                }
                else
                {//eğer EventID değeri 0 dan büyük değilse bu yeni kayıt olduğu anlamına gelir
                 //ve doğrudan tabloma eklerim
                    dc.events.Add(e);
                }
                dc.SaveChanges();//yapılan değişimin veritabanına yanstılması için
                status = true;//işlem başarıyla tamamlandığı için status değişkeni true ile set edilir.
            }
            return new JsonResult { Data = new { status = status } };//status değişkenini view'e gönderirim

        }

        [Authorize(Roles = "Admin")]
        [HttpPost]//httpost diyerek methodun kayıt işi yapacağını belirtiyoruz.
        public JsonResult DeleteEvent(int EventID) //Sonucu yine Json döndürüyoruz
        {
            //method parametre olarak silinecek olan planın id değerini alıyor
            var status = false;
            using (oasisEntities dc = new oasisEntities())//Yine bir örnek alıyorum model'ımdan
            {
                //id değerini kullanarak silinecek olan planı veritabında arayıp buluyorum.
                var v = dc.events.Where(a => a.EventID == EventID).FirstOrDefault();

                if (v != null)//bulunan değer null değilse
                {
                    dc.events.Remove(v);//veritabanından kaldırıyorum
                    dc.SaveChanges();//yapılan değişimin veritabanına yanstılması için
                    status = true;//işlem başarıyla tamamlandığı için status değişkeni true ile set edilir.
                }

            }
            return new JsonResult { Data = new { status = status } };//status değişkenini view'e gönderirim
        }

    }
}