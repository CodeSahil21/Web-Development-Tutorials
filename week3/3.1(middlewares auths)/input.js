const express = require("express");
const app = express();

app.post("/health-checkup",(req,res)=>{
  //user gives array of kidneys = [1,2]
  const kidneys = req.body.kidneys;//taking input to body parameter
  const KidneyLength = kidneys.length;
  res.send("your kidney length is " + KidneyLength);
});
//global catches : used when our server is down and also known as erro handling  middleware
app.use((err,req,res,next)=>{
res.json({
  msg:"Sorry something is up with our server"
});
});
app.listen(3000,()=>{
console.log("Server running on port 3000");
});
// we need input validation because user can send any input it is our responsibilty to validate it as without  user input validation it will
// break the server,modules  and expose to the user

