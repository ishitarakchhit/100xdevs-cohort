const express = require('express');

const app = express();

function sum(n){
    let ans =0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}
app.get('/', function(req, res){
    let n = req.query.n;
    let ans = sum(n);
    res.send("The sum to n natural numbers is: " + ans);
})


app.listen(3000);