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
    
    public partial class check
    {
        public int checkid { get; set; }
        public int companyget { get; set; }
        public int regionget { get; set; }
        public int unitget { get; set; }
        public int departmanget { get; set; }
        public int authorizedget { get; set; }
        [Display(Name = "Date Edit")]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy.MM.dd}")]
        public System.DateTime? checkdate { get; set; }
        public int check1 { get; set; }
        public int check2 { get; set; }
        public int check3 { get; set; }
        public int check4 { get; set; }
        public int check5 { get; set; }
        public int check6 { get; set; }
        public int check7 { get; set; }
        public int check8 { get; set; }
        public int check9 { get; set; }
        public int check10 { get; set; }
        public int check11 { get; set; }
        public int check12 { get; set; }
        public int check13 { get; set; }
        public int check14 { get; set; }
        public int check15 { get; set; }
        public virtual HttpPostedFileBase content1file { get; set; }
        public string content1 { get; set; }
        public virtual HttpPostedFileBase content2file { get; set; }
        public string content2 { get; set; }
        public virtual HttpPostedFileBase content3file { get; set; }
        public string content3 { get; set; }
        public virtual HttpPostedFileBase content4file { get; set; }
        public string content4 { get; set; }
        public string suggestion { get; set; }
        public string location { get; set; }
    
        public virtual authorized authorized { get; set; }
        public virtual company company { get; set; }
        public virtual departman departman { get; set; }
        public virtual region region { get; set; }
        public virtual unit unit { get; set; }
    }
}
