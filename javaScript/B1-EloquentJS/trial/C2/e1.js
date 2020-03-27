console.log("1. Triangle \n")
for ( let outterLoop=1; outterLoop<=7; outterLoop++){
    for(let innerLoop=0; innerLoop<outterLoop; innerLoop++){
        console.log("#");
    } 
    console.log('\n')
}

// Important question look for better optimised version
console.log("2. Buzz-fizz");
for( let num=1; num<=100; num++){
    if(num%3!==0 && num%5!==0){
        console.log(num + "\n");
    }
    if(num%3===0 ){
        console.log("Fizz\n");
    }
    if(num%5===0 ){
        console.log("Buzz \n");
    }
    if(num%15===0){
        console.log("FizzBuzz \n");
    }
   
}

console.log("\n3. Chessboard");
let flag=0;
for(let oL=0; oL<8; oL++){
    if(oL%2==0){
        flag=1
    }
    for(iL=0; iL<8; iL++){
        if(flag==1){
            console.log(" ");
        }
    }
}