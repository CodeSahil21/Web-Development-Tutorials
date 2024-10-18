 import { PrismaClient } from "@prisma/client";
 const prisma =  new PrismaClient();


//  async function insertUser( username:string,password:string,firstName:string,lastName:string){
   
//     const res = await prisma.user.create({
//         data:{
//             email:username,
//             password,
//             firstName,
//             lastName
//         }
//     ,
//     select:{
//         id:true,
//         password:true
//     }
//     });
//     console.log(res);
//  }
//  insertUser("ravencraft1920@gmail.com","password","Sahil","Singh");

//  interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }

// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//   const res = await prisma.user.update({
//     where: { email: username },
//     data: {
//       firstName,
//       lastName
//     }
//   });
//   console.log(res);
// }

// updateUser("ravencraft1920@gmail.com", {
//     firstName: "new name",
//     lastName: "singh"
// })

async function getUser(username: string) {
    const user = await prisma.user.findFirst({
      where: {
          email: username
      }
    })
    console.log(user);
  }
  
  getUser("ravencraft1920@gmail.com");