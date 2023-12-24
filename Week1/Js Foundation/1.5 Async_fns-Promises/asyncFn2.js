const fs = require("fs");
//filesystem module

fs.readFile("a.txt", "utf-8", function(err, data){
    if(err){
        console.log("Error reading the file");
        return;
    }
    console.log(data);
});
