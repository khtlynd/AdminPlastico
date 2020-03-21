$("#submit-reward").click(function() {
    var refReward = firebase.database().ref("reward")
    refReward.push({
        "reward_name": $("#rname").val(),
        "content": $("#content").val(),
        "redeem_point": $("#rpoint").val(),
        "image_reward": $("#rimage").val()
    }).then((snapshot) => {
        refReward.child(snapshot.key).update({
            "reward_id": snapshot.key
        });

        Notify.alert('New Reward Successfully Added!');

        //reset form field
        $("#rname").val("")
        $("#content").val("")
        $("#rpoint").val("")
        $("#rimage").val("")
    })
})