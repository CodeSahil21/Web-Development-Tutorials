const express = require("express");
const zod = require("zod");
const app = express();
const schema = zod.array(zod.number());
/*
email : string=>email
passwords : atleast 8 letters
country : "IN","US"
how will we write zod schema for this

*/
// const schema = zod.object({
//   email : zod.string(),
//   password : z.string(),
//   country : z.literal("IN").or(z.literal("US"))
// });

app.use(express.json());
app.post("/health-checkup",(req,res)=>{
  //user gives array of kidneys = [1,2]
  const kidneys = req.body.kidneys;//taking input to body parameter
  const response = schema.safeParse(kidneys);
if(!response.success){
  res.status(403).json({
msg :"input is invalid "
  });
}else{
  res.send({
     response 
           });
}
});
// //global catches : used when our server is down and also known as erro handling  middleware
// app.use((err,req,res,next)=>{
// res.json({
//   msg:"Sorry something is up with our server"
// });
// });
app.listen(3000,()=>{
console.log("Server running on port 3000");
});
