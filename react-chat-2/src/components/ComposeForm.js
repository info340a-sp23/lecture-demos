import React, { useState } from 'react';

export function ComposeForm(props) {

  const addMessageFunction = props.howToAddAMessage;


  const [inputtedText, setInputtedText] = useState('');
  console.log("rendering with", inputtedText);

  //submission
  const handleClick = (event) => {
    console.log("submitting form with text", inputtedText);

    addMessageFunction("penguin", "Penguin", inputtedText, "random");
    
    setInputtedText('');
  }

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