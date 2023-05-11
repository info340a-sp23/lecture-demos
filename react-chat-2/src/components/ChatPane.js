import React, { useState } from 'react';

import { ComposeForm } from './ComposeForm.js';

import INITIAL_HISTORY from '../data/chat_log.json'

export function ChatPane(props) {

  const [clickCount, setClickCount] = useState(340);
  const [numArray, setNumArray] = useState([]);
  // console.log(numArray);
  console.log("rendering Chatpane with clickCount", clickCount);
  const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY); 

  const addMessage = function(userId, userName, messageText, channel) {

    const newMessage = {
      "userId": userId,
      "userName": userName,
      "userImg": "/img/"+userName+".png",
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }
    const newArray = [...messageStateArray, newMessage];
    setMessageStateArray(newArray);    

  }

  // const stateResultArray = useState(340) //argument is starting value
  // const currentClickCount = stateResultArray[0];
  // const setCurrentClickCount = stateResultArray[1];


  const handleClick = function(event) {
    console.log("You clicked me!");
    setClickCount(clickCount+1); //change the value in RAM
    // console.log(clickCount);

    // const newArray = [...numArray, clickCount];
    // setNumArray(newArray);

    addMessage("penguin", "Penguin", clickCount, "general");


  }

  //data: an array of messages [{}]
  const messageObjArray = messageStateArray
    .sort((m1, m2) => m2.timestamp - m1.timestamp); //reverse chron order

  const channelMessages = messageObjArray.filter((msgObj) => {
    return msgObj.channel === props.currentChannel;
  })
    
  //content [<MessageItem>]
  const messageItemArray = channelMessages.map((chatObj) => {
      const elem = <MessageItem 
              messageData={chatObj}
              key={chatObj.timestamp} 
              />
      return elem; //put it in the new array!
  });

  //if no messages, component "looks like" a paragraph
  if(messageItemArray.length === 0){
    return <p>No messages yet!</p>
  }

  return (
    <div className="scrollable-pane">
      <div className="pt-2 my-2">
  {/* button.addEventListener('click', handleClick) */}
        <button 
          onClick={handleClick} 
          className="btn btn-success">Click me!</button>
        <p>You clicked me {clickCount} times</p>
      </div>
      <hr/>

      {/* Messages */}
      {messageItemArray}
      <ComposeForm howToAddAMessage={addMessage} />
    </div>
  )
}

function MessageItem(props) {
  const messageData = props.messageData;
  const {userName, userImg, text} = messageData;

  let buttonColor = "grey";

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button">
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}
