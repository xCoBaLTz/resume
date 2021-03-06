/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name" : "Seanan Chabra",
    "role" : "Computer/Software Engineer @ Ryerson University",
    "contact" : {
      "mobile" : "(647)241-4880",
      "email" : "seananchabra@hotmail.com",
      "github" : "xCoBaLTz",
      "twitter" : "@s_chabra",
      "insta" : "@s_chabra",
      "location" : "Toronto, ON"
    },
    "bioPic" : "http://i.imgur.com/T4QZTJ2.jpg",
    "skills" : ["Algorithms", "Data Structures", "Java", "HTML", "CSS", "C", "JavaScript", "JSON", "JQuery", "Agile Methodologies", "Turing", "Visual Basic", "PHP", "CodeIgniter", "MVC", "phpMyAdmin", "MySQL", "Linux Command Line"],
    "welcome" : "The developer you never knew you needed. I'm a computer/software engineering student who loves the artistic details of the frontend and the nitty gritty of backend. I love to play games where I am constantly challenged in my abilities to analyze problems. I also code competeively on the side."
};

var name = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(name);

var role = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(role);

var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(bioPic);

var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
$("#header").append(welcome);

var mobile = HTMLmobile.replace("%data%", bio.contact.mobile);
$("#header").append(mobile);

var email = HTMLemail.replace("%data%", bio.contact.email);
$("#header").append(email);

var github = HTMLgithub.replace("%data%", bio.contact.github);
$("#header").append(github);

var twitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
$("#header").append(twitter);


//$("#lets-connect").append(HTMLcontactGeneric);
//var email = HTMLemail("%data%", bio.email);
//$("#lets-connect").append(email);



var work ={
  "jobs":[
  {
    "employer" : "Best Buy Canada",
    "title" : "Connected Solutions Specialist",
    "dates" : "May 2016 - Current",
    "location" : "Etobicoke, ON",
    "description" : "Selling computers and communcating with guests, gained some knowledge of the newest hardware and software in the market"
  },
  {
   "employer" : "Ryerson Electrical and Computer Engineering Student Society",
   "title" : "Web Content Developer",
   "dates" : "April 2016 - Current",
   "location" : "Toronto, ON",
   "description" : "Volunteer position, develope and maintain the electrical and computer engineering student society webpage."
 },
 {
   "employer" : "Best Buy Canada",
   "title" : "Connected Solutions Specialist",
   "dates" : "August 2015 - February 2016",
   "location" : "Etobicoke, ON",
   "description" : "Selling computers and communcating with guests, gained some knowledge of the newest hardware and software in the market"
 }
 ],

display(){
 for(job in work.jobs){
   $("#workExperience").append(HTMLworkStart);
   var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
   var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
   var title_employer = employer + title;
   $(".work-entry:last").append(title_employer);

   var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
   $(".work-entry:last").append(dates);

   var loc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
   $(".work-entry:last").append(loc);

   var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
   $(".work-entry:last").append(description);
  }
}
};

var education ={
  "schools":[
  {
    "name" : "Ryerson University",
    "city" : "Toronto, ON",
    "degree" : "Bachelor of Engineering",
    "major" : "Computer/Software Engineering"
  }
],
displaySchools(){
     for(school in education.schools){
       $("#education").append(HTMLschoolStart);
       var name = HTMLschoolName.replace("%data%", education.schools[school].name);
       $(".education-entry:last").append(name);
       var city = HTMLschoolLocation.replace("%data%", education.schools[school].city);
       $(".education-entry:last").append(city);
       var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
       $(".education-entry:last").append(degree);
       var major = HTMLschoolMajor.replace("%data%", education.schools[school].major);
       $(".education-entry:last").append(major);
     }
},
 "onlineCourses":[
   {
     "title" : "JavaScript Basics",
     "school" : "Udacity",
     "dates" : "June 2016",
     "degree" : "Udacity Nanodegree",
     "url" : "https://classroom.udacity.com/courses/ud804"
   }
 ],
displayOnlineClasses(){
      for(onlineCourse in education.onlineCourses){
        $("#onlineCourses").append(HTMLonlineClasses);
        var school = HTMLschoolName.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".online-entry:last").append(school);
        var degree = HTMLschoolDegree.replace("%data%", education.onlineCourses[onlineCourse].degree);
        $(".online-entry:last").append(degree);
        var title = HTMLschoolMajor.replace("%data%", education.onlineCourses[onlineCourse].title);
        $(".online-entry:last").append(title);
        var dates = HTMLschoolLocation.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".online-entry:last").append(dates);
        var url = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".online-entry:last").append(url);
     }
   }
};


var projects = {
  "project": [
    {
      "title" : "Lockation",
      "dates" : "March 30, 2016 - April 2, 2016",
      "image" : "http://i.imgur.com/fqEZycA.png",
      "description" : "Worked with a team of 4 to create a fraud detection system using Capital One’s API, Twilio API, and Twitter API that could determine whether a transaction was fraud or not based on location of their last tweet in coherence to the transaction. I specifically focused on the back end implementation of the project. Focusing on the implementation of the database, storage of the of the Capital One transactions and Twitter information.	Helped with the frontend implementation and was very involved with the overall planning/design of the project."
    }
  ],
display(){
    for(project in projects.project){
      $("#projects").append(HTMLprojectStart);
      var title = HTMLprojectTitle.replace("%data%", projects.project[project].title);
      $(".project-entry:last").append(title);
      var dates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
      $(".project-entry:last").append(dates);
      var description = HTMLprojectDescription.replace("%data%", projects.project[project].description);
      $(".project-entry:last").append(description);
      var image = HTMLprojectImage.replace("%data%", projects.project[project].image);
      $(".project-entry:last").append(image);
    }
  }
};

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  for(var i=0; i<bio.skills.length; i++){
  var skills = HTMLskills.replace("%data%", bio.skills[i]);
  $("#skills").append(skills);
  }
}

work.display();
projects.display();
education.displaySchools();
education.displayOnlineClasses();

$("#mapDiv").append(googleMap);
