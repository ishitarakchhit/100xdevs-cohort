const express = require('express');
const app = express();
const zod = require('zod');

app.use(express.json());

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US"))
  });

app.post("/login", function(req,res){
    const input = req.body;
    const response = schema.safeParse(input);
    if(!response.success){
        res.status(400).json({
            msg: "Invalid inputs"
        })
    }
    else{
        res.status(200).json({
            msg: "These are valid inputs"
        })
    }
});
app.listen(4000);


