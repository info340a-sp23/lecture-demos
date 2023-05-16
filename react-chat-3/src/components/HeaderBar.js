import React from 'react';

const DEFAULT_USERS = [
  {userId: null, userName: null, userImg: '/img/null.png'}, //null user
  {userId: "penguin", userName: "Penguin", userImg: '/img/Penguin.png'},
  {userId: "parrot", userName: "Parrot", userImg: '/img/Parrot.png'},
  {userId: "zebra", userName: "Zebra", userImg: '/img/Zebra.png'},  
]

export function HeaderBar(props) {

  const currentUser = props.currentUser;
  const howToChangeUser = props.howToChangeUser;

  //event handler
  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0] //null user if not found

    console.log(selectedUserObj);
    howToChangeUser(selectedUserObj);
    //do something with userObj!
  }

  //for convenience
  const userButtons = DEFAULT_USERS.map((userObj) => {
    let classList = "btn user-icon";
    if(userObj.userId === currentUser.userId){
      classList += " highlighted"
    }

    return (
      <button className={classList} key={userObj.userName} 
        name={userObj.userId} onClick={handleClick}
      >
        <img src={userObj.userImg} alt={userObj.userName + " avatar"} />
      </button>
    )
  })

  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Chat</h1>
      <div>
        {userButtons}
      </div>
    </header>
  )
}