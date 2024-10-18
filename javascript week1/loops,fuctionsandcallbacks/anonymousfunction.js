function sumofsomething(a,b,fn){
    const num1 = fn(a);
    const num2 = fn(b);
    return num1 + num2;
   
}
const ans= sumofsomething(7,7,function(a){
    return a*a;
});
console.log("The solution is "+ ans);

