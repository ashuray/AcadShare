var express			 = require("express");
var methodOverride   = require("method-override");
var bodyParser       = require("body-parser");
var mongoose         = require("mongoose");
var indexRoutes      = require("./routes/index.js");
var practiceRoutes      = require("./routes/practice.js");
var interviewRoutes      = require("./routes/interview.js");

var app = express();
app.use(express.static('public'))
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/acadshare");
app.use("/",indexRoutes);
app.use("/practice",practiceRoutes);
app.use("/interviews",interviewRoutes);

app.listen(3000,'localhost',function(){
	console.log("server has started");
});