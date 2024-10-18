import {Hono} from 'hono';
import { Prisma, PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {decode,sign,verify} from 'hono/jwt'
export const postRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string;
    };

    Variables:{
        userId:string;
    };
}>();

postRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("Authorization") || "";
    
    try {
      const user = await verify(authHeader, c.env.JWT_SECRET) ;
    //   console.log("Decoded user:", user);
      if (user) {
        c.set("userId", user.id as string );
        await next();
       }// else {
      //   c.status(403);
      //   return c.json({
      //     message: "You are not logged in",
      //   });
      // }
    } catch (e) {
        console.log(e)
      c.status(403);
      return c.json({
        message: "You are not logged in",
      });
    }
  });
//to create a blog or post
postRouter.post('/', async(c) => {
    const body = await c.req.json();
    const  authorId = c.get("userId") as string;
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

   try{const post =  await prisma.post.create({
        data :{
            title: body.title,
            content:body.content,
            authorId:authorId// As long as authorId is a string, no need to parse if it was number:parseInt(authorId)
        }
    })

    return c.json({
       id:post.id   
    })}catch(e){
        console.log(e);
        c.status(411);
        return c.json({
            message:"Error while creating post"
        })
    }
  })
  //to update a blog or post
  postRouter.put('/', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

 try  { const post =  await prisma.post.update({
    where:{
        id:body.id
    },
        data :{
            title: body.title,
            content:body.content,
        }
    })

    return c.json({
       id:post.id   
    })}catch(e){
        c.status(411);
        return c.json({
            message:"Error while updating post"
        })
    }
  })

  //Todo :add  pagination
  postRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

      try{
        const posts = await prisma.post.findMany({
          select:{
            content:true,
            title:true,
            id:true,
            author: {
              select:{
                name:true}
            }
          }
        });
          
        return c.json({
         posts
        });
      }catch(e){
        c.status(411);
        return c.json({
            message:"Error while fetching the posts"
        })
    }
  })
  
  // to get a blog or post
  postRouter.get('/:id', async (c) => {
    // console.log("Request received"); // Log when the request hits this route
    // console.log("Request URL:", c.req.url); // Log the full request URL

    const id = c.req.param("id"); // Extract the parameter
    // console.log("Raw ID:", id); // Log the ID extracted from the request
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

   try{
    const post =  await prisma.post.findFirst({
    where:{
        id:id
    } ,
    select:{
      id:true,
      title:true,
      content:true,
      author:{
        select:{
          name:true}
      }
    }
        
    })
    return c.json({
       post   
    })}catch(e){
        c.status(411);
        return c.json({
            message:"Error while fetching the post"
        })
    }
  })

  

