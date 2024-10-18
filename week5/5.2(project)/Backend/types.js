const zod = require("zod");
/*
{
title:string,
description:string,
}
{
 id:string
}
*/
//this how we create zod schema for validation
// function validateInput(obj){
//     const  schema = zod.object({
//      email: zod.string().email(),
//      password:zod.string().min(8),
//     });
// }
const createTodo = zod.object({
    title :zod.string(),
    description:zod.string(),
});
const updateTodo = zod.object({
    id: zod.string(),
});
module.exports  = {
    createTodo: createTodo,
    updateTodo: updateTodo
};