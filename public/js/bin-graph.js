var binArray = [];
var fromuserjson = "";
var userdata = "";
var ulength = "";
var lineChart = "";

function changeChart(year) {
    binArray = [];

    for (var i = 1; i <= 12; i++) {
        var month = i;
        var binactivity = 0;
        for (var x = 0; x < ulength; x++) {
            if (fromuserjson[userdata[x]]["month"] == month && fromuserjson[userdata[x]]["year"] == year) {
                binactivity = binactivity + 1
            }
        }
        binArray.push(binactivity);
    }

    var ctx = document.getElementById("barChart");
    lineChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Bin A",
                backgroundColor: "#3e95cd",
                data: binArray,
            }, {
                label: "Bin B",
                backgroundColor: "#8e5ea2",
                data: binArray,
            }]
        },
        options: {
            title: {
                display: true,
                text: "Bin Activity in " + year
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Sum of Activity'
                    }
                }],
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }]
            }
        }
    });
}

var userchart = firebase.database().ref("userBin");
//get user activity
userchart.once("value", function(snapshot) {
    var userjson = JSON.stringify(snapshot);
    fromuserjson = JSON.parse(userjson);
    userdata = Object.keys(fromuserjson);
    ulength = Object.keys(userdata).length;

    changeChart($("#selectYear").val())
});

//deteksi perubahan dropdown year
$("#selectYear").change(function() {
    changeChart($(this).val());
});

// var binarray = [];
// var binjson = "";
// var frombinjson = "";
// var bindata = "";

// var listbin = firebase.database().ref("bin");
// listbin.once("value", function(snapshot) {
//     var binjson = JSON.stringify(snapshot);
//     frombinjson = JSON.parse(binjson);
//     bindata = Object.keys(frombinjson);
//     // length = Object.keys(bindata).length;

//     for (var i = 0; i < bindata.length; i++) {
//         alert(frombinjson[1]);
//     }

// })