var mongoose = require("mongoose");

var interviewSchema = new mongoose.Schema({
	companyName : String,
	jobProfile : String,
	employmentType : String,
    campusType : String,
    interviewDate : String,
    description : String
});

module.exports = mongoose.model("interviewsDb",interviewSchema);