require('dotenv').config()
let express = require('express');
let app = express();
//console.log("Hello World");

//app.get('/',function(req,res){
 //res.send('Hello Express');
//});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html');

});
app.use('/public',express.static(__dirname+'/public'));

app.get('/json',function(req,res){
    let message="Hello json";
    

if(process.env.MESSAGE_STYLE==="uppercase"){
    message=message.toUpperCase();
}
res.join({"message":message});
});






























 module.exports = app;
