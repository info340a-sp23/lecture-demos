import React, {useEffect, useState} from 'react';

import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database'
import { getAuth, onAuthStateChanged } from 'firebase/auth';


import { HeaderBar } from './HeaderBar.js';
import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import ProfilePage from './ProfilePage.js';
import * as Static from './StaticPages';

import INITIAL_HISTORY from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageObjArray, setMessageObjArray] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined) //initially null;

  const navigateTo = useNavigate(); //navigation hook


  //effect to run when the component first loads
  useEffect(() => {
    //log in a default user
    //loginUser(DEFAULT_USERS[0])
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUserObj) => {
      console.log("auth state changed");
      console.log(firebaseUserObj);
      if(firebaseUserObj) { //if defined
        firebaseUserObj.userId = firebaseUserObj.uid;
        firebaseUserObj.userName = firebaseUserObj.displayName;
        firebaseUserObj.userImg = firebaseUserObj.photoURL || "/img/null.png";
        setCurrentUser(firebaseUserObj);
        //navigateTo('/chat/general'); //go to chat after         
      } else {
        setCurrentUser(DEFAULT_USERS[0]);
      }
    })

  }, []) //array is list of variables that will cause this to rerun if changed

  //effect to run when the component first loads
  useEffect(() => {

    //hook up a listener to Firebase
    const db = getDatabase();
    const allMessagesRef = ref(db, "allMessages");

    //fetch message data from firebase
    onValue(allMessagesRef, (snapshot) => {
      const allMessagesObj = snapshot.val();

      if(allMessagesObj === null){
        setMessageObjArray([]); //no content
        return; //break;
      }
      
      const objKeys = Object.keys(allMessagesObj);
      const dataArray = objKeys.map((keyString) => {
        const messageObj = allMessagesObj[keyString];
        messageObj.firebaseKey = keyString;
        return messageObj;        
      })
      setMessageObjArray(dataArray); //update state & rerender
    });

  }, []) //array is list of variables that will cause this to rerun if changed

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

    const db = getDatabase();
    const allMMessagesRef = ref(db, "allMessages");
    firebasePush(allMMessagesRef, newMessageObj);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <Routes>
        <Route index element={ <Static.WelcomePage /> }/>
        <Route path="about" element={ <Static.AboutPage /> } />
        <Route path="signin" element={ <SignInPage currentUser={currentUser} loginUserFunction={loginUser} />} />

        <Route element={<ProtectedPage currentUser={currentUser} />} >
          <Route path="chat/:channelName?" element={
            <ChatPage 
              currentUser={currentUser} 
              messageArray={messageObjArray}
              howToAddAMessage={addMessage}
              />
          } />
          <Route path="profile" element={<ProfilePage currentUser={currentUser} />}/>
        </Route>
        <Route path="*" element={<Static.ErrorPage />} />
      </Routes>
    </div>
  );
}

function ProtectedPage(props) {
  if(props.currentUser === undefined){
    return <p>Loading...</p>
  }
  //...determine if user is logged in
  if(props.currentUser.userId === null) { //not undefined
    return <Navigate to="/signin"/>
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}

export default App;