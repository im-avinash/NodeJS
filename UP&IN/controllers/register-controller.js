var Cryptr=require('cryptr');
var express=require('express');
var connection=require('./../config');

module.exports.register=function(req,res){
    var today=new Date();
    var encryptedString=cryptr.encrypt(req.body.password);
    var user={
        "name":req.body.name,
        "contact":req.body.mobile,
        "email":req.body.email,
        "userId":req.body.userId,
        "password":encryptedString,
        "created_at":today,
        "updated_at":today
    }
    connection.query('insert into users set ?',user,function(err,results,fields){
        if(err){
            res.json({
                status:false,
                message:'there are some error with query',
                err:console.log(err)
            });
        }
        else{
            res.json({
                status:true,
                data:results,
                message:'user registered sucessfully'
            });    
        }
    });
}

