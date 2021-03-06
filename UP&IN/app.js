var express=require('express');
var bodyParser=require('body-parser');

var connection=require('./config');
var app=express();

var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('css'));
// app.get('/css/style.css',function(req,res){
//     res.sendFile(__dirname + '/' + 'css/style.css');
// });
app.get('/',function(req,res){
    res.sendFile(__dirname + '/' + 'signup.html');
});

app.get('/login.html',function(req,res){
    res.sendFile(__dirname+'/'+'login.html');
});

app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);

app.post('/controllers/register-controller',registerController.register);
app.post('/controllers/authenticate-controller',authenticateController.authenticate);

app.listen(8080);