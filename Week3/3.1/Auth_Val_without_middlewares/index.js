//This is a dumb way to doing input validation and authentication
//If we have more routes we will have to add same input validation code everytime: violates: DRY
//Better solution: we can create seperate functions as kidneyValidator and usernameValidator 
//most optimum solution: when you  know you have to do some prechecks you move then to some other place: middlewares

const express = require("express");
const app = express();

app.get("/health-checkup", function(req, res){
    const username = req.query.username;
    const password = req.query.password;
    const kidneyId = req.query.kidneyId;
    
    if(username === "ishita" && password === "pass"){
        if(kidneyId === '1' || kidneyId === '2'){
            res.status(200).json({msg: "Your kidneys are fine"});
        }
        else if( kidneyId === '0'){
            res.status(200).json({msg: "Book your appointment fast"});
        }
        else{
            res.status(400).json({msg: "Please provide correct number"});
        }
    }
    else{
        res.status(400).json({msg: "Invalid User"});
    }

});


app.listen(3000);