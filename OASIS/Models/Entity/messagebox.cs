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

    public partial class messagebox
    {
        public int messageid { get; set; }
        public string namesurname { get; set; }
        public string youremail { get; set; }
        public string subject { get; set; }
        public string message { get; set; }
        public string referancenumber { get; set; }
        [Display(Name = "Date Edit")]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy.MM.dd}")]
        public System.DateTime? date { get; set; }
        public string color { get; set; }
        public string Body { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
