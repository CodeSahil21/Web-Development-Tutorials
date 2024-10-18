const dog ={
  name : "doogie",
  legcount :4,
  speaks : "bhow bhow"
}
const cat ={
  name : "Cat",
  legcount :4,
  speaks : "meow meow"
}
//animal x bhows bhows with 2 legs
// console.log("animal " + dog["name"]+ " " +dog["speaks"]);
// console.log("animal" + cat["name"]+ " " + cat["speaks"]);
function printstr(animal){
  console.log("Animal " +animal.name+ " " + animal.speaks);
}
printstr(cat);