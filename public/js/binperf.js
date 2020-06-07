//firebase read
var refBin = firebase.database().ref("bin");
refBin.on('child_added', function(snapshot) {

    dataBin = `<tr class="table-row">
    <td><a href="bin_profile?id=` + snapshot.key + `">Plastico Bin ` + snapshot.child("bin_name").val() + `</a></td>
    <td>` + snapshot.child("address").val() + `</td>
    <td>` + snapshot.child("bin_status").val() + `</td>
</tr>`
        //showing bin option list
    $("#dataBin").append(dataBin).hide().show('fast');

    // $("#SelectBin").append(`<option value="` + snapshot.key + `"> Plastico ` + snapshot.child("bin_name").val() + ` </option>`);
});


$("#SelectBin").change(function() {
    var valopt = this.value;
    if (valopt != "none") {
        $("#tab_performance").fadeIn(250);
        //read firebase data
        var refBinData = firebase.database().ref("bin/" + valopt);
        refBinData.on('value', function(snapshot) {
            $("#address").html(snapshot.child("address").val());
            $("#last_accessed").html(snapshot.child("last_accessed").val());

            //membaca status
            stat = snapshot.child("bin_status").val();
            if (stat == 0) {
                $("#inactiveButton").click();
            } else if (stat == 1) {
                $("#activeButton").click();
            }
        });
    } else {
        $("#tab_performance").fadeOut(250);
    }
});

$("#activeButton").click(function() {
    //push firebase
    refBin.child($("#SelectBin").val()).update({
        "bin_status": 1
    }).then((snapshot) => {
        $("#inactiveButton").css("background-color", "#9b9191");
        $("#activeButton").css("background-color", "#84f14e");
    });
});

$("#inactiveButton").click(function() {
    //push firebase
    refBin.child($("#SelectBin").val()).update({
        "bin_status": 0
    }).then((snapshot) => {
        $("#activeButton").css("background-color", "#9b9191");
        $("#inactiveButton").css("background-color", "#f14e4e");
    });
});