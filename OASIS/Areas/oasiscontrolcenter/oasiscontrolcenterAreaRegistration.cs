using System.Web.Mvc;

namespace OASIS.Areas.oasiscontrolcenter
{
    public class oasiscontrolcenterAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "oasiscontrolcenter";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "oasiscontrolcenter_default",
                "oasiscontrolcenter/{controller}/{action}/{id}",
                new { Controller="Login", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}