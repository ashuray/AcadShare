var express			= require("express");
var router          = express.Router();
var interviewsDb = require("../models/interviewmodel.js");

router.get("/", function(req, res) {
   interviewsDb.find({}, function(err, allinterviews) {
      if (err) {
         console.log("SOMETHING WENT WRONG");
         console.log(err);
      } else {
         res.render("interview/index.ejs", {
            interviews: allinterviews
         });

      }

   });
});

router.post("/", function(req, res) {
   var companyName = req.body.companyName;
   var jobProfile = req.body.jobProfile;
   var employmentType = req.body.employmentType;
   var campusType = req.body.campusType;
   var interviewDate = req.body.interviewDate;
   var description = req.body.description;

         var newinterview = {
            companyName: companyName,
            jobProfile: jobProfile,
            employmentType: employmentType,
            campusType: campusType,
            interviewDate: interviewDate,
            description : description
         }

         interviewsDb.create(newinterview, function(err, created_interview) {
            if (err) {
               console.log("SOMETHING WENT WRONG");
               console.log(err);
            } else {
               console.log("NEW INTERVIEW CREATED");
               console.log(created_interview);
               res.redirect("/interviews")
            }
   });
});

router.get("/new", function(req, res) {
    res.render("interview/new.ejs");
 });


router.delete("/:id",function(req,res){
   interviewsDb.findByIdAndRemove(req.params.id,function(err){
      if(err)
                     {
                        console.log(err);
                     }
                     else
                     {
                        res.redirect("/interviews");
                     }
   });
});
module.exports = router;