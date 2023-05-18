import React, {useState} from 'react';

import { Routes, Route, Outlet } from 'react-router-dom';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelList.js';
import { ChatPane } from './ChatPane.js';

import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

import INITIAL_HISTORY from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //initially null;

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

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <Routes>

        <Route path="chat" element={<RequireAuth currentUser={currentUser}/> } >

          <Route index element={
            <ChatPage 
              currentUser={currentUser} 
              messageArray={messageStateArray}
              howToAddAMessage={addMessage}
            />
          } />

          <Route path=":whichChannel" element={
            <ChatPage 
              currentUser={currentUser} 
              messageArray={messageStateArray}
              howToAddAMessage={addMessage}
            />
          } />

        </Route>
        
        <Route path="signin" element={
          <SignInPage currentUser={currentUser} howToChangeUser={loginUser} />
        }/>

        <Route index element={<Static.WelcomePage />} />
        <Route path="about" element={<Static.AboutPage /> } />
      </Routes>
      {/* <Static.ErrorPage /> */}

    </div>
  );
}

function RequireAuth(props) {
  //...determine if user is logged in
  if(props.currentUser.userId === null) { //if no user, say so
    return <p>Forbidden!</p>
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}

export default App;