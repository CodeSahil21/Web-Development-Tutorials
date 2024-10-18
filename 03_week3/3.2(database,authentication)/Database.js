const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtpassword = "123456";

mongoose.connect("your_mongo_url",);
const User = mongoose.model("User",{
    name: String,
    username:String,
    password:String,
});
const app = express();
app.use(express.json());
function userExists(username,password){
    //should check in the database
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