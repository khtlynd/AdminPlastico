var userchart = firebase.database().ref("userBin");
//get user activity
userchart.once("value", function(snapshot) {
    var userjson = JSON.stringify(snapshot);
    var fromuserjson = JSON.parse(userjson);
    var userdata = Object.keys(fromuserjson);
    var ulength = Object.keys(userdata).length;

    var binactivity = 0;
    for (var x = 0; x < ulength; x++) {
        if (fromuserjson[userdata[x]]["month"] == "01" && fromuserjson[userdata[x]]["year"] == "2020") {
            binactivity = binactivity + 1
        }
    }
    alert(binactivity);
});