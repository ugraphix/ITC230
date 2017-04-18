var express = require('express');
var app = express();

// set up handlebars view engine
var handlebars = require('express3-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);






app.get('/', function(req, res) {
res.render('home');
});

var school = require('./lib/school.js');



app.get('/about', function(req, res) {
  res.render('about', {
      course: school.course,
      teacher: school.teacher,
      code: school.code});
});

app.get('/get', function(req, res) {
  /*res.render(get.school());*/
    console.log(req.query.course);
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




app.listen(app.get('port'), function(){
 console.log( 'Express started on http://localhost:' +
 app.get('port') + '; press Ctrl-C to terminate.' );
});