'use strict';

/* My first program (in JavaScript) */
console.log("Hello world!"); //prints

// console.log("I hope it still isn't raining");
// console.log("hello friend!");

// const msg = "I am a variable";
// console.log(msg);

//...

// const letters = ['a', 'b', 'c'];
// console.log(letters[4]);
// letters[1] = 'capital B';
// letters[5] = 'e';
// letters.push('z');
// console.log(letters);

// console.log('40' + 2);
// console.log('forty' - 2);

// const num = 10
// const str = '10'
// const compare1 = (num == str)
// const compare2 = (num === str)

// const compare3 = ('' == 0) //empty String compare to 0
// console.log(compare3);

// const tenNum = 10;
// const tenString = '10';
// const msgArray = ["Hello", "hi"]
// const letterArray = ['a', 'b','c'];

// const numWordsObj = {1:'one', 2:'two', 3:'three'}
// const keyArray = Object.keys(numWordsObj) //[ '1', '2', '3' ]
// console.log(keyArray)

const agesObj = {sarah:42, amit:35, zhang:13};
// console.log(agesObj);

// console.log(agesObj['sarah'])
// console.log(agesObj['fred']);

// agesObj['sarah'] = 43;
// agesObj['fred'] = 19;
// console.log(agesObj);

// const dailySleepObj = {
//   day: "Monday", 
//   hoursSlept: 9
// };

// const howMuchSleep = dailySleepObj['hoursSlept'];
// console.log(howMuchSleep);

// console.log({'a': 1} + "");

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]

console.log(peopleArray);

// for(let i=0; i<peopleArray.length; i++) {
//   console.log(peopleArray[i]);
// }

for(const personObj of peopleArray) {
  console.log(personObj);
}


function greet( greeting, name){
  return greeting  + ", " + name;
}
