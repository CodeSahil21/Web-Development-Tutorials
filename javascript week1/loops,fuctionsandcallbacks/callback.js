// step 1-we can call one function inside another function 
//find the square of the input
// function square(n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }
// //find the sumof the squares of the inputs
// function sumofthesquare(a,b){
//     const num1 = square(a);
//     const num2 = square(b);

//     return num1 +num2;

// }
// // this violating  dry rule ie function of above and below are repeated and have same structure
// function sumofthecube(a,b){
//     const num1 = cube(a);
//     const num2 = cube(b);

//     return num1 +num2;

// }
// console.log(sumofthesquare(2,4));
// console.log(sumofthecube(2,4));   
//callbacks
function square(n){
         return n*n;
    }
    function cube(n){
       return n*n*n;
    }
    function sumofsomething(a,b,fn){
        const num1 = fn(a);
        const num2 = fn(b);
        return num1 + num2;
    }
    // const ans = sumofsomething(10,20,square);
    // console.log(ans);
     console.log(sumofsomething(4,2,cube));
  


