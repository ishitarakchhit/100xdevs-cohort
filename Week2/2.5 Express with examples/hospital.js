//to create an in memory hospital
//methods
// 1. GET - User can check how many kidneys they have and their health
// 2. POST-User can add a new kidney
// 3. PUT - User can replace a kidney, make it healthy
// 4. DELETE - User can remove a kidney

const express = require("express");
const app = express();

var Users = [{
    name: "John",
    kidneys : [{
        healthy: false
    }]
}]
console.log(Users[0]);

app.use(express.json());

app.get('/', function(req, res){
    const johnKidneys = Users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let healthyKidneys = 0;

    for(let i =0; i<numberOfKidneys; i++){
        if(johnKidneys[i].healthy)
            healthyKidneys+=1;
    }
    const unhealthyKidneys = numberOfKidneys-healthyKidneys;
    res.json({
        numberOfKidneys, 
        healthyKidneys,
        unhealthyKidneys
    });
})


app.post('/', function(req, res){
    const ishealthy = req.body.healthy;
    Users[0].kidneys.push({"healthy": true});
    
    res.json({msg: "Done"});
});

app.put('/', function(req, res){
    if(funcIsOneHealthyKidney() == true){

        for(let i =0; i<Users[0].kidneys.length; i++){
            Users[0].kidneys[i].healthy = true;
        }
        res.json({msg: "Done"});
    }
    else{
        res.status(411).json({msg: "All your kidneys are healthy"});
    }
});

app.delete('/', function(req, res){
    
    if(funcIsOneHealthyKidney() == true){
        const newKidneys = [];
        for(let i=0; i<Users[0].kidneys.length; i++){
            if(Users[0].kidneys[i].healthy == true){
                newKidneys.push({
                    "healthy": true
                })
            }
        }
        Users[0].kidneys = newKidneys;
        res.json({msg: "Papa, is bande ki saari bekar kidneys hata di wo bhi bina operation kare😎"});
    }

    else{
        res.status(411).json({msg: "All your kidneys are healthy"});
    }
    
});


function funcIsOneHealthyKidney(){
    let atLeastOneUnhealthyKidney = false;      //to check for edge cases, if false return 411
    for(let i=0; i<Users[0].kidneys.length; i++){
        if(Users[0].kidneys[i].healthy == false){
            atLeastOneUnhealthyKidney = true;
            break;
        }
    }
    if(atLeastOneUnhealthyKidney) return true;
    else return false;
}

app.listen(3000);