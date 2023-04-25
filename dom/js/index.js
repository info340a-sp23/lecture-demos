'use strict';

const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "Lil Nas X", title: "MONTERO (Call Me By Your Name)", youtubeUrl: "https://www.youtube.com/watch?v=6swmTBVI83k"
  }
];

/* Looping review */

// const firstSong = songArray[0];
// // console.log(firstSong);
// const listOfProperties = Object.keys(firstSong);
// // console.log(listOfProperties);

// for(let i=0; i<songArray.length; i=i+1){
//   const aSongObj = songArray[i];
//   //...
// }

// for(const aSongObj of songArray){
//     //...
// }

// songArray.forEach(function(aSongObj, i){
//   //...
// })

// const newArray = songArray.map(function(aSongObj){
//   return //some other value
// })

//referencing elements
const h1Elem = document.querySelector('h1');
console.log(h1Elem);

// const elem = document.querySelector('.dataSection');
// console.log(elem);

h1Elem.textContent = "I'm written by JavaScript!";

const imgElem = document.querySelector('#puppySection img');
imgElem.src = "img/husky.jpg";
imgElem.alt = "A grown husky";

const headerElem = document.querySelector('header');
headerElem.classList.add('p-3');

//new elements
const newLiElem = document.createElement('li');
newLiElem.textContent = "Beatles - Eleanor Rigby";
// console.log(newLiElem);

const songListElem = document.querySelector('#dataSection ol');
songListElem.appendChild(newLiElem);

function renderSongListItem(aSongObj){
  const aElem = document.createElement('a');
  aElem.href = aSongObj.youtubeUrl;
  aElem.textContent = aSongObj.artist + ' - '+ aSongObj.title;

  const liElem = document.createElement('li');
  liElem.appendChild(aElem);
  return liElem;
}

const result = renderSongListItem(songArray[0]);

function renderWholeSongList() {
  songListElem.innerHTML = ''; //replace all content with ""

  for(const aSongObj of songArray){
    const liElem = renderSongListItem(aSongObj);
    songListElem.appendChild(liElem);
  }  
}


//interactivity
//a state variable
let nowShowingPuppy = true;

// function renderPuppyImage() {
//   if(nowShowingPuppy){
//     const puppyImage = document.createElement('img');
//     puppyImage.src = "img/husky.jpg";
//     puppyImage.alt = "a grown puppy";
//   }
// }

const puppyButton = document.querySelector('#puppySection button');
puppyButton.addEventListener('click', function(event) {
  // console.log("You clicked me!");
  // console.log(event.target);

  nowShowingPuppy = !nowShowingPuppy; //change the state

  //choose what to show
  if(nowShowingPuppy) { //currently showing
    imgElem.classList.remove('d-none');
    puppyButton.textContent = "Hide";
  }
  else { //not showing
    imgElem.classList.add('d-none');
    puppyButton.textContent = "Show";
  } 

  // if(nowShowingPuppy) { //currently showing, so hide
  //   imgElem.classList.add('d-none');
  // }
  // else { //not showing, so show
  //   imgElem.classList.remove('d-none');
  //   nowShowingPuppy = true;
  // } 
});

const addSongButton = document.querySelector('#formSection button');

addSongButton.addEventListener('click', function(event){
  event.preventDefault();

  //update the data
  //example
  const exampleSong = {artist: 'Example', title: 'Example Title'}
  songArray.push(exampleSong);

  //re-render the list
  renderWholeSongList();

});



