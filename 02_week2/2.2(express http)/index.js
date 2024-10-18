const express = require("express")
const bodyParser = require("body-parser");
const port = process.env.POST || 3000
// to host on local machine
const app = express();
app.use(express.json());
/*
app.get("/route-handler",function(req,res){
//req(request) contains -headers,body,query,parameters
 // res (response)
res.send("hello world");
res.json({
    name : "harkikat",
    age : 21
})
})
*/ 
app.get('/', function(req, res)  {
  res.send("hello world")
})
app.post('/', function(req, res)  {
  const messsage = req.body.message;
  console.log(message);
  //machine learning thing
    res.json({
      output : "2 + 2 = 4"
    })
  })


app.listen(port)
