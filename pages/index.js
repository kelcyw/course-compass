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
        return this.#degreeName;
    }

    get getRequirements() {
        return this.#requirements;
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

    // not sure if I implemented this correctly
    cs_degree.requirements.forEach((list) => {
        list.item.forEach((course) => {
            if (!filtered.contains(course) && course.getCourseName()) {
                filtered.add(course);
            }
        })
    });

    return filtered;
}

// Student Class
class Student {
    #studentName;
    #studentID;
    #finishedCourses;
    #degree;

    Class(studentName, studentID, finishedCourses, degree) {
        this.#studentName = studentName;
        this.#studentID = studentID;
        this.#finishedCourses = finishedCourses;
        this.#degree = degree;
    }

    get getStudentName() {
        return this.#studentName;
    }

    get getStudentID() {
        return this.#studentID;
    }

    get getStudentCourses() {
        return this.#finishedCourses;
    }

    get getStudentDegree() {
        return this.#degree;
    }

    changeDegree(degree) {
        this.#degree = degree;
    }

    addTakenCourse(course) {
        if (!this.#finishedCourses.contains(course)) {
            this.#finishedCourses.add(course);
        }
    }

    removeTakenCourse(course) {
        if (this.#finishedCourses.contains(course)) {
            this.#finishedCourses.remove(course);
        }
    }

    getUnfulfilledReqs() {
        let requirements = this.#degree.getRequirements();
        let unfulfilled = [];

        requirements.forEach(function(path, index) {
            let path_list = [];
            path.forEach((course) => {
                if (!this.#finishedcourses.contains(course)) {
                    path_list.add(course);
                }
            })
            a
            unfulfilled.add(path_list);
        })
        return unfulfilled;
    }

    getAvailableCourses() {
        let requirements = this.#degree.getRequirements();
        let available = [];

        requirements.forEach(function(path, index) {
            for (var i = 0; i < path.length; i++) {
                let course = path[i];

                if (this.#finishedCourses.contains(course)) {
                    continue;
                }
                this.#finishedCourses.forEach((finished) => {
                    if (course.hasPreq(finished) && !available.contains(c)) {
                        available.add(course);
                    }
                })
            }
        })
        return available;
    }
}