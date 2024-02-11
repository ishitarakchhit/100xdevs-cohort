const express = require('express');

const app = express();

let numberOfRequests = 0;

function countLoad(req,res, next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.get("/", countLoad, function(req,res){
    res.status(200);
});

app.use(express.json());        //add this statement when you want middlewares to be called in every routes(usually post) below this line

app.post("/p", countLoad, function(req, res){
    const ans = req.body.msg;
    console.log(ans);
    res.json({
        msg: "you are fine"
    });
});

app.listen(3002);