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

    public partial class home
    {
        public int homeid { get; set; }
        public string subject { get; set; }
        public string descriptions { get; set; }
        public int companyget { get; set; }
        public int regionget { get; set; }
        public int unitget { get; set; }
        public int departmanget { get; set; }
        [Display(Name = "Date Edit")]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy.MM.dd}")]
        public System.DateTime? eventsstart { get; set; }
        [Display(Name = "Date Edit")]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy.MM.dd}")]
        public System.DateTime? eventsend { get; set; }
        public int processget { get; set; }
        public string color { get; set; }
        public virtual HttpPostedFileBase content1file { get; set; }
        public string content1 { get; set; }
        public virtual HttpPostedFileBase content2file { get; set; }
        public string content2 { get; set; }
        public virtual HttpPostedFileBase content3file { get; set; }
        public string content3 { get; set; }
        public virtual HttpPostedFileBase content4file { get; set; }
        public string content4 { get; set; }

        public virtual company company { get; set; }
        public virtual departman departman { get; set; }
        public virtual process process { get; set; }
        public virtual region region { get; set; }
        public virtual unit unit { get; set; }
    }
}
