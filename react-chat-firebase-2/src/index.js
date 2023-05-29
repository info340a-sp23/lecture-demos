import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'

import App from './components/App';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYqMuasbRvW6xX0WKGrkjvQf7I3dU9WMw",
  authDomain: "react-chat-sp23-df381.firebaseapp.com",
  databaseURL: "https://react-chat-sp23-df381-default-rtdb.firebaseio.com",
  projectId: "react-chat-sp23-df381",
  storageBucket: "react-chat-sp23-df381.appspot.com",
  messagingSenderId: "258928143341",
  appId: "1:258928143341:web:c709be58eadfb5005ad5e4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>    
);