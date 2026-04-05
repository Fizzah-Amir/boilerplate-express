require('dotenv').config()
let express = require('express');
let app = express();
//console.log("Hello World");

//app.get('/',function(req,res){
 //res.send('Hello Express');
//});
app.use(function(req,res,next){
    console.log(`${req.method} ${req.path} - ${req.ip}`);
                        
  next(); //without this req gets stuck
});
app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html');

});
app.use('/public',express.static(__dirname+'/public'));
app.get('/now',function(req,res,next){
    req.time=new Date().toString();
    next();
}, function(req,res){
    res.json ({time:req.time});
});


app.get('/json',function(req,res){
    let message="Hello json";
    

if(process.env.MESSAGE_STYLE==="uppercase"){
    message=message.toUpperCase();
}
res.json({"message":message});
});






























 module.exports = app;
