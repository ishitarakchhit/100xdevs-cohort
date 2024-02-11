const express = require('express');
const app = express();
const zod = require('zod');

app.use(express.json());

const schema = zod.array(zod.number());    //an array of number

const schema2 = zod.object({
    email: zod.email(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
  });

app.post("/health-checkup", function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)          //pass kidneys through schema and check if it is valid or not

    if(!response.success){
        res.status(400).json({
            msg: "Inputs are invalid"
        })
    }
    else{
        res.send({
            response
        })
    }
});
app.listen(4000);


