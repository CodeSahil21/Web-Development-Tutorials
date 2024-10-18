const fs = require('fs');
//filesystem module
//here we delegated the task to someone else to read the file
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})
console.log("This is a Message");
let a = 0;
//this take very long,longer than file read
for (let i = 0; i < 100000000; i++) {
   a++;
    
}
console.log("hello world");
// untill the thread  is idle then it will move to pending callback