// let x: number =1;
//  console.log(x);

// function greet(firstName:string){
//     console.log("Hello " + firstName);

// }
// greet("Sahil")


//how can we explicitly define what does this function return 
//but even without doing it automaically deduce it return type to number due to type infernce
// function sum(a:number,b:number):number{
//     return a + b;
// }
// const ans = sum(1,2);
// console.log(ans);

// function isLegal(age:number):boolean{
//     if(age>18){
//         return true;
//     }else{
//         return false;
//     }
// }
// const value = isLegal(20);
// console.log(value);


// function runAfter1S(fn:()=>void){
//     setTimeout(fn,1000);
// }


// runAfter1S(function(){
//     console.log("Hi there");
// })

// interface User{
//     firstName:string,
//     lastName:string,
//     age:number
//     email?:string;
// };

// function isLegal(user:User){
   
//     if(user.age>18){
//         return true;
//     }else{
//         return false;
//     }
// }
// function greet(user:User){
//     console.log("Hi there "+ user.firstName);
// }

// isLegal({
//     firstName:"sahil",
//     lastName:"Singh",
//     age:20
// })
// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }
// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }
type NumberArr = number[];
function maxValue(arr:NumberArr){
let max = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>max){
        max = arr[i];
    }
    return max;
    
}


}
interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));