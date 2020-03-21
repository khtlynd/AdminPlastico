var refGoals = firebase.database().ref("goals");
refGoals.on('child_added', function(snapshot) {
    //Read data goals
    dataGoals = `<tr class="table-row">
    <td>` + snapshot.child("goals_name").val() + ` </td>
    <td>` + snapshot.child("exp_period").val() + ` days</td>
    <td>` + snapshot.child("target").val() + ` times</td>
    <td>` + snapshot.child("extra_point").val() + ` pts</td>
</tr>`

    //Function to show data in table
    $("#dataGoals").append(dataGoals).hide().show('fast');
})