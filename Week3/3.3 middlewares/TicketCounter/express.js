const express = require("express");
const app = express();

function isAgeValidMiddleware(req, res, next){
    if(req.query.age <18){
        res.status(404).json({
            msg: "Your age is lesser than required"
        })
    }
    else next();
}

app.use(isAgeValidMiddleware);

app.get("/ride1", function(req, res){
    res.status(200).json({
        msg: "You have just completed the ride 1"
    });
})

app.get("/ride2", function(req, res){
    res.status(200).json({
        msg: "You have just completed the ride 2"
    });
})

app.listen(3000)