/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*$("#main").append("Kunal Mehandiratta");
var aweSomeThoughts = "I am Kunal and I am AWESOME !";
console.log(aweSomeThoughts);
var funThoughts = aweSomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);

//$("#main").append(funThoughts);*/

var formattedName = HTMLheaderName.replace("%data%", "Kunal Mehandiratta");
var formattedRole = HTMLheaderRole.replace("%data%", "Front End Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name": "Kunal",
    "role": "Front end developer",
    "contacts": {
        "@Mobile": "+91-9897237768",
        "@Email": "Kunal.Mehandiratta92@gmail.com",
        "@github": "Kunal.Mehandiratta92@gmail.com",
        "@location": "Pune"
                   },
    "welcome_mssg": "Hello!",
    "biopic": "",
    "skills": ["HTMl, Javascript, CSS, jQuery"]
}

var work = {
    "jobs" : [
    {
        "position": " Programmer Analyst",
        "Employer": "Cognizant",
        "Years" : "3"
    }]
};
var education = {
    "schools": [{
        "name": "Lovely Professional University",
        "city": "Jalandhar, Punjab",
        "years": "2010-2014",
        "degree": "B.Tech",
        "major": "Computer Science"
    },
    {
        "name": "St.Jude's School",
        "city": "Dehradun, Uttarakhand",
        "years": "2009-2010",
        "degree": "SSC",
        "major": "PCM"
    }],

    "onlinecourses": [
        {"title": "udemy",
         "school": "Lovely Professional University",
         "dates": "2010-2014",
         "url": "https://www.google.com"
        },
        {
            "title": "lynda",
            "school": "Lovely Professional University",
            "dates": "2010-2014",
            "url": "https://www.google.com"
       }
    ]
};





