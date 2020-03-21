function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
            vars[key] = value;
        });
    return vars;
}

var id = getUrlVars()["id"];
var refDataUser = firebase.database().ref("user/" + id);

refDataUser.once('value', function(snapshot) {
    $("#fname").html(snapshot.child("full_name").val());
    $("#uname").html(snapshot.child("username").val());
    $("#email").html(snapshot.child("email").val());
    $("#point").html(snapshot.child("current_point").val());
    $("#avatar").append(`<img src="` + snapshot.child("profile_pic").val() + `" style="width:60%"> `);

    stat = snapshot.child("user_status").val();
    if (stat == 0) {
        $("#deactButton").fadeIn("fast");
        $("#deactButton").click();
    } else if (stat == 1) {
        $("#reactButton").fadeIn("fast");
        $("#reactButton").click();
    } else {
        $("#deactButton").hide();
        $("#reactButton").hide();
    }

});

var refUserBin = firebase.database().ref("userBin");
refUserBin
    .orderByChild('year')
    .equalTo('2020')
    .on('child_added', function(snapshot) {
        alert(snapshot.val())
    });

$("#reactButton").click(function() {
    //push firebase
    refDataUser.update({
        "user_status": 1
    }).then((snapshot) => {
        $("#deactButton").show();
        $("#reactButton").hide();
    });
});

$("#deactButton").click(function() {
    //push firebase
    refDataUser.update({
        "user_status": 0
    }).then((snapshot) => {
        $("#reactButton").show();
        $("#deactButton").hide();
    });
});