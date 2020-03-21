function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
            vars[key] = value;
        });
    return vars;
}

var id = getUrlVars()["id"];
var refBinData = firebase.database().ref("bin/" + id);

refBinData.on('value', function(snapshot) {
    $("#name").html(snapshot.child("bin_name").val());
    $("#address").html(snapshot.child("address").val());
    $("#last_accessed").html(snapshot.child("last_accessed").val());
    $("#qrCode").html(snapshot.child("qrcode").val());

    //membaca status
    stat = snapshot.child("bin_status").val();
    if (stat == 0) {
        $("#inactiveButton").click();
    } else if (stat == 1) {
        $("#activeButton").click();
    }
});

$("#activeButton").click(function() {
    //push firebase
    refBinData.update({
        "bin_status": 1
    }).then((snapshot) => {
        $("#inactiveButton").css("background-color", "#9b9191");
        $("#activeButton").css("background-color", "#84f14e");
    });
});

$("#inactiveButton").click(function() {
    //push firebase
    refBinData.update({
        "bin_status": 0
    }).then((snapshot) => {
        $("#activeButton").css("background-color", "#9b9191");
        $("#inactiveButton").css("background-color", "#f14e4e");
    });
});

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        x = xhr.responseXML.getElementsByTagName("staddress");
        staddress = ""
        for (i = 0; i < x.length; i++) {
            staddress += x[i].childNodes[0].nodeValue;
        }


        x = xhr.responseXML.getElementsByTagName("addr-street");
        addrstreet = ""
        for (i = 0; i < x.length; i++) {
            addrstreet += x[i].childNodes[0].nodeValue;
        }


        x = xhr.responseXML.getElementsByTagName("region");
        city = ""
        for (i = 0; i < x.length; i++) {
            city += x[i].childNodes[0].nodeValue;
        }
        loc = String(staddress) + ", " + String(addrstreet) + ", " + String(city);
    }
    QRCode.toCanvas(document.getElementById('qrCode'), String(snapshot.key), function(error) {

    })
}

xhr.open('GET', "https://geocode.xyz/" + $("#binLatitude").val() + "," + $("#binLongitude").val() + "?geoit=xml", true);
xhr.send('');