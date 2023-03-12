class Course {
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
        requirements:[]
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

function updateCheckStates() {
    // document.getElementById("courseCheckBox").disabled = !this.checked;
    var checkboxes = document.getElementsByClass("form-check-input");
    for (var i = 0, max = checkboxes.length(); i < max; i++) {

    }
}