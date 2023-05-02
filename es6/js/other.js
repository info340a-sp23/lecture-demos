'use strict';

console.log("executing other.js");

const peopleArray = ["Joel", "Megha", "Henry"];
console.log("other's people:", peopleArray);

export function sayHello(){
  console.log("hello World");
}

export default function other() {
  console.log("other")
}

function sayGoodbye() {
  console.log("see you later");
}

export function sayGoodMorning() {
  console.log("good morning");
}

export {sayGoodbye as sayBye}