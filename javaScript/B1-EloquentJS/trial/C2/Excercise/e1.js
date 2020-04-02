//Q1: non optimised.
console.log("1. Triangle \n")
for ( let outterLoop=1; outterLoop<=7; outterLoop++){
    for(let innerLoop=0; innerLoop<outterLoop; innerLoop++){
        console.log("#");
    } 
    console.log('\n')
}

//Q1: optimised.
console.log("1. Optimised sol.")
let hash='';
for(let loop=0; loop<7; loop++){
    hash = hash + '#';
    console.log(hash+'\n')
}

console.log('\n');
console.log('\n');

//Q2.
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

console.log('\n');

//Q2. Optimsed
console.log("2. Buzz-fizz: Optimised");
for( let optimisedNum=1; optimisedNum<=100; optimisedNum++){
    if(optimisedNum%15===0){
        console.log("Fizz-Buzz");
    } 
    else if(optimisedNum%3===0){
        console.log("Fizz\n");
    }
    else if(optimisedNum%5===0){
        console.log("Buzz\n");
    }
    else{
        console.log(optimisedNum);
    }
    
}

console.log('\n');

//Q3. 
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

console.log('\n');

//Q3. Optimised.
console.log("3. Chessboard");
let size=8;
for (let i=0; i<size; i++){
    for(let j=0; j<size; j++){
        if((i+j)%2 == 0){
            console.log("#");
        }
        else{
            console.log(" ")
        }
    }
}

//something wrong with the code.