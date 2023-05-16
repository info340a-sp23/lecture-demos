import React, { useState } from 'react';

export function ComposeForm(props) {
  const currentChannel = props.currentChannel;
  const addMessageFunction = props.howToAddAMessage;

  const [inputtedText, setInputtedText] = useState('');

  //submission
  const handleClick = (event) => {
    const userObj = { userId: "parrot", userName: "Parrot", userImg: "/img/Penguin.png" }

    addMessageFunction(userObj, inputtedText, currentChannel);   
    setInputtedText('');
  }

  //typing
  const handleChange = (event) => {
    const value = event.target.value;
    setInputtedText(value);
  }

  return (
    <form className="my-2">
      <div className="input-group">
        <textarea 
          onChange={handleChange}
          value={inputtedText}
          className="form-control" rows="2" placeholder="Type a new message"></textarea>
        <button
          onClick={handleClick}
          className="btn btn-secondary" type="button">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}