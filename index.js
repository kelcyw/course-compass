var student = {
    name:"John", 
    id:"555666777", 
    takenCourses:[], 
    degree:{
        name:"B.Sc, Computer Science", 
        requirements:[]
    }
}

function loaded() {

    document.getElementById("nameField").innerHTML=student.name;
    document.getElementById("idField").innerHTML=student.id;
    document.getElementById("degreeField").innerHTML=student.degree.name;
    document.getElementById("coursesField").innerHTML=student.takenCourses;  
}

function addCourse() {
    student.takenCourses.push("CPSC 110");
    loaded();
}