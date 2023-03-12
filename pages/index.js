class Course {
    constructor(prereqs, courseName, courseCode, credits) {
        this.prereqs = prereqs;
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.credits = credits;
    }

    get getPrereqs() {
        return this.prereqs;
    }

    get getCourseName() {
        return this.courseName;
    }

    get getCourseCode() {
        return this.courseCode;
    }

    hasPrereq(course) {
        this.prereqs.forEach((prereq) => {
            prereq.forEach((c) => {
                if (c == course) {
                    return true;
                }
            })
        })
        return false;
    }
}

// Degree Class
class Degree {
    constructor(degreeName, requirements) {
        this.degreeName = degreeName;
        this.requirements = requirements;
    }

    get getDegreeName() {
        return this.#degreeName;
    }

    get getRequirements() {
        return this.#requirements;
    }
}

function filterCoursesByName(name) {
    let filtered = [];

    cs_degree.requirements.forEach((list) => {
        list.forEach((course) => {
            if (!filtered.contains(course) && course.getCourseName()) {
                filtered.add(course);
            }
        })
    });

    return filtered;
}

// Student Class
class Student {
    constructor(studentName, studentID, finishedCourses, degree) {
        this.studentName = studentName;
        this.studentID = studentID;
        this.finishedCourses = finishedCourses;
        this.degree = degree;
    }

    get getStudentName() {
        return this.studentName;
    }

    get getStudentID() {
        return this.studentID;
    }

    get getStudentCourses() {
        return this.finishedCourses;
    }

    get getStudentDegree() {
        return this.degree;
    }

    changeDegree(degree) {
        this.degree = degree;
    }

    addTakenCourse(course) {
        if (!this.finishedCourses.contains(course)) {
            this.finishedCourses.add(course);
        }
    }

    removeTakenCourse(course) {
        if (this.finishedCourses.contains(course)) {
            this.finishedCourses.remove(course);
        }
    }

    getUnfulfilledReqs() {
        let requirements = this.degree.getRequirements();
        let unfulfilled = [];

        requirements.forEach((path) => {
            let path_list = [];
            path.forEach((course) => {
                if (!this.finishedcourses.contains(course)) {
                    path_list.add(course);
                }
            })
            unfulfilled.add(path_list);
        })
        return unfulfilled;
    }

    getAvailableCourses() {
        let requirements = this.degree.getRequirements();
        let available = [];

        requirements.forEach((path) => {
            for (var i = 0; i < path.length; i++) {
                let course = path[i];

                if (this.finishedCourses.contains(course)) {
                    continue;
                }
                this.finishedCourses.forEach((finished) => {
                    if (course.hasPreq(finished) && !available.contains(c)) {
                        available.add(course);
                    }
                })
            }
        })

        return available;
    }
}

// Courses Initialization
// first year
let cs103 = new Course([], "CPSC", 103, 3);
let cs107 = new Course([new Course([], "CPSC", 103, 3)], "CPSC", 107, 3);
let cs110 = new Course([], "CPSC", 110, 4);
let cs121 = new Course([[cs107],[cs110]], "CPSC", 121, 4);
let cs210 = new Course([[cs107],[cs110]], "CPSC", 210, 4);
let cs213 = new Course([[cs121],[cs210]], "CPSC", 213, 4);
let cs221 = new Course([[cs210,cs121]]);
let cs310 = new Course([cs213,cs221], "CPSC", 310, 4);
let cs313 = new Course([cs213, cs221], "CPSC", 313, 3);
let cs320 = new Course([], "CPSC", 320, 3);


let requirements = [
    // PATH 1: CS 103 + 107 route
    [
        cs103,
        cs107,
        cs121,
        cs210,
        cs213,
        cs221,
        cs310,
        cs313,
        cs320
    ],
    // PATH 2: CS110 route
    [
        cs110,
        cs121,
        cs210,
        cs213,
        cs221,
        cs310,
        cs313,
        cs320
    ]

]

cs_degree = new Degree("CPSC", requirements);

var student = {
    name:"John", 
    id:"555666777", 
    takenCourses:[], 
    degree: {
        name:"B.Sc, Computer Science", 
        requirements:[
            new Course([], "CPSC", 100, 3), 
            new Course([], "CPSC", 103, 3), 
            new Course([new Course([], "CPSC", 103, 3)], "CPSC", 107, 3), 
            new Course([], "CPSC", 110, 4)
        ]
    }
}

function loadIndex() {

    document.getElementById("nameField").innerHTML=student.name;
    document.getElementById("idField").innerHTML=student.id;
    document.getElementById("degreeField").innerHTML=student.degree.name;
    document.getElementById("coursesField").innerHTML=student.takenCourses;  

}

function loadCourseMap() {
    loadMap();
}


function addCourse() {
    student.takenCourses.push("CPSC 110");
    load();
}

function loadMap() {
    var requirements = student.degree.requirements;
    
    for (var i = 0, max = requirements.length; i < max; i++) {
        var d = document.createElement('div');
        d.className = "form-check form-check-inline";
        d.id = i;
        var c = document.createElement('input');
        c.className = "form-check-input";
        c.type = "checkbox";
        c.id = i + " checkbox"; 

        c.innerHTML = '<label class="form-check-label" for="' +i+ ' checkbox">' 
        + requirements[i].courseName + " " + requirements[i].courseCode
        + '</label>';

        // d.innerHTML = '<input class="form-check-input" type="checkbox" value="" id="courseCheckBox"><label class="form-check-label" for="flexCheckDefault">'
        // + requirements[i].courseName + " " +
        // + requirements[i].courseCode
        // +'</label>';

        // function for comparing against taken courses here

        document.getElementById('form').appendChild(d);
        document.getElementById(i).appendChild(c);
    }
}

function updateCheckStates() {
    // document.getElementById("courseCheckBox").disabled = !this.checked;
    var checkboxes = document.getElementsByClass("form-check-input");
    for (var i = 0, max = checkboxes.length; i < max; i++) {
        // unfinished
    }
    
}


