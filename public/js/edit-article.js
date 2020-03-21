var refArticle = firebase.database().ref("article");
refArticle.on('child_added', function(snapshot) {
    $("#btnEdit").append(snapshot.key);
});


// function 

// refArticle.on('value', function(snapshot) {
//     //read article data
//     $("#title").html(snapshot.child("title_article").val());

// })