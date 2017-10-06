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
        "Mobile": "+91-9897237768",
        "Email": "Kunal.Mehandiratta92@gmail.com",
        "github": "Kunal.Mehandiratta92@gmail.com",
        "location": "Pune"
    },
    "welcome_mssg": "Hello Kunal Mehandiratta!",
    "biopic": "",
    "skills": ["HTML", "Javascript", "CSS", "jQuery", "SQL", "PL/SQL", "Java"]
}
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.Mobile);
$("#header").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%",bio.contacts.Email);
$("#header").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#header").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#header").append(formattedLocation);


var welcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcome_mssg);
$("#header").append(welcomeMessage);


var work = {
    "jobs": [
        {
            "position": " Associate",
            "Employer": "Cognizant",
            "Years": "October 2017-Present",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "position": " Programmer Analyst",
            "Employer": "Cognizant",
            "Years": "September 2014-October 2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
};

var projects ={
    "projects":[
        {
            "title":"Family Dollar Stores",
            "dates":"March 2015 - Present",
            "description":"The account comprises of enhancement, QEA, maintenance and DBA  of the Oracle Applications R12.1.3 implemented on the client side.EBS Team, compromises of functional and technical associates having expertise on HRMS and SCM module of EBS."
        },
        {
            "title":"E-Mandi-Online Agriculture Exchange",
            "dates":"January 2014 - May 2014",
            "description":"This project was developed as Capstone Project for the degree with main objective to implement all the concepts learned in the ASP.NET course by developing a real time effective application. The major focus was on the ASP Concepts, .NET Framework. The project was written in C# and other Technologies used were HTML5, CSS, Javascript, Jquerry, and AJAX. IDE: Visual Studio 2012, SQL Server was used as a backend database using SQL Server Management Studio."
        },
        {
            "title":"E-Electoral System ",
            "dates":"May 2013-August 2013",
            "description":"This project was developed as Project for the summer training with main objective to implement all the concepts learned in the ASP.NET course by developing a real time effective application. The major focus was on the ASP Concepts, .NET Framework. The project was written in C# and other Technologies used were HTML5, CSS. IDE: Visual Studio 2012, SQL Server was used as a backend database using SQL Server Management Studio."
        },
        {
            "title":"Virtual Class room",
            "dates":"January 2014 - May 2014",
            "description":"This project was developed as proposed system for the university with main objective to implement all the concepts learned in the ASP.NET course by developing a real time effective application. The major focus was on the ASP Concepts, .NET Framework. The project was written in C# and other Technologies used were HTML5, CSS, Javascript, Jquerry, and AJAX. IDE: Visual Studio 2012, SQL Server was used as a backend database using SQL Server Management Studio."
        }
    ]
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
        {
            "title": "udemy",
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

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }

}

function displayWork()
{
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].Employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
    
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
    
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].Years);
        $(".work-entry:last").append(formattedDates);
    
        var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDesc);
    }

}
displayWork();

function inName(name)
{
    name = name.trim().split(" ");
    console.log(name);

    name[1]= name[1].toUpperCase();
    name[0]= name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    name.join(" ");
    return name;

}
$("#main").append(internationalizeButton);

projects.display=function(){
    for(project in projects.projects)
    {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDesc = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDesc);
    }
}
projects.display();





