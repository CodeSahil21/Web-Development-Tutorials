function sum(num1,num2,fntocall){
    let result = num1 + num2;
  fntocall(result);
}
function displayResult(data){
    console.log("Result of the sum is : " + data );
}
function displayResultpassive(data){
    console.log("Sum's result is : " + data);
}
//you are only allowed to call one function after this
//how will you display result
const ans = sum(1,2,displayResult);
//callbacks ie passing an functionn as an argument or parameter
