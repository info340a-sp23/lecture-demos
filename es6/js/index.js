'use strict';

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);

const foo = () => {
  return 'foo ';
}

const bar = (param1) => 'bar '+param1+' '+param2;

console.log(foo("world", "earth"));

const myObject = {a: 1, b: 2, c: 3, d: 4};
const {c, b, a} = myObject; //myObject.a to a, etc.
console.log(a); //=> 1
console.log(b); //=> 2;
console.log(c); //=> 3;

const dimensions = [10, 20, 30, 40];
const [width, height, ...everythingElse] = dimensions 
console.log(width);  //=> 10
console.log(height); //=> 20
console.log(everythingElse);


//... means "copy and paste the contents of"
const person = {name: 'Ada', height: 64, weight: 135}
const anotherPerson = {...person, pronouns: "they/them"};
console.log(anotherPerson);

const otherPerson = {
  name: person.name,
  height: person.height,
  weight: person.weight,
  pronouns: 'they/them'
}

const numArray = [1,2,3,4];
const moreNumArray = [...numArray, 5]; //add element to array
