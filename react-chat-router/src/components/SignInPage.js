import React from 'react';

import DEFAULT_USERS from '../data/users.json';

export default function SignInPage(props) {
  const currentUser = props.currentUser;
  const loginFunction = props.howToChangeUser;

  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    console.log(whichUser);
    const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0] //null user if not found

    loginFunction(selectedUserObj)
  }

  //convenience
  const userButtons = DEFAULT_USERS.map((userObj) => {
    // if(userObj.userId === currentUser.userId){
    //   return null; //don't include!
    // }
    return (
      <button className="user-icon btn" key={userObj.userName} 
        name={userObj.userId} onClick={handleClick}
      >
        <img src={userObj.userImg} alt={userObj.userName + " avatar"} />
      </button>
    )
  })

  return (
    <div className="card bg-light">
      <div className="container card-body">
        <p className="lead">Pick a user:</p>
        <div>
          {userButtons}
        </div>
      </div>
    </div>
  )
}