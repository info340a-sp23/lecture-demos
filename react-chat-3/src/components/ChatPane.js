import React, { useState } from 'react';

import { ComposeForm } from './ComposeForm.js';

import INITIAL_HISTORY from '../data/chat_log.json'

export function ChatPane(props) {
  const currentChannel = props.currentChannel;

  const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY); 

  //STATE MANAGEMENT: how do we change?
  const addMessage = function(userObj, messageText, channel) {
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }
    const newArray = [...messageStateArray, newMessage];
    setMessageStateArray(newArray); //update state & re-render
  }

  //RENDERING: what do we look like?

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

  return (
    <> {/* fake div */}
      <div className="scrollable-pane pt-2 my-2">
          {/* conditional rendering */}
          { messageItemArray.length === 0 && 
            <p>No messages found</p>
          }

          {messageItemArray}
        </div>

        <ComposeForm currentChannel={currentChannel} howToAddAMessage={addMessage} />
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