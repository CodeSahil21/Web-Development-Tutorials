const express = require("express");//import express
const app = express(); 

const users = [{ // array of objects
    name : "Jake",
    Kidneys: [{
        healthy:false
    },{
        healthy:true
    }]
   


}]
app.use(express.json());//we will learn about it later

//query a way of input
app.get("/",function(req,res){
    //write some logic
    const JakeKidneys = users[0].Kidneys;
    const  numberofKidneys = JakeKidneys.length;
    let numberofhealthyKidneys = 0;
    for (let i = 0; i < JakeKidneys.length; i++) {
        if(JakeKidneys[i].healthy){
            numberofhealthyKidneys = numberofhealthyKidneys + 1;
        }
        
    }
    const numberofUnhealthykidneys = numberofKidneys-numberofhealthyKidneys;
    res.json({
        numberofKidneys,
        numberofhealthyKidneys,
        numberofUnhealthykidneys

    })
//body a way of input
//add healthy kidney
});
 app.post("/",function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].Kidneys.push({
       healthy: ishealthy
    });
    res.json({
        msg: "Done!"
    })
 });
 //replace unhealthy kidney with healthy kideny
app.put("/",function(req,res){
   for (let i = 0; i < users[0].Kidneys.length; i++) {
    users[0].Kidneys[i].healthy = true;
    
   } 
   res.json({});
})

app.delete("/",function(req,res) {
    const  newKidneys = [];
    for (let j = 0; j < users[0].Kidneys.length; j++) {
        if(users[0].Kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
       } 
       users[0].Kidneys = newKidneys;
       res.json({
        msg:"done"
       })
})
app.listen(3000,function(){
    console.log("Server is running on port 3000");
})