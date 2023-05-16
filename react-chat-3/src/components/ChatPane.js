import React, { useState } from 'react';
import _ from 'lodash';

import { ComposeForm } from './ComposeForm.js';

export function ChatPane(props) {
  const currentChannel = props.currentChannel;
  const messageArray = props.messageArray;
  const addMessage = props.addMessageCallback;
  const currentUser = props.currentUser;


  //RENDERING: what do we look like?

  //data: an array of messages [{}]
  const messageObjArray = messageArray
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

  const messageToShow = (messageItemArray.length === 0 && 
  <p>No messages found</p>)

  return (
    <> {/* fake div */}
      <div className="scrollable-pane pt-2 my-2">
        {/* conditional rendering */}
        { messageItemArray.length === 0 && 
          <p>No messages found</p> 
        }

        {messageItemArray}
      </div>

      <ComposeForm 
        currentUser={currentUser}
        currentChannel={currentChannel}
        howToAddAMessage={addMessage} />
    </>
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