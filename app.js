const express = require('express')
const app = express();
const path = require('path');

app.get('/homepage',function(req,res) {
    res.sendFile('homepage.html', {root: path.join(__dirname)});
});
app.get('/about',function(req,res) {
    res.sendFile('about.html', {root: path.join(__dirname)});
});
app.get('/build',function(req,res) {
    res.sendFile('build.html', {root: path.join(__dirname)});
});
app.get('/order_history',function(req,res) {
    res.sendFile('order_history.html', {root: path.join(__dirname)});
});
app.get('/login',function(req,res) {
    res.sendFile('login.html', {root: path.join(__dirname)});
});
app.get('/signup',function(req,res) {
    res.sendFile('signup.html', {root: path.join(__dirname)});
});

app.use('/Proiect', express.static(path.join(__dirname, 'Proiect')));


app.listen(3000);