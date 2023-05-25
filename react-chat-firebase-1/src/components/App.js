import React, {useEffect, useState} from 'react';

import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';

import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';

import { HeaderBar } from './HeaderBar.js';

import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

import INITIAL_HISTORY from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageStateArray, setMessageStateArray] = useState([]);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //initially null;

  const navigateTo = useNavigate(); //navigation hook

  //effect to run when the component first loads
  useEffect(() => {
    //log in a default user
    loginUser(DEFAULT_USERS[1])
  }, []) //array is list of variables that will cause this to rerun if changed

  useEffect(() => {

    const db = getDatabase();
    const allMessagesRef = ref(db, "allMessages");

    //registers the listener
    onValue(allMessagesRef, (snapshot) => {
      console.log("data is changed!");
      const dataObj = snapshot.val();
      console.log(dataObj);

      if(dataObj === null){
        return ;
      }

      const objKeys = Object.keys(dataObj);
      console.log(objKeys);
      const dataArray = objKeys.map((keyString) => {
        const messageObj = dataObj[keyString]
        messageObj.firebaseKey = keyString;
        return messageObj;
      })
      console.log(dataArray);
      setMessageStateArray(dataArray);

    })
  },[])


  const loginUser = (userObj) => {
    console.log("logging in as", userObj.userName);
    setCurrentUser(userObj);
    if(userObj.userId !== null){
      navigateTo('/chat/general'); //go to chat after login
    }
  }

  const addMessage = (userObj, text, channel) => {
    const newMessageObj = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": text,
      "timestamp": Date.now(),
      "channel": channel
    }
    // const newMessageArray = [...messageStateArray, newMessageObj];
    // setMessageStateArray(newMessageArray); //update state & rerender

    //put in the firebase database
    const db = getDatabase();
    const messageRef = ref(db, "message");
    const profRef = ref(db, "professor");
    const profNameRef = ref(db, "professor/firstName")
    const allMessagesRef = ref(db, "allMessages");

    //firebaseSet(messageRef, newMessageObj);
    firebasePush(allMessagesRef, newMessageObj);



  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <Routes>
        <Route index element={ <Static.WelcomePage /> }/>
        <Route path="about" element={ <Static.AboutPage /> } />
        <Route path="signin" element={ 
          <SignInPage currentUser={currentUser} loginUserFunction={loginUser} />} 
        />

        <Route element={<ProtectedPage currentUser={currentUser} />} >
          <Route path="chat/:whichChannel?" element={
            <ChatPage 
              currentUser={currentUser} 
              messageArray={messageStateArray}
              howToAddAMessage={addMessage}
              />
          } />
        </Route>
        <Route path="*" element={<Static.ErrorPage />} />
      </Routes>
    </div>
  );
}

function ProtectedPage(props) {
  //...determine if user is logged in
  if(props.currentUser.userId === null) { //not undefined
    return <Navigate to="/signin"/>
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}

export default App;