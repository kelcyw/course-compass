class Course {
    prereqs;
    courseName;
    courseCode;
    credits;

    Class(prereqs, courseName, courseCode, credits) {
        this.prereqs = prereqs;
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.credits = credits;
    }
}

var student = {
    name:"John", 
    id:"555666777", 
    takenCourses:[], 
    degree:{
        name:"B.Sc, Computer Science", 
        requirements:[
            new Course([], "CPSC", 100, 3), 
            new Course([], "CPSC", 103, 3), 
            new Course([new Course([], "CPSC", 103, 3)], "CPSC", 107, 3), 
            new Course([], "CPSC", 110, 4)
        ]
    }
}

function load() {

    document.getElementById("nameField").innerHTML=student.name;
    document.getElementById("idField").innerHTML=student.id;
    document.getElementById("degreeField").innerHTML=student.degree.name;
    document.getElementById("coursesField").innerHTML=student.takenCourses;  
}

function addCourse() {
    student.takenCourses.push("CPSC 110");
    load();
}

function loadMap() {
    for (var i = 0, max = student.degree.requirements.length(); i < max; i++) {
        document.createElement();
    }
}

function updateCheckStates() {
    // document.getElementById("courseCheckBox").disabled = !this.checked;
    var checkboxes = document.getElementsByClass("form-check-input");
    for (var i = 0, max = checkboxes.length(); i < max; i++) {

    }
}


// Degree Class
class Degree {
    #degreeName;
    #requirements;

    Class(degreeName, requirements) {
        this.degreeName = degreeName;
        this.requirements = requirements;
    }

    get getDegreeName() {
        return this.degreeName;
    }
}

let requirements = [
    new Course([], "CPSC", 100, 3), 
    new Course([], "CPSC", 103, 3), 
    new Course([new Course([], "CPSC", 103, 3)], "CPSC", 107, 3), 
    new Course([], "CPSC", 110, 4)
]

let cs_degree = new Degree("CPSC", requirements);



function filterCoursesByName(name) {
    let filtered = [];

    cs_degree.requirements.forEach(function (list, index) {
        list.item.forEach(function (course, index) {
            if (!filtered.contains(course) && course.getCourseName()) {
                filtered.add(course);
            }
        })
    });

    return filtered;
}

