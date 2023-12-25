function ishitaPromise(){
    var d = new Promise(function(resolve){
        resolve("Hi there!");
    });
    return d;
}
    
async function main(){
    var value = await ishitaPromise();
    console.log(value);
}
main();
console.log("Hi there 1");