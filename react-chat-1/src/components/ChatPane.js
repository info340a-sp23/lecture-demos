import React from 'react';

import CHAT_HISTORY from '../data/chat_log.json';

export function ChatPane(props){
  //have: [{}{}{}]
  //console.log(CHAT_HISTORY);

  //want: [<><><>]
  const messageItemArray = CHAT_HISTORY.map((chatObj) => {
    
    if(chatObj.channel === props.currentChannel){
      const elem = <MessageItem 
              messageData={chatObj}
              key={chatObj.timestamp} 
              />
      return elem;
    } else {
      return null;
    }

  })

  return (
    <div>
      {messageItemArray}
    </div>
  )
}

function MessageItem(props) {
  // console.log(props);
  const messageData = props.messageData;
  const {userName, userImg, text} = messageData;

  //const {imgUrl, userName, message} = props;
  // const imgUrl = props.imgUrl;
  // const userName = props.userName;
  // const messageText = props.message;

  return (
    <div className="message d-flex mb-3">
      <div className="me-2">
        <img className="avatar" src={userImg} />
      </div>
      <div>
        <p className="username">{userName}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}