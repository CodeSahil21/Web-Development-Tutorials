const express = require("express");

const app =  express();
app.get("/health-cheacker",(req,res)=>{
    //do health health checkup
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;

    if(username != "Sahil"  && password != "PASS"){
        res.status(400).json({"msg":"Somethings up with your input"});
        return
    }
    if(kidneyID != 1 && kidneyID !=2){
        res.status(400).json({
            msg : "Somethings up with your input"
        });
      return
    }
    //do some thing with kidney
    res.json({
        msg : "your Kidney is fine"
    })

    
});
app.listen(3000,()=>{
    console.log("Server is running on port 30000");
});