// AJAX - JQ DB HESAPLAMA İŞLEMLERİ İÇİN BORDRO DEĞİŞKENLERİNİN ÇEKİLDİĞİ DB BAĞLANTISI

function bordroveriler() {
    var url = '/Home/bordroveriler';
    $.getJSON(url, function (data) {
        for (var item in data.Result) {
            var deger = '<tr><input type="hidden" class="form-control" placeholder="Günlük Çalışma Ücreti." id="gunlukkazanc" value=" ' + data.Result[item].gunlukkazanc + ' "><input type="hidden" class="form-control" id="pyuzde" value=" ' + data.Result[item].pirimyuzdesi + ' "><input type="hidden" class="form-control" id="mesaiucreti" value=" ' + data.Result[item].mesaiucreti + ' "><input type="hidden" class="form-control" id="yoneticifark" value=" ' + data.Result[item].yoneticifark + ' "><input type="hidden" class="form-control" id="yoneticipirimyuzdesi" value=" ' + data.Result[item].yoneticipirimyuzdesi + ' "><input type="hidden" class="form-control" id="yoneticimesaiucreti" value=" ' + data.Result[item].yoneticimesaiucreti + ' "> <input type="hidden" class="form-control" id="iszsigiscipayi" value=" ' + data.Result[item].iszsigiscipayi + ' "><input type="hidden" class="form-control" id="sgkiscipayi" value=" ' + data.Result[item].sgkiscipayi + ' "><input type="hidden" class="form-control" id="gelirvergisi" value=" ' + data.Result[item].gelirvergisi + ' "><input type="hidden" class="form-control" id="damgavergi" value=" ' + data.Result[item].damgavergi + ' "><input type="hidden" class="form-control" id="kendiagiyuzdesi" value=" ' + data.Result[item].kendiagiyuzdesi + ' "><input type="hidden" class="form-control" id="esagiyuzdesi" value=" ' + data.Result[item].esagiyuzdesi + ' "><input type="hidden" class="form-control" id="birveikicocukagiyuzdesi" value=" ' + data.Result[item].birveikicocukagiyuzdesi + ' "><input type="hidden" class="form-control" id="uccocukyuzdesi" value=" ' + data.Result[item].uccocukyuzdesi + ' "><input type="hidden" class="form-control" id="dortveuzericocukyuzdesi" value=" ' + data.Result[item].dortveuzericocukyuzdesi + ' "><input type="hidden" class="form-control" id="sgksabiti" value=" ' + data.Result[item].sgksabiti + '"><input type="hidden" class="form-control" id="nrkazanc" value=" ' + data.Result[item].nrkazanc + '"><input type="hidden" class="form-control" id="mesaiucreti" value=" ' + data.Result[item].mesaiucreti + '"><input type="hidden" class="form-control" id="pirimlimit" value=" ' + data.Result[item].pirimlimit + '"></tr>';
            $('table').append(deger);
        }
    });
}

$('#phoneNumber').inputmask("+99(999)999-9999");

function Number(id) {
    var element = document.getElementById(id);
    var regex = /[^0-9]/gi;
    element.value = element.value.replace(regex, "");
}

function TcNumber(id) {
    var element = document.getElementById(id);
    var regex = /[^0-9]/gi;
    element.value = element.value.replace(regex, "");
}

function PhoneNumber(id) {
    var element = document.getElementById(id);
    var regex = /[^+0-9]/gi;
    element.value = element.value.replace(regex, "");
}

function usrname(id) {
    var element = document.getElementById(id);
    var regex = /[^a-zA-Z0-9_-]/gi;
    element.value = element.value.replace(regex, "");
}

function text(id) {
    var element = document.getElementById(id);
    var regex = /[^ÜüİiĞğÖöÇçŞşa-zA-Z ]/gi;
    element.value = element.value.replace(regex, "");
}

function customtext(id) {
    var element = document.getElementById(id);
    var regex = /[^ÜüİiĞğÖöÇçŞşa-zA-Z0-9_- ]/gi;
    element.value = element.value.replace(regex, "");
}

// PİRİM HESAPLAYICI
var presultyonetici = 0;
var presultpersonel = 0;
$('#pyuzde,#avarage').keyup(function pirimcalc() {
    pirimlimit = parseFloat($('#pirimlimit').val());
    performans = parseFloat($('#avarage').val());


    personelyuzde = parseFloat($('#pyuzde').val());
    sabitbolum = 100;
    yoneticipirimyuzdesi = parseFloat($("#yoneticipirimyuzdesi").val());
    presultpersonel = performans / sabitbolum * personelyuzde;
    if (performans < pirimlimit) {
        presultpersonel = 0;
    }
    presultyonetici = performans / sabitbolum * yoneticipirimyuzdesi;
    if (performans < pirimlimit) {
        presultyonetici = 0;
    }
    $('#resultpersonel').val(presultpersonel.toFixed(2));
    $('#resultyonetici').val(presultyonetici.toFixed(2));
});

// MESAİ HESAPLAYICI
var mresultpersonel = 0;
var mresultyonetici = 0;
$('#mesaiucreti,#mesaigunsayisi').keyup(function mesai() {
    mesaigunsayisi = parseFloat($('#mesaigunsayisi').val());
    mesaiucreti = parseFloat($("#mesaiucreti").val());
    yoneticimesaiucreti = parseFloat($("#yoneticimesaiucreti").val());
    mresultpersonel = mesaigunsayisi * mesaiucreti;
    mresultyonetici = mesaigunsayisi * yoneticimesaiucreti;
    $('#pmesairesult').val(mresultpersonel.toFixed(2));
    $('#ymesairesult').val(mresultyonetici.toFixed(2));
});

// TAKVİM ÇALIŞMA GÜNLERİ VE MAAŞ BORDRO HESAPLAYICI

var holidays = [];
var weekdays = [];
$(function oasisdatepicker() {

    $("#tarih1").datepicker({
        dateFormat: "yy-mm-dd",
        changeYear: true,
        showButtonPanel: true,
        showWeek: true,
        changeMonth: true,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2030, 0, 1),
        closeText: "Kapat", // Display text for close link
        prevText: "Geri", // Display text for previous month link
        nextText: "İleri", // Display text for next month link
        currentText: "Bugün", // Display text for current month link
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
            "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], // Names of months for drop-down and formatting
        monthNamesShort: ["Ock", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Agu", "Eyl", "Ekm", "Kas", "Ara"], // For formatting
        dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"], // For formatting
        dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"], // For formatting
        dayNamesMin: ["Pz", "Pt", "Sa", "Çr", "Pr", "Cm", "Ct"], // Column headings for days starting at Sunday
        weekHeader: "Hf", // Column header for week of the year
        firstDay: 1,
        showOn: "both",
        buttonText: "<i class='fa fa-calendar'></i>"
    });

    $("#tarih2").datepicker({
        dateFormat: "yy-mm-dd",
        changeYear: true,
        showButtonPanel: true,
        showWeek: true,
        changeMonth: true,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2030, 0, 1),
        closeText: "Kapat", // Display text for close link
        prevText: "Geri", // Display text for previous month link
        nextText: "İleri", // Display text for next month link
        currentText: "Bugün", // Display text for current month link
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
            "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], // Names of months for drop-down and formatting
        monthNamesShort: ["Ock", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Agu", "Eyl", "Ekm", "Kas", "Ara"], // For formatting
        dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"], // For formatting
        dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"], // For formatting
        dayNamesMin: ["Pz", "Pt", "Sa", "Çr", "Pr", "Cm", "Ct"], // Column headings for days starting at Sunday
        weekHeader: "Hf", // Column header for week of the year
        firstDay: 1,
        showOn: "both",
        buttonText: "<i class='fa fa-calendar'></i>",
        onSelect: function (dateText, inst) {
            var date = $(this).val();
            var time = $('#time').val();
            $('#calcbutton2').click()
        }

    });

});

$("#selectdays input:checkbox").change(function () {

    if ($(this).is(":checked")) {
        var control1 = $(this).val();
        if (control1 == 1) {
            weekdays.push("1");
        }
        if (control1 == 2) {
            weekdays.push("2");
        }
        if (control1 == 3) {
            weekdays.push("3");
        }
        if (control1 == 4) {
            weekdays.push("4");
        }
        if (control1 == 5) {
            weekdays.push("5");
        }
        if (control1 == 6) {
            weekdays.push("6");
        }
        if (control1 == 0) {
            weekdays.push("0");
        }
    }
    else {
        var control1 = $(this).val();
        if (control1 == 1) {
            weekdays.pop("1");
        }
        if (control1 == 2) {
            weekdays.pop("2");
        }
        if (control1 == 3) {
            weekdays.pop("3");
        }
        if (control1 == 4) {
            weekdays.pop("4");
        }
        if (control1 == 5) {
            weekdays.pop("5");
        }
        if (control1 == 6) {
            weekdays.pop("6");
        }
        if (control1 == 0) {
            weekdays.pop("0");
        }
    }
});
$("#ozeltarihler input:checkbox").change(function () {

    if ($(this).is(":checked")) {
        var control = $(this).val();
        if (control == 1) {
            holidays.push("2020-01-01");
        }
        if (control == 2) {
            holidays.push("2020-04-23");
        }
        if (control == 3) {
            holidays.push("2020-05-01");
        }
        if (control == 4) {
            holidays.push("2020-05-19");
        }
        if (control == 5) {
            holidays.push("2020-05-23");
        }
        if (control == 6) {
            holidays.push("2020-05-24");
            holidays.push("2020-05-25");
            holidays.push("2020-05-26");
        }
        if (control == 7) {
            holidays.push("2020-07-15");
        }
        if (control == 8) {
            holidays.push("2020-07-30");
        }
        if (control == 9) {
            holidays.push("2020-07-31");
            holidays.push("2020-08-1");
            holidays.push("2020-08-2");
            holidays.push("2020-08-3");
        }
        if (control == 10) {
            holidays.push("2020-08-30");
        }
        if (control == 11) {
            holidays.push("2020-10-28");
        }
        if (control == 12) {
            holidays.push("2020-10-29");
        }
    }
    else {
        var control = $(this).val();
        if (control == 1) {
            holidays.pop("2020-01-01");
        }
        if (control == 2) {
            holidays.pop("2020-04-23");
        }
        if (control == 3) {
            holidays.pop("2020-05-01");
        }
        if (control == 4) {
            holidays.pop("2020-05-19");
        }
        if (control == 5) {
            holidays.pop("2020-05-23");
        }
        if (control == 6) {
            holidays.pop("2020-05-24");
            holidays.pop("2020-05-25");
            holidays.pop("2020-05-26");
        }
        if (control == 7) {
            holidays.pop("2020-07-15");
        }
        if (control == 8) {
            holidays.pop("2020-07-30");
        }
        if (control == 9) {
            holidays.pop("2020-07-31");
            holidays.pop("2020-08-1");
            holidays.pop("2020-08-2");
            holidays.pop("2020-08-3");
        }
        if (control == 10) {
            holidays.pop("2020-08-30");
        }
        if (control == 11) {
            holidays.pop("2020-10-28");
        }
        if (control == 12) {
            holidays.pop("2020-10-29");
        }
    }
});



var esdurum = 0;
var cocuksayi = 0;
function calfdiff() {

    gunlukkazanc = parseFloat($("#gunlukkazanc").val());
    yoneticifark = parseFloat($("#yoneticifark").val());


    iszsigiscipayi = parseFloat($("#iszsigiscipayi").val());
    sgkiscipayi = parseFloat($("#sgkiscipayi").val());
    gelirvergisi = parseFloat($("#gelirvergisi").val());
    damgavergi = parseFloat($("#damgavergi").val());

    nrkazanc = parseFloat($("#nrkazanc").val());
    sgksabiti = parseFloat($("#sgksabiti").val());

    kendiagiyuzdesi = parseFloat($("#kendiagiyuzdesi").val());
    esagiyuzdesi = parseFloat($("#esagiyuzdesi").val());

    birincicocuk = parseFloat($("#birveikicocukagiyuzdesi").val());
    ikincicocuk = parseFloat($("#birveikicocukagiyuzdesi").val());
    ucuncucocuk = parseFloat($("#uccocukyuzdesi").val());
    dortduncucocuk = parseFloat($("#dortveuzericocukyuzdesi").val());
    besincicocuk = parseFloat($("#dortveuzericocukyuzdesi").val());

    var tarih1 = $('#tarih1').val();
    var tarih2 = $('#tarih2').val();
    var startDate = parseDate(tarih1);
    var endDate = parseDate(tarih2);
    if (endDate < startDate) {
        alert("Çalışma günü bitişi, çalışma günü başlangıcından küçük olamaz!")
        return null;
    }
    var holdays = 0;
    for (i = 0; i < holidays.length; i++) {
        var cand = parseDate(holidays[i]);
        var candDay = cand.getDay();
        if (candDay < endDate && candDay > startDate) {
            for (j = 0; j < weekdays.length; j++) {
                if (weekdays[j] == candDay) {
                    break;
                }
                else {
                    holdays++;
                    break;
                }

            }
        }
        if (weekdays.length == 0) {
            holdays++;
        }

    }
    var millisecondsPerDay = 86400 * 1000;
    startDate.setHours(0, 0, 0, 1);
    endDate.setHours(23, 59, 59, 999);
    var diff = endDate - startDate;
    var timediff = Math.ceil(diff / millisecondsPerDay);

    var startDay = startDate.getDay();
    while (startDate < endDate) {
        for (k = 0; k < weekdays.length; k++) {
            if (startDay == weekdays[k]) {
                timediff--;
            }
        }
        startDate.setDate(startDate.getDate() + 1);
        startDay = startDate.getDay();
    }
    timediff = timediff - holdays;




    //----------------------------- UCRET HESAP ------------------------------------------------------
    var daydiff = timediff
    var toplamkesinti = iszsigiscipayi + sgkiscipayi + gelirvergisi + damgavergi;
    var agitotal = (nrkazanc * sgksabiti * kendiagiyuzdesi) + esagi() + cocukagi();
    if (agitotal > gelirvergisi) {
        agitotal = gelirvergisi;
    }

    var personelmaas = gunlukkazanc * daydiff - toplamkesinti + agitotal + presultpersonel + mresultpersonel;

    var yoneticimaas = gunlukkazanc * daydiff - toplamkesinti + agitotal + yoneticifark + presultyonetici + mresultyonetici;

    var daydiff = $('#calismagunusayisi').val(daydiff);
    var personelmaas = $('#pmaas').val(personelmaas.toFixed(2));
    var yoneticimaas = $('#ymaas').val(yoneticimaas.toFixed(2));


}
function parseDate(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
}


//------------------------------------------------------ ASGARI GEÇİM İNDİRİMİ HESAPLAMA  ( AGI ) --------------------------------------------------------------

function esagi(value) {

    if (value == 0) {
        esdurum = 0;
    }

    else if (value == 1) {
        esdurum = 1;
    }
    else if (value == 2) {
        esdurum = (nrkazanc * sgksabiti * esagiyuzdesi);
    }
    else
        return esdurum;
}

function cocukagi(value) {

    if (value == 0) {
        cocuksayi = 0;
    }
    else if (value == 1) {
        cocuksayi = (nrkazanc * sgksabiti * birincicocuk);

    }
    else if (value == 2) {
        cocuksayi = (nrkazanc * sgksabiti * birincicocuk) + (nrkazanc * sgksabiti * ikincicocuk);

    }
    else if (value == 3) {
        cocuksayi = (nrkazanc * sgksabiti * birincicocuk) + (nrkazanc * sgksabiti * ikincicocuk) + (nrkazanc * sgksabiti * ucuncucocuk);
    }
    else if (value == 4) {
        cocuksayi = (nrkazanc * sgksabiti * birincicocuk) + (nrkazanc * sgksabiti * ikincicocuk) + (nrkazanc * sgksabiti * ucuncucocuk) + (nrkazanc * sgksabiti * dortduncucocuk);
    }
    else if (value == 5) {
        cocuksayi = (nrkazanc * sgksabiti * birincicocuk) + (nrkazanc * sgksabiti * ikincicocuk) + (nrkazanc * sgksabiti * ucuncucocuk) + (nrkazanc * sgksabiti * dortduncucocuk) + (nrkazanc * sgksabiti * besincicocuk);
    }
    else
        return cocuksayi;
}


$(function dropdowncont() {

    $("#roledb").change(function () {
        var displaycourse = $("#roledb option:selected").text();
        $("#roledbs").val(displaycourse);
    })
    $("#genderdb").change(function () {
        var displaycourse = $("#genderdb option:selected").text();
        $("#genderdbs").val(displaycourse);
    })
    $("#IsFullDaydb").change(function () {
        var displaycourse = $("#IsFullDaydb option:selected").text();
        $("#IsFullDaydbs").val(displaycourse);
    })
    $("#colordb").change(function () {
        var displaycourse = $("#colordb option:selected").val();
        $("#colordbs").val(displaycourse);
    })
    $("#cocuksayisidb").change(function () {
        var displaycourse = $("#cocuksayisidb option:selected").text();
        $("#cocuksayisidbs").val(displaycourse);
    })
    $("#medenidurumdb").change(function () {
        var displaycourse = $("#medenidurumdb option:selected").text();
        $("#medenidurumdbs").val(displaycourse);
    })
})

// ETKİNLİK/ETKİNLİKEKLE TRUE FALSE TEXTBOX AÇMA KAPAMA FONKSİYONU 
function EnableDisableTextBox(IsFullDaydb) {
    var selectedValue = IsFullDaydb.options[IsFullDaydb.selectedIndex].value;
    var tarih2 = document.getElementById("tarih2");
    tarih2.disabled = selectedValue == 0 ? false : true;
    if (!tarih2.disabled) {
        tarih2.focus();
    }
}
// RANDOM 21 KARAKTER SECURİTYKEY OLUŞTURMA FONKSİYONU
function generatePassword() {
    var length = 21,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*/#{[]}\|-,.<>|:.!",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}


// ANASAYFADA GÜNCELLEYE BASINCA YENİ SECURİTY KEY OLUŞTURMA FONKSİYONU
function scode() {
    document.getElementById("hsecuritykey").value = generatePassword();
}

// RANDOM İNVOİCE REFERANS NUMARASI OLUŞTURUCU FONKSİYONU
function referancenumber() {
    var length = 8,
        charset = "0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

//FATURA ATA TOPLAMDAN KDV VE TOTAL HESAPLAMA //

$('#aratoplam').keyup(function invoicehesap() {
    aratoplam = parseFloat($('#aratoplam').val());

    var kdvresult = aratoplam / 100 * 18;
    var total = aratoplam + kdvresult;

    $('#invoicevergi').val(kdvresult.toFixed(2));
    $('#invoicetotal').val(total.toFixed(2));
});

// PHONE MASK!

$(document).ready(function () {
    $('.input-phone').intlInputPhone();
    $('.phoneNumber').keypress(validateNumber);

})


$('.input-phone').keyup(function () {
    var ulkekod = parseFloat($('#phone').text());
    var inputdeger = parseFloat($('#phoneNumber').val());
    $('#deger').val("+" + ulkekod + inputdeger.toFixed(0));


});
function validateNumber(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else {
        return true;
    }
};


///PERSONEL - yönetici İZİN QR KOD OLUŞTURUCU VE CUSTOM TAKVİM ///

// RANDOM 13 KARAKTER QR İZİN TAKİP KODU OLUŞTURMA FONKSİYONU
$(".generatetext").click(function generatetext(e) {

    var x = randomNumber(13);
    $('#output').html('').qrcode(x);
});

function randomNumber(len) {
    var randomNumber;
    var n = '';

    for (var count = 0; count < len; count++) {
        randomNumber = Math.floor(Math.random() * 10);
        n += randomNumber.toString();
    }
    return n;
}

$(function izintakvimi() {

    $("#itarih1").datepicker({
        dateFormat: "yy-mm-dd",
        changeYear: true,
        showButtonPanel: true,
        showWeek: true,
        changeMonth: true,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2030, 0, 1),
        closeText: "Kapat", // Display text for close link
        prevText: "Geri", // Display text for previous month link
        nextText: "İleri", // Display text for next month link
        currentText: "Bugün", // Display text for current month link
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
            "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], // Names of months for drop-down and formatting
        monthNamesShort: ["Ock", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Agu", "Eyl", "Ekm", "Kas", "Ara"], // For formatting
        dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"], // For formatting
        dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"], // For formatting
        dayNamesMin: ["Pz", "Pt", "Sa", "Çr", "Pr", "Cm", "Ct"], // Column headings for days starting at Sunday
        weekHeader: "Hf", // Column header for week of the year
        firstDay: 1
    });

    $("#itarih2").datepicker({
        dateFormat: "yy-mm-dd",
        changeYear: true,
        showButtonPanel: true,
        showWeek: true,
        changeMonth: true,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2030, 0, 1),
        closeText: "Kapat", // Display text for close link
        prevText: "Geri", // Display text for previous month link
        nextText: "İleri", // Display text for next month link
        currentText: "Bugün", // Display text for current month link
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
            "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], // Names of months for drop-down and formatting
        monthNamesShort: ["Ock", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Agu", "Eyl", "Ekm", "Kas", "Ara"], // For formatting
        dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"], // For formatting
        dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"], // For formatting
        dayNamesMin: ["Pz", "Pt", "Sa", "Çr", "Pr", "Cm", "Ct"], // Column headings for days starting at Sunday
        weekHeader: "Hf", // Column header for week of the year
        firstDay: 1

    });

});