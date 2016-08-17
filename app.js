var Model = require("./models");
var express = require("express");
var app = express();
var Routes = require("./routes");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var path = require("path");
var Promise = require("bluebird");
var Port = 3001;
var forceReset = true;

//OPTIONAL SWIG TEMPLATE
/*var swig = require("swig");
app.engine("html", swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");
swig.setDefaults({cache: false});*/

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*Model.NAMEOFTABLE.sync()
.then(function() {
	console.log("All files synced.");
	app.listen(Port, function() {
		console.log("APPNAME is Alive @ " + Port);
	});
})
.catch(function(err) {
	console.log("Error: ");
	console.error(err.message);
})*/

app.listen(Port, function() {
	console.log("APPNAME is Alive @ " + Port);
});

app.use(express.static(path.join(__dirname, "public")));
app.use('/', Routes);

//Error Handling
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.redirect(__dirname + "/views/error.html");
  //res.render("...", {});
});