// setTimeout(1000).then(function(){
// })
// readfile().then(function(b){

// })
// async function main(){
//     const value = await readfile();
//     console.log(value);

// }
//promise help in avoiding callback hell
//javascript is single threaded ie at a time only one function will be excuted in sequence
//promise is a object
function fn(resolve){
    let a = 0;
    for (let i = 0; i < 100; i++) {
        a = a+ i
        
    }
    resolve(a);
}
const p = new Promise(fn);
