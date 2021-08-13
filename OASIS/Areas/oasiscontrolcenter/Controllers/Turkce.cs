using System;
using System.IO;
using System.Text.RegularExpressions;

namespace OASIS.Areas.oasiscontrolcenter.Controllers
{
    public class Turkce
    {
        public static string DosyaAdiDuzenle(string dosyaAdi)
        {
            string uzantisizDosyaAdi = Path.GetFileNameWithoutExtension(dosyaAdi);
            string uzanti = Path.GetExtension(dosyaAdi);
            return AdresDuzenle(uzantisizDosyaAdi) + uzanti;
        }


        public static string AdresDuzenle(object a)
        {
            string s = a.ToString();

            //s = oncul + id + "-" + s;
            if (string.IsNullOrEmpty(s)) //string yok ve ya boş ise true döndürür
            {
                return "";

            }

            if (s.Length > 80)
            {
                s = s.Substring(0, 80); //string den belli karakter alır.
            }
            s = s.Replace("ş", "s"); //karakter değişimi için kullanılır
            s = s.Replace("Ş", "S");
            s = s.Replace("ğ", "g");
            s = s.Replace("Ğ", "G");
            s = s.Replace("İ", "I");
            s = s.Replace("ı", "i");
            s = s.Replace("ç", "c");
            s = s.Replace("Ç", "C");
            s = s.Replace("ö", "o");
            s = s.Replace("Ö", "O");
            s = s.Replace("ü", "u");
            s = s.Replace("Ü", "U");
            s = s.Replace("'", "");
            s = s.Replace("\"", "");
            Regex r = new Regex("[^a-zA-Z0-9_-]");
            //if (r.IsMatch(s))
            s = r.Replace(s, "-");
            if (!string.IsNullOrEmpty(s))
                while (s.IndexOf("--") > -1)
                    s = s.Replace("--", "-");
            if (s.StartsWith("-")) s = s.Substring(1);
            if (s.EndsWith("-")) s = s.Substring(0, s.Length - 1);
            return s;
        }

        public static string sesliharfDuzenle(object a)
        {
            string s = a.ToString();

            //s = oncul + id + "-" + s;
            if (string.IsNullOrEmpty(s)) //string yok ve ya boş ise true döndürür
            {
                return "";

            }
            s = s.Replace("ş", "s"); //karakter değişimi için kullanılır
            s = s.Replace("Ş", "S");
            s = s.Replace("ğ", "g");
            s = s.Replace("Ğ", "G");
            s = s.Replace("İ", "I");
            s = s.Replace("ı", "i");
            s = s.Replace("ç", "c");
            s = s.Replace("Ç", "C");
            s = s.Replace("ö", "o");
            s = s.Replace("Ö", "O");
            s = s.Replace("ü", "u");
            s = s.Replace("Ü", "U");
            return s;
        }

        public static string NoDuzenle(object a)
        {
            string s = a.ToString();

            //s = oncul + id + "-" + s;
            if (string.IsNullOrEmpty(s)) //string yok ve ya boş ise true döndürür
            {
                return "";

            }
            s = s.Replace("_", "");
            s = s.Replace("-", "");
            s = s.Replace("(", "");
            s = s.Replace(")", "");
            s = s.Replace(" ", "");
            return s;
        }
    }
}