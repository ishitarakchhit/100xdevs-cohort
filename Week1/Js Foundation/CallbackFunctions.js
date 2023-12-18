function sum(a, b, funcToCall){
    const result = a+b;
    funcToCall(result);
}

function displayResult(data){
    console.log("The sum is: " + data);
}

const value = sum(10, 28, displayResult);     //passing function as argument: callback function


//setinterval and set time out
function func(){
    console.log("Hello");
}

setTimeout(func, 1*1000);
setInterval(func, 2*1000);