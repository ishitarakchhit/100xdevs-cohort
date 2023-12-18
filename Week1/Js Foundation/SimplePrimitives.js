//----------greet a person with their name--------

let name = "Ishita";

console.log("Hello " + name + ", How are you?");


//---------tell if he is an adult or not
let age = 18;

if(age >=18){
    console.log (name + " is an adult.");
}
else{
    console.log(name + " is not an adult.");
}


//-------- print numbers from 1-100 and also print its sum
let sum = 0;

for(let index = 1; index < 101; index ++){
    console.log(index);
    sum = sum+ index;
}
console.log ("The sum is " + sum);

