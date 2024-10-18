function kiratasyncFunction(){
    let p = new Promise(function(resolve){
        //do some async logic
        setTimeout(function(){
            resolve("hi there")
        },1000)
    });
    return p;
}
async function main(){
    const value = await kiratasyncFunction()
;
console.log(value);
}
main();
// we avoid using dot(.) using two keywords await and writing  async before function