//node for testing: npm test test:mocha test/tester.js
//list of items
let school = [
    {course: "math", teacher: "Green", code:"MATH088"},
    {course: "programming", teacher: "Smith", code:"ITC260"},
    {course: "art", teacher: "Watson", code:"ART101"},
    {course: "psychology", teacher: "Farts", code:"PSY101"},
    {course: "writing", teacher: "Washington", code:"ENG120"},
    {course: "music", teacher: "Jefferson", code:"MUS210"},
]; 

//function to get all courses
exports.getAll = () => {
    return school;
}

//function to get a course 
exports.get = (course) => {
    return school.find((item) => {
    return item.course == course;
    });
}

//function to delete a course
exports.delete = (course) => {
    const oldLength = school.length;
    let newCourse = school.filter((item) => {
        return item.course !==course;
    });
    school = newCourse;

    return { deleted: oldLength !==school.length, total: school.length};
};

//function to add a new course
exports.add = (newcourse) => {
    const oldLength = school.length;
  //no duplicates, add course - makes sure its not in array
    //search courses
    let item = this.get(newcourse.course);
    if (item) { // course already exists
    } else {
        school.push(newcourse);
    }

    
  return { added: oldLength !==school.length, total: school.length};  
};

//var newCourse = {course: "math", teacher: "Green", code:"MATH088"};
//console.log(this.add(newCourse))

