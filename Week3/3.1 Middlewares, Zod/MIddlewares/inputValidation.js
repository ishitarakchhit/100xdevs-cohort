const express = require('express');
const app = express();

app.use(express.json());

app.post("/health-checkup", function(req,res){
    //expects input in array arr = [1,2]
    //user can send any type of input
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("Your kidney length is: "+ kidneyLength);
});

app.use(function(err, req, res, next){
    res.json({
        msg: "Something is up with the server"
    })
});
app.listen(3003);