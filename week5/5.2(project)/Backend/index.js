const express =  require("express");
const {createTodo,updateTodo} = require("./types");
const { todo } = require("./db");
const cors = require("cors");
// 
const app = express();
//write the basic express boilerplate code,
//with express.json() middleware
app.use(express.json()); 
app.use(cors())
//body{
//title:string
//description:string
//}
app.post("/todo",async function(req,res){
const createPayload = req.body;
const parsedPayload = createTodo.safeParse(createPayload);
if(!parsedPayload.success){
    res.status(411).json({
        msg:"You sent the wrong inputs "
    })
    return;
}
//put it in mongo:we put await because sometimes databse can be down
 await todo.create({
    title: createPayload.title,
    description:createPayload.description,
    completed: false
});
res.json({
    msg:"Todo created"
});


});
app.get("/todos",async function(req,res){
    const todos = await todo.find({});  //we put condition if we want something specific
    // it takes time to gather data from databases 
    res.json({
 todos
    });


});
app.put("/completed",async function(req,res){
 const updatePayload = req.body;
 const parsedPayload =  updateTodo.safeParse(updatePayload);
 if(!parsedPayload.success){
    res.status(411).json({
        msg:"You sent the wrong inputs "
    })
    return;
}
//todo.update expects two arguments ie where do we have update and what do you have to update in that todo
await todo.update({
    //in moongose table every object is uniquely identified by some _id  which is automatically assigned to them
    _id: req.body.id,
},{
    completed: true
});
res.json({
  msg:"Todo marked as completed"  
})
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
