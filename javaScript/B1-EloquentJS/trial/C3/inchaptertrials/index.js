console.log("hey");
const sq = function(x) {
    return x * x;
}
console.log(sq(2));

const noise = function(){
    console.log("Pling!");
}
noise();

const scopetest = function(){
   let letScope = 20;
   var varScope = 30;
   console.log("value of let inside", letScope);
   console.log("value of var inside", varScope);
}
scopetest();
//console.log("value of let outside", letScope);
//console.log("value of var outside", varScope);


let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}
console.log(x + z);
//how did z get in scope at line 29. 