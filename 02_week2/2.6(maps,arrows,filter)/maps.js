//given an array give me back a new array in which every value
//is multiplid by 2
//{1,2,3,4,5}
//[2,4,6,8,10]
//norwal way to approach this question
const input = [ 1,2,3,4,5];
const newArray = [];
for(let i = 0;i<input.length;i++){
    newArray.push(input[i]*2);
}
console.log(newArray);
//another way to solve a problem
  function transformation(i){
    return i*2;
  }
 const ans = input.map(transformation);
 console.log(ans);
  //we use map whenever we are told to transform array
  const sol = input.map((i)=>{
    return i *4;
  });
  console.log(sol);
