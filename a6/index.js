
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

var Course = require("./models/course.js")

//var routes = require('./routes.js')(app); // pass ‘app’ instance to the routes module

//link body parser for form handling
app.use(require("body-parser").urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/api', require('cors')()); // set Access-Control-Allow-Origin header for api route

// set up handlebars view engine
var handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


//form
app.get('/courses', function(req, res){

//redirect form submission
 res.render('courses', { csrf: 'CSRF token goes here' });
});
app.post('/process', function(req, res){
  console.log('Course Name (from visible form field): ' + req.body.course);
 res.redirect(303, '/about');
});

//a page that displays a list of courses
app.get('/', function(req, res) {
    Course.find((err, results) => {
        res.render('home', {courses: results});
    });
});

//a page that searches for courses
app.get('/search', function(req, res) {
res.render('search');
});


//the about page
app.get('/about', function(req, res) {
  res.render('about', {
      course: school.course,
      teacher: school.teacher,
      code: school.code});
});

//get object
app.get('/get', function(req, res) {
    Course.findOne({course: req.query.course}, (err, result) => {
       res.render('details', {course: req.query.course, item: result });
    });  
          
});

app.post('/get', function(req, res) {
    Course.findOne({course: req.body.course}, (err, result) => {
       res.render('details', {course: req.body.course, item: result });
    });  
});

//delete object
app.get('/delete', function(req, res) {
    Course.remove({title:req.query.course}, (err,result) => {
    res.send("Deleted course " + req.query.course + "\n" + JSON.stringify(result));                  
    })

});



//api's
app.get('/api/v1/course/:course', (req, res, next) => {
    let course = req.params.course;
    Course.findOne({course: course}, (err, result) => {
        if (err || !result) return next(err);
        res.json( result );    
    });
});

app.get('/api/v1/courses', (req,res, next) => {
    Course.find((err,results) => {
        if (err || !results) return next(err);
        res.json(results);
    });
});


app.get('/api/v1/delete/:course', (req,res, next) => {
    Course.remove({"course":req.params.course }, (err, result) => {
        if (err) return next(err);
        // return # of items deleted
        res.json({"deleted": result.result.n});
    });
});


app.get('/api/v1/add/:course/:teacher/:code', (req,res, next) => {
    // find & update existing item, or add new 
    let course = req.params.course;
    Course.update({ course: course}, {course:course, teacher: req.params.teacher, code: req.params.code }, {upsert: true }, (err, result) => {
        if (err) return next(err);
        // nModified = 0 for new item, = 1+ for updated item 
        res.json({updated: result.nModified});
    });
});











// 404 catch-all handler (middleware)
app.use(function(req, res, next){
res.status(404);
res.render('404');
});
// 500 error handler (middleware)
app.use(function(err, req, res, next){
console.error(err.stack);
res.status(500);
res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express started');    
});