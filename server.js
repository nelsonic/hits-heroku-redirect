var port  = process.env.PORT || 8000;
var fs    = require('fs'); // so we can open the HTML & JS file
var app = require('http').createServer(handler)
var NEW_SERVER = 'http://178.79.141.232'

function handler (req, res) {
  var url = req.url;
  console.log(url);
  res.writeHead(301, { "Location": NEW_SERVER + url });
  res.end();
}

app.listen(port);
console.log('Visit ' + require('./lanip') + ':'+ port);
