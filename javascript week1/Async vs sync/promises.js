//promises are syntactical sugar that make this code sligthly more readable 
// ugly way to create our own asynchronous function
// //my own asynchronous function
// function kiratsReadFile(cb){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         cb(data);
//     });
// }
// //callback function to call  
// function onDone(data){
//     console.log(data);
// }
// kiratsReadFile(onDone);
//cleaner wya using promises
const fs = require('fs');
// my own asynchronous function
function kiratsreadFile2(){//function return promise
    console.log("inside kirratreadFile2");
    return new Promise(function(resolve){ //object of promise class
        console.log("inside promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("before resolve");
            resolve(data);//resolve data
        });
    })
   
}
//callback function to call
function onDone(data){
    console.log(data);
}
 kiratsreadFile2().then(onDone);//.then()send data to onDone
