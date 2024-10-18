function findsum(n){
    let ans = 0; 
    for (let i = 0; i <n; i++) {
        ans = ans + i;
        
    }
    return ans;
}
function findsumtill100(){
    console.log(findsum(100));
}

 setTimeout(findsumtill100,1000);
console.log("hello world");
//in asynchronous function your async task get delegated to your web api or os
//and your delegated task waits until we below statement are executed
//async ffunction 1) fs,readFile 2)Fetch3)setTimeout