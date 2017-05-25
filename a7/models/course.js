//var credentials = require("../lib/credentials");
var mongoose = require("mongoose");

// remote db settings 
  var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 }  } };
//  mongoose.connect(credentials.mongo.development.connectionString, options);
  mongoose.connect("mongodb://gracie:cheeseme11@ds137101.mlab.com:37101/itc230_database", options);


var conn = mongoose.connection; 
conn.on('error', console.error.bind(console, 'connection error:'));  

var courseSchema = mongoose.Schema({
    course: String,
    teacher: String,
    code: String
});

module.exports = mongoose.model('Course', courseSchema);