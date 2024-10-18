const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword ="123456";
const app = express();
app.use(express.json());
const All_USERS =[
    {
    username:"harkikat@gmail.com",
    password: "123",
    name:"harkikat singh",
},
{
username:"raman@gmail.com",
password: "123464",
name:"Raman singh",
},
{   
    username:"kunalt@gmail.com",
    password: "123789",
    name:"Kunal singh",
    },
];

function userExists(username,password){
    //write a logic to return true or false if user exist
    //in All_USERS array
    let userExists = false;
   for(let i = 0;i<All_USERS.length;i++){
    if(All_USERS[i].username == username && All_USERS[i].password==password){
        userExists = true;
    }
   }
   return userExists;
}
app.post("/signin",(req,res)=>{
const username = req.body.username;
const password = req.body.password;

if(!userExists(username,password)){
     return res.status(403).json({
        msg:"users doesn't exist in our Database"
     });
}
var token = jwt.sign({username: username},jwtpassword);//this is the function ie encrypting or tokenising
return res.json({
    token,
});
});


app.get("/users",(req,res)=>{
    const token = req.headers.authorization;
    const decoded = jwt.verify(token,jwtpassword);
     const username = decoded.username;
    // try{
    //   const decoded = jwt.verify(token,jwtpassword);
    //   const username = decoded.username;
    //   //return a list of users other than this username
    // }catch(err){
    //     return res.status(403).json({
    //         msg:"Invalid token",
    //     });
    // }
    res.json({
       users: All_USERS.filter((value)=>{
            if(value.username == username){
                return false;
            }else{
                return true;
            }
       })
    });

});
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});