function findsum(n){//function is the keyword
    let ans = 0;
    for(let i = 0;i<=n;i++){
        ans = ans + i;
    }
    return ans;
}
const value = findsum(50);
console.log(value);