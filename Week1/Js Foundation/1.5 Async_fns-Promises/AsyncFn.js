function findsum(n){
    let sum  = 0;
    for (let index = 0; index <= n; index++) {
        sum+= index;        
    }
    return sum;
}

function findSumTill100(){
    console.log(findsum(100));
}
//async call
//setTimeout(findSumTill100, 1000);
//sync call
findSumTill100();
console.log("hello world");
