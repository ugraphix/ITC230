var Course = require("./models/course");

// insert a new document into the database
//  new Course({course: "art", teacher: "Green", code:"MATH088"}).save();
    new Course({course: "programming", teacher: "Smith", code:"ITC260"}).save();
    new Course({course: "psychology", teacher: "Farts", code:"PSY101"}).save();
    new Course({course: "writing", teacher: "Washington", code:"ENG120"}).save();
    new Course({course: "music", teacher: "Jefferson", code:"MUS210"}).save();

// this may run before the previous command finishes
Course.count((err, result)=>{
    console.log(result)
});

// find all documents 
Course.find((err, result) => {
    // output error if one occurred
    if (err) {
        console.log(err);
    } else {
        // otherwise output the array of documents
        console.log(result);
    }
});

