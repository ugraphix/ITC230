var schoolSubjects = [
 "Algebra",
 "English",
 "Psychology",
 "Art",
 "Programming",
];
exports.getSchool = function() {
var idx = Math.floor(Math.random() * schoolSubjects.length);
return schoolSubjects[idx];
};