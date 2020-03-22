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

var ctx = document.getElementById("lineChart").getContext("2d");
var lineChart = new Chart(ctx, {
    type: 'line',
    data: [{
        x: 10,
        y: 20
    }, {
        x: 15,
        y: 10
    }],
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
});