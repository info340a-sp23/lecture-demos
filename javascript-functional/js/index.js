'use strict';

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);


function sortByHeightFunction(personA, personB) {
  if(personA.height < personB.height) {
    return -1; //person A is shorter, so they come first
  } else if(personB.height < personA.height) {
    return 1; //person B is shorter, so they come first 
  } else {
    return 0;
  }
}

peopleArray.sort(sortByHeightFunction);
// console.log(peopleArray);
// console.log(peopleArray.join(", "))

// const printName = function(item) {
//   console.log(item.name);
// }

// peopleArray.forEach(function(item) {
//   console.log(item.name);
// });

// for(const item of peopleArray) {
//   console.log(item.name);
//}

const convertObjIntoString = function(personObj){
  const transformed = personObj.name;
  return transformed;
}

const peopleNames = peopleArray.map(function(personObj){
  const transformed = personObj.name;
  return transformed;
});
console.log(peopleNames);

const peopleGreetings = peopleNames.map(function(aName){
  const transformed = "Hi "+aName+"!";
  return transformed;
});
console.log(peopleGreetings);

const tallPeople = peopleArray.filter(function(personObj) {
  const shouldKeep = personObj.height > 70;
  return shouldKeep;
})
console.log(tallPeople);


//errors
// const obj = {}
// obj.map(convertObjIntoString);

const message = "hello world";

// const myFunction = function(person) {
//   console.log("Hello, "+person);
// }

// myFunction("class");


//named function
function sayHello(person){ 
  console.log("Hello, "+person); 
}

function sayGoodbye(person){
  const msg = "Goodbye, "+person
  console.log(msg);
}

function greet(greeting, person){
  console.log(greeting + " " + person);
}

//function literal (anonymous function, a value)
// const sayHello = function(person) {
//   console.log("Hello, "+person);
// }

function doWithWorld(aFunction) {
  aFunction("world");
}

// doWithWorld(sayHello);
// doWithWorld(sayGoodbye);
// doWithWorld(greet);


// console.log( Math.sqrt(3) )

function doTogether(firstCallback, secondCallback){
  firstCallback();  //execute the first function
  secondCallback();  //execute the second function
  console.log('at the "same time"!');
}

function patHead() {
  console.log('pat your head');
}

function rubBelly() {

  const howToBelly = function(){
    console.log("this is my belly");
  }

  return howToBelly;
  // return console.log("rub your belly")
}

// const result = rubBelly();
// console.log(result);
// doTogether(patHead, rubBelly);


