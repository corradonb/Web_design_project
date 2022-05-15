const express = require('express')
const app = express();
const path = require('path');

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

app.use('/public', express.static(path.join(__dirname)));


app.use(function(req, res) {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

app.listen(3000);