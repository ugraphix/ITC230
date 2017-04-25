//list of items
let school = [
    {course: "math", teacher: "Green", code:"MATH088"},
    {course: "programming", teacher: "Smith", code:"ITC260"},
    {course: "art", teacher: "Watson", code:"ART101"},
    {course: "psychology", teacher: "Farts", code:"PSY101"},
    {course: "writing", teacher: "Washington", code:"ENG120"},
    {course: "music", teacher: "Jefferson", code:"MUS210"},
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

 

return { deleted: school.length !==oldLength, total: school.length}
};