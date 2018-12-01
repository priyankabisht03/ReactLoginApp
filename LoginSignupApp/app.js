const express = require('express');
const path = require('path');
const app = express();
const User = require('./model/user').User;
app.use(express.json());
let validate = 1;
let users = [];
app.use('/', express.static(path.join(__dirname, 'public')));
app.post('/signup', (req, res) => {
    let message;
    body = req.body;
    let user = new User(body.name, body.email, body.pwd);
    let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if( !(regex.test(user.email)) && (user.pwd).length > 7 ){
        message = "Enter a valid Email Id";
        validate = 0;
    }else if( regex.test(user.email) && (user.pwd).length < 7 ){
        message = "Enter a valid Password";
        validate = 0;
    }else if( !(regex.test(user.email)) && (user.pwd).length < 7){
        message = "Enter a valid Email Id and Password";
        validate = 0;
    }else{
        validate = 1;
    }
    if( validate == 1 ){
        if (user.name && user.email && user.pwd) {
            message = "You are successfully registered!";
            users.push(user); 
        } else {
            message = "You are not registered successfully!"
        }   
    }  
   
    res.send({
        msg: message
    });
});

function login(email, pwd) {    
    found = false;    
    for (let user of users){                
        if(user.email == email && user.pwd == pwd){
            found = true;
            break;
        }
    }    
    return found;
}
app.post('/signin', (req, res) => {
    console.log(req.body)
    let message;
    loginStatus = login(req.body.email, req.body.pwd);
    if (loginStatus) {
        message = "You are logged in succesfully";
    } else {
        message = "Invalid Id and password";
    }
    res.send({
        msg: message
    });
});

app.listen(9999, () => {
    console.log("...Server Started...")
});