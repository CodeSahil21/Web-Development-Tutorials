import { Hono } from 'hono'
import { Prisma, PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {decode,sign,verify} from 'hono/jwt'
import z from "zod";
import { signupInput } from '@ravencraft/medium-post';
export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string;
    }
}>();
  

userRouter.post('/signup',async (c) =>{
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message:"Inputs not correct"
        }); 
        return
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
   try {
    const user = await prisma.user.create({
      data:{
       username:body.username,
        password:body.password,
        name:body.name
      }
    });
    const jwt = await sign({
     id:user.id
    },c.env.JWT_SECRET);
   
    return c.text(jwt);
  
  }catch(e){
    c.status(411);
    console.log(e);
    return c.text("Invalid or user already exists");
  }
   
  });
  
  userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
   try {
    const user = await prisma.user.findFirst({
      where:{
        username:body.username,
        password:body.password,
      } 
    });
    if(!user){
      c.status(403);//unauthorized
      return c.json({
        message:"Incorrect creds"
      });
    }
    const jwt = await sign({
     id:user.id
    },c.env.JWT_SECRET);
   
    return c.text(jwt);
  
  }catch(e){
    c.status(411);
    console.log(e)
    return c.text("Invalid inputs");
  }
  });