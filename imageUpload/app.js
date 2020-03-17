const express = require('express');
const formidable = require('formidable');

const app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/',function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req);

    form.on('fileBegin',function(name,file){
        file.path = __dirname + '/images/' + file.name;
    });

    form.on('file',function(name,file){
        console.log('file uploading...'+ file.name);
    });

    res.sendFile(__dirname + '/index.html');
});
app.listen(8080,function(){
    console.log("app is running");
    
});