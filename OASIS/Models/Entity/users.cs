//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace OASIS.Models.Entity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Web;

    public partial class users
    {
        [Required(ErrorMessage = "Otomatik Kullan�c� Se�imi Tespit Edildi.G�venlik nedeniyle L�tfen Kullan�c� Ad�n�z� Yazarak Giri� Yap�n�z!")]
        public int userid { get; set; }
        public virtual HttpPostedFileBase profilephotoFile { get; set; }
        public string profilephoto { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        [Required(ErrorMessage = "L�tfen Kullan�c� Ad�n�z� Giriniz!")]
        public string usrname { get; set; }
        [Required(ErrorMessage = "L�tfen Parolan�z� Ad�n�z� Giriniz!")]
        public string password { get; set; }
        public string email { get; set; }
        public string tc { get; set; }
        public string tel { get; set; }
        public string role { get; set; }
        public string gender { get; set; }
		public string active { get; set; }
        public string securitykey { get; set; }
        public string fgTo { get; set; }
        public string fgSubject { get; set; }
        public string fgBody { get; set; }
        public string fgEmail { get; set; }
        public string fgPassword { get; set; }
		
    }
}