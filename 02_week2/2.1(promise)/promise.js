//promise is another class in javascript out of the boxx
//it return an promise and dos not callback as input
function promisefiedMyOwnSetTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration);
    });
        
    return p;
}


const ans = promisefiedMyOwnSetTimeout(1000);
console.log(ans);//it shows promise pending
ans.then(function(){
    console.log("timeout is done");
});
///usecase of async function
//do a network call
//sleep/wait for some time
//read a file
//database call