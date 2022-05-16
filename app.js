const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

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
app.get('/404',function(req,res) {
  res.sendFile('/public/html/404.html', {root: path.join(__dirname)});
});

// app.post('/build', function(req, res) {
//   const {scpu, sgpu, smotherboard, spsu, scooler, case1} = req.body;
//   res.send(`Your order string is: ${scpu}, ${smotherboard}, ${sgpu}, ${spsu}, ${scooler}, ${case1}`)
// })

app.use('/public', express.static(path.join(__dirname)));
app.use((req, res, next) => {
  res.status(404).sendFile("/public/html/404.html", {root: path.join(__dirname)});
});



app.listen(3000);