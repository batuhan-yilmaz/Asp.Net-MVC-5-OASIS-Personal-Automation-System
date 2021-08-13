using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OASIS.Controllers
{
    [AllowAnonymous]
    public class errorController : Controller
    {
        // GET: Error
        public ActionResult notfound()
        {
            return View();
        }
    }
}