function calculate(a,b,arithmeticfinalfunction){
      const ans = arithmeticfinalfunction(a,b)
      return ans;
}
function sum(a,b){
    return a+b;
}
 
 const value = calculate(10,2,sum);
console.log(value);
