var express=require('express');
var path=require('path');
var app=express();
app.listen(3005);
app.use(express.static(path.join(__dirname,'public')));
app.set('views','./views/pages');
app.set('view engine','jade');

console.log("I'm listening port 3005......");

var movies=[{name:'FirstName',body:'FirstBody'},{name:'secName',body:'secBody'}];

app.get('/',function(req,res)
{
  res.render('index',{
    title: "This is title.",
    movies: movies
  });
});

app.get('/admin/second',function(req,res){
  console.log("This is second page.");
  res.render('second',{
    title: "This is second title.",
    movies: movies
  });
});
