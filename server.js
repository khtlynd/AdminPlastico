//var http = require('http');
//var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/static', express.static('views/'));


app.get('/login', function(req, res) {
    res.render('login');
})

app.get('/dashboard', function(req, res) {
    res.render('dashboard');
})

app.get('/maps', function(req, res) {
    res.render('maps');
})

app.get('/bin', function(req, res) {
    res.render('bin');
})

app.get('/bin-profile', function(req, res) {
    res.render('bin-profile');
})

app.get('/assign-bin', function(req, res) {
    res.render('assign-bin');
})

app.get('/user', function(req, res) {
    res.render('user');
})

app.get('/user-profile', function(req, res) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    var url = require('url');
    var adr = fullUrl;
    var q = url.parse(adr, true);
    var qdata = q.query;
    console.log(qdata.id + "AEFJKAEJFAEJ");
    res.render('user-profile', { id: qdata.id });
    // console.log(myUserId);
    // var myUserId = firebase.auth().currentUser.uid;
})

app.get('/article', function(req, res) {
    res.render('article');
})

app.get('/add-article', function(req, res) {
    res.render('add-article');
})

app.get('/edit-article', function(req, res) {
    res.render('edit-article');
})

app.get('/goals', function(req, res) {
    res.render('goals');
})

app.get('/add-goals', function(req, res) {
    res.render('add-goals');
})

app.get('/rewards', function(req, res) {
    res.render('rewards');
})

app.get('/add-rewards', function(req, res) {
    res.render('add-rewards');
})

app.get('/error-page', function(req, res) {
    res.render('error-page');
})

app.post('/lol', function(req, res) {
    console.log(req.body.SelectBin);
})


// app.get('/error-page', function(req, res) {
//     res.end('404-ERROR NOT FOUND');
// })

app.listen(8888);
console.log('Listening to port... Successfull!');

app.get('*', function(req, res) {
    res.render('error-page');
});