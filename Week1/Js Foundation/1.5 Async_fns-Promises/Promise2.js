var d = new Promise(function(resolve){
    console.log("inside promise");
});

function callback(){
    console.log("d");
}

d.then(callback);