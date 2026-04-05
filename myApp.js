require('dotenv').config()
let express = require('express');
let app = express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
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



app.get('/json',function(req,res){
    let message="Hello json";
    

if(process.env.MESSAGE_STYLE==="uppercase"){
    message=message.toUpperCase();
}
res.json({"message":message});
});

app.get('/name',function(req,res){
    let fullName=req.query.first+' '+req.query.last;
    res.json({name:fullName});
});
app.get('/:word/echo',function(req,res){
    res.json({echo:req.params.word});
}); //dynamic routes at last so it should match first upward routes first

app.post('/name',function(req,res){
    let fullName=req.body.first+' '+req.body.last;
    res.json({name:fullName});
});
module.exports=app;































