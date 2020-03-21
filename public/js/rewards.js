var refReward = firebase.database().ref("reward");
refReward.on('child_added', function(snapshot) {
    //read data reward
    dataRewards = `<tr class="table-row">
    <td>` + snapshot.child("reward_name").val() + ` </td>
    <td>` + snapshot.child("content").val() + ` </td>
    <td>` + snapshot.child("redeem_point").val() + ` pts</td>
</tr>`

    //Function to show data in table
    $("#dataRewards").append(dataRewards).hide().show('fast');
})