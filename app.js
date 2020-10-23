var express = require('express');
var http    = require('http');
var path    = require('path');
var engine  = require('ejs-locals');
const { normalize } = require('path');
var app     = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended:true}));;
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// These two lines must follow – order matters.
require('./router')(app);
app.set('port', 1338);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// Enable routing and use port 3000.
var port = normalizePort(process.env.PORT || '3000');
require('./router')(app);
app.set('port', port);

// Set up ejs templating.
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// Set view folder.
app.set('views', path.join(__dirname, 'views'));
 
// That line is to specify a directory where you could 
// link to static files (images, CSS, etc.). 
// So if you put a style.css file in that directory and you 
// could link directly to it in your view <link href=”style.css” rel=”stylesheet”>
app.use(express.static(path.join(__dirname, 'static')));
 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});