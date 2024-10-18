/*
1)primitives nad Referneces
In JavaScript, understanding the difference between primitive and reference data types is crucial for effective programming. Here’s a breakdown:

Primitive Data Types
Primitive data types are simple and immutable. They include:

Number: Represents both integer and floating-point numbers.
String: Represents a sequence of characters.
Boolean: Represents true or false.
Undefined: Represents a variable that has been declared but not assigned a value.
Null: Represents the intentional absence of any object value.
Symbol: Represents a unique and immutable value.
BigInt: Represents integers with arbitrary precision.
When you assign a primitive value to a variable, the value is stored directly in the variable. For example:

JavaScript

let a = 10;
let b = a;
a = 20;
console.log(a); // 20
console.log(b); // 10
AI-generated code. Review and use carefully. More info on FAQ.
In this case, a and b are independent of each other.

Reference Data Types
Reference data types are objects and arrays. They are mutable and stored as references. Examples include:

Object: A collection of properties.
Array: An ordered list of values.
Function: A block of code designed to perform a particular task.
When you assign a reference value to a variable, the reference (or address) of the value is stored, not the actual value. For example:

JavaScript

let obj1 = { name: "Alice" };
let obj2 = obj1;
obj1.name = "Bob";
console.log(obj1.name); // Bob
console.log(obj2.name); // Bob
AI-generated code. Review and use carefully. More info on FAQ.
Here, obj1 and obj2 reference the same object, so changes to one affect the other


2)differnce between let and var
a)|)es5 version of javacsript had only var but now es6 which is new version has let  and const
  ||) var function scoped hein matlab var apne parent func mein kahi bhi use ho sakta and let braced scope opposite of var
  |||)var adds itself to the window object(browser object) and let doesn't add


  In JavaScript, understanding execution context and lexical environment is key to mastering how the language handles variable scope and function execution. Here’s a detailed explanation:

Execution Context
An execution context is an abstract concept that holds information about the environment within which the current code is being executed. It includes:

Variable Object (VO): Contains function arguments, inner variable declarations, and function declarations.
Scope Chain: Consists of the current variable object and the variable objects of all its parent execution contexts.
this: Refers to the object that is currently executing the code.
There are three types of execution contexts:

Global Execution Context: Created when the JavaScript engine starts executing the script. It contains global variables and functions.
Function Execution Context: Created whenever a function is invoked. Each function has its own execution context.
Eval Execution Context: Created when code is executed inside an eval function.
Lexical Environment
A lexical environment is a structure that holds identifier-variable mapping. It consists of:

Environment Record: An object that stores all the variable and function declarations in the lexical environment.
Outer Lexical Environment Reference: A reference to the outer lexical environment, which allows for nested scopes.
Whenever a function is created, a new lexical environment is created. This environment is used to resolve variable and function names during the function’s execution.

Relationship Between Execution Context and Lexical Environment
Execution Context: Manages the code execution and keeps track of the current state of the code.
Lexical Environment: Manages the scope and keeps track of variable and function declarations.
When a function is invoked, a new execution context is created, and a new lexical environment is set up for that function. The lexical environment is then used to resolve variables and functions within that function’s scope123.

Here’s a simple example to illustrate:

JavaScript

function outer() {
  let outerVar = 'I am outside!';
  
  function inner() {
    let innerVar = 'I am inside!';
    console.log(outerVar); // Accesses outerVar from the outer lexical environment
  }
  
  inner();
}

outer();
AI-generated code. Review and use carefully. More info on FAQ.
In this example, the inner function can access outerVar because of the lexical environment created by the outer function.

execution conetxt is a container where the function's code is executed and it's created
whenever a function is called it contains 3 things ,variables,functions and lexical enviornment
lexical enviornment is chart  which contains scope and scope chain


4)how to copy refernce values
we copy refernce values with the help of spread operator [....a]
var a= [1,2,3,4];
var b = [...a];
we can also copy object like this


5)concept of truthy  and falsy
falsy values ye hai = 0 false undefined null NaN document.all
 6)for ecah loop sirf array pe use hota hain
 a.forEcah(function(value)){
 console.log(val+2);
 }
 forEcah kabhi apke orignal array mein change nahi kakrta wo ye operations array ke  temp copy meinhota hain
 isliye mein array mein koi changes nahi hota hain

 6(for inLoop)
 used in object
 for(var key in obj){
 console.log(key);
 }
  for(var key in obj)
 }




*/