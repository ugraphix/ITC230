//list of items
let school = [
    {course: "Math", teacher: "Ms. Green", code:"MATH088"},
    {course: "Programming", teacher: "Mrs. Smith", code:"ITC260"},
    {course: "Art", teacher: "Mr. Watson", code:"ART101"},
];



exports.get = (course) => {
    return school.find((item) => {
    return item.course == course;
    });
}

exports.delete = (course) => {
    let oldLength = school.length;
    var newCourse = school.filter((item) => {
        return item.course !==course;
    })
    school = newCourse;



return { deleted: school.length !==oldLength, total: school.length};
}




