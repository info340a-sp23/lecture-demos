import React from 'react';

export function ChannelList(props) {

  const {channelNames, currentChannel} = props;

  const liArray = channelNames.map((nameString) => {

    let classList = "";
    if(nameString === currentChannel) { //on current channel
      classList = "bg-warning";
    }

    return (
      <li className={classList} key={nameString}>
        <a href="#" className="text-light">{nameString}</a>
      </li>
    );
  })

  return (
    <div className="channelList bg-secondary text-light">
      <ul>
        {liArray}
      </ul>
    </div>
  )
}