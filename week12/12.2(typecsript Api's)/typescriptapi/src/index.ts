// interface User{
//     name:string;
//     age:number;
// }

// function sumOfAge(user1:User,user2:User){
//     return user1.age+user2.age;
// }

// const age = sumOfAge({name:'Sahil',age:19},{name:'Raven',age:30});
// console.log(age);//49

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     createdAt: Date;
//   }
  
//   // For a profile display, only pick `name` and `email`
//   type UserProfile = Pick<User, 'name' | 'email'>;
  
//   const displayUserProfile = (user: UserProfile) => {
//     console.log(`Name: ${user.name}, Email: ${user.email}`);
//   };
  
// interface User {
//     id: string;
//     name: string;
//     age: string;
//     email: string;
//     password: string;
// };

// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// type UpdatePropsOptional = Partial<UpdateProps>

// function updateUser(updatedProps: UpdatePropsOptional) {
//     // hit the database tp update the user
// }
// updateUser({}) 

// interface Config {
//     readonly endpoint: string;
//     readonly apiKey: string;
//   }
  
//   const config: Readonly<Config> = {
//     endpoint: 'https://api.example.com',
//     apiKey: 'abcdef123456',
//   };
  
  // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

  