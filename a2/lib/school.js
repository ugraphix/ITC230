/*var schoolSubjects = [
 "Algebra",
 "English",
 "Psychology",
 "Art",
 "Programming",
];
exports.getSchool = function() {
var idx = Math.floor(Math.random() * schoolSubjects.length);
return schoolSubjects[idx];
};*/


//list of items
let school = [
    {class: "Math", teacher: "Ms. Green", code:"MATH088"},
    {class: "Programming", teacher: "Mrs. Smith", code:"ITC260"},
    {class: "Art", teacher: "Mr. Watson", code:"ART101"},
];

exports.getSchool = function() {
var idx = Math.floor(Math.random() * school.length);
return school[idx];
};

/*exports.getSchool = (schoolSubjects) => {
    return school.find((item) => {
    return item.schoolSubjects == schoolSubjects;
    });
}*/


//console.log (get("it"));
//console.log(books[0].title);
