const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const app = express();
const path = require('path');
const fetch = require('node-fetch');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname));

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/homepage',function(req,res) {
    res.sendFile('public/html/homepage.html', {root: path.join(__dirname)});
});
app.get('/about',function(req,res) {
    res.sendFile('public/html/about.html', {root: path.join(__dirname)});
});
app.get('/build',function(req,res) {
    res.sendFile('/public/html/build.html', {root: path.join(__dirname)});
});
app.get('/order_history',function(req,res) {
    res.sendFile('/public/html/order_history.html', {root: path.join(__dirname)});
});
app.get('/login',function(req,res) {
  res.sendFile('/public/html/login.ejs', {root: path.join(__dirname)});
});
app.get('/404',function(req,res) {
  res.sendFile('/public/html/404.html', {root: path.join(__dirname)});
});


app.post('/homepage', function(req, res) {
  const {name, password} = req.body;
  res.render("public/html/login.ejs", {name, password});
})

app.use('/public', express.static(path.join(__dirname)));
app.use((req, res, next) => {
  res.status(404).sendFile("/public/html/404.html", {root: path.join(__dirname)});
});



app.listen(3000);