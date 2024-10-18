//zod is independent library usd to validate input 
const zod = require("zod");
const express = require("express");
const app = express();
app.use(express.json());
function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password : zod.string().min(8)
    }); 
    const response = schema.safeParse(obj);
   // In Zod, the safeParse method allows you to validate data without throwing an error if the validation fails. 
   //Instead, it returns an object with a success boolean property and either the validated data or the validation error. 
   //This can be particularly useful if you prefer handling validation results without using try-catch blocks.


     console.log(response);
} 



app.post("/log-in",(req,res)=>{
    const response = validateInput(req.body);
    if(!response.sucesss){
        res.json({
            msg:"your inputs are invalid"
        })
        return;
    }
  });
  app.listen(3000,()=>{
    console.log("server is running on port 3000");
  });
  //coercion means to push something
  