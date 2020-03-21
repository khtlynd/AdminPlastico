var refUserBin = firebase.database().ref("userBin");

refUserBin.orderByChild("accessed_date").on("child_added", function(snapshot) {
    // alert(snapshot.val().accessed_date);
});

refUserBin.orderByChild("accessed_date").once("value", function(snapshot) {
    var json = JSON.stringify(snapshot);
    var fromJson = JSON.parse(json);
    var length = Object.keys(fromJson).length
    alert(length)

    // alert(length);
    var ctx = $('#binperfChart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            // LABELS BASED ON DATES
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                data: [12, 19, 3, 5, 2, 3],

                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var ctx = $('#userperfChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            // LABELS BASED ON DATES
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                data: [12, 19, 3, 5, 2, 3],

                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
})