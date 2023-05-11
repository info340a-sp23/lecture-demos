import React from 'react';

import { ComposeForm } from './ComposeForm.js';

import INITIAL_HISTORY from '../data/chat_log.json'

export function ChatPane(props) {

  //data: an array of messages [{}]
  const messageObjArray = INITIAL_HISTORY
    .sort((m1, m2) => m2.timestamp - m1.timestamp); //reverse chron order


    
  //content [<MessageItem>]
  const messageItemArray = messageObjArray.map((chatObj) => {
    if(chatObj.channel === props.currentChannel){
      const elem = <MessageItem 
              messageData={chatObj}
              key={chatObj.timestamp} 
              />
      return elem; //put it in the new array!
    } else {
      return null; //don't include message
    }
  });


  return (
    <div className="scrollable-pane">
      <div className="pt-2 my-2">
        <button className="btn btn-success">Click me!</button>
        <p>You clicked me 0 times</p>
      </div>
      <hr/>

      {/* Messages */}
      {messageItemArray}
      <ComposeForm />
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
