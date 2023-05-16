import React, { useState } from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelList.js';
import { ChatPane } from './ChatPane.js';
import * as Static from './StaticPages.js';

import _ from 'lodash';

import INITIAL_HISTORY from '../data/chat_log.json'

function App(props) {
  const [currentChannel, setCurrentChannel] = useState("general")
  const [showChatPage, setShowChatPage] = useState(false)

  const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY); 

  const [currentUser, setCurrentUser] = useState({userId: null, userName: null, userImg: '/img/null.png'}); //initially null;



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

  const loginUser = (newUserObj) => {
    setCurrentUser(newUserObj);
  }

  const handleClick = (event) => {
    console.log("click");
    setCurrentChannel("random"); //puts "random" into the storage
    //and it re-renders
    // setShowChatPage(!showChatPage);
  }



  console.log("rendering App with", currentChannel);

  const channelNames = ["general", "social", "random", "birds", "dank-memes"];
  // console.log("random channel", _.sample(channelNames));

  const channelCounts = _.countBy(messageStateArray, 'channel')




  return (
    <div className="container-fluid d-flex flex-column">
      <button onClick={handleClick}>change channel</button>
      <HeaderBar currentUser={currentUser} howToChangeUser={loginUser} />

      {/* ChatPage */}
        <div className="row flex-grow-1">
          <div className="col-3">
            <ChannelList channelNames={channelNames} currentChannel={currentChannel} channelCounts={channelCounts} />
          </div>
          <div className="col d-flex flex-column">
            <ChatPane 
              currentUser={currentUser}
              currentChannel={currentChannel} 
              messageArray={messageStateArray}
              addMessageCallback={addMessage} />
          </div>
        </div>

        {/* <Static.AboutPage /> */}
    </div>
  );
}

export default App;