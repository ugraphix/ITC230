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
    {schoolSubjects: "Math", teacher: "Green", Code:"MATH088"},
    {schoolSubjects: "Programming", teacher: "Smith", Code:"ITC260"},
    {schoolSubjects: "Art", teacher: "Watson", Code:"ART101"},
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
