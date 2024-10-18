const express = require("express");
const app = express();
function isoldEnough(age){
    if(age>=14){
        return true;
    }else{
        return false;
    }
}
function isoldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>=14){
       next();
    }else{
        res.status(411).json({
            msg:"sorry you are not of age yet " 
         });
    }
}
app.use(isoldEnoughMiddleware());
app.checkout("/ride",()=>{
    
    res.json({
       msg:"you have sucessfully riden ride 1 " 
    });

});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
})