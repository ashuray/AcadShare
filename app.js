var express			 = require("express");
var methodOverride   = require("method-override");
var bodyParser       = require("body-parser");
var mongoose         = require("mongoose");
var indexRoutes      = require("./routes/index.js");

var app = express();
app.use(express.static('public'))
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/",indexRoutes);

app.listen(3000,'localhost',function(){
	console.log("server has started");
});
