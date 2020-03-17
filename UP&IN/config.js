var mysql=require('mysql');

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'register'
});

connection.connect(function(err,result){
    if(err){
        console.log('Error while connecting with database');
    }
    else{
        console.log('Database connected');
        
    }
});
module.exports=connection;
