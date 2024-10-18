//filter
//what if i tell u,given an input array an input array,give me back all the even values from it
const array = [1,2,3,4,5];
//a simple way
const newArray = [];
for(let i = 0;i<array.length;i++){
    if(array[i]%2==0){
        newArray.push(array[i]);
    }
}
console.log(newArray);
//filter way
 const ans =  array.filter((n)=>{
    if (n % 2 == 0){
        return true;
    } else{
        return false;
    }
 });
 console.log(ans);