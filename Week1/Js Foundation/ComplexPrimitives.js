const ages = [19, 20, 22, 34, 69, 10, 17];

// to print all even ages
console.log("Printing all even ages:")
for(let index = 0; index< ages.length; index ++){
    if(ages[index] %2 == 0){
        console.log(ages[index]);
    }
}

//to print the biggest number of this array
let biggest = ages[0];
for(let index= 1; index<ages.length; index++){
    if(biggest < ages[index]){
        bigges = ages[index];
    }
}
console.log("The biggest age is: "+ biggest);

//to create an object
const user1 = {
    firstName: "Ishita", 
    age: 20
};

console.log(user1["firstName"]);

//to create an array of objects
const allUsers = [{
    firstName: "Ishita",
    gender: "Female"
}, {
    firstName: "Zen", 
    gender: "Male"
}, {
    firstName: "Riya",
    gender: "Female"
}, {
    firstName: "Rohit",
    gender: "Male",
    metadata: {
        age: 23,
        profession: "Engineer"
    }
}];

//to print firstname of all male users
for(let index = 0; index<allUsers.length; index++){
    if(allUsers[index]["gender"] == "Male"){
        console.log(allUsers[index]["firstName"]);
    }
}


//to reverse all elements of an array ages
let lIndex = 0;
let rIndex = ages.length-1;
while(lIndex < rIndex){
    let temp = ages[lIndex];
    ages[lIndex] = ages[rIndex];
    ages[rIndex] = temp;
    lIndex++;
    rIndex--;
}

//to print the ages array
for(let i=0; i<ages.length; i++){
    console.log(ages[i]);
}
