const express = require('express');
const app = express();

function userMiddleware(req, res, next){
    const usernname = req.query.username;
    const password = req.query.password;
    const kidneyId = req.query.kidneyId;
    if(username != "ishita" || password != "pass"){
        res.status(400).json({
            msg: "Wrong user"
        });
    }
    else{
        next();
    }
};

function kidneyMiddleware(req,res,next){
    const usernname = req.query.username;
    const password = req.query.password;
    const kidneyId = req.query.kidneyId;
    if(kidneyId <1 || kidneyId>2){
        res.status(400).json({
            msg: "Wrong inputs"
        })
    }
    else next();
};
app.get("/health", userMiddleware, kidneyMiddleware, function(req, res){
    const usernname = req.query.username;
    const password = req.query.password;
    const kidneyId = req.query.kidneyId;

    res.status(200).json({
        msg: "Everything is fine"
    });
});

app.listen(3001);