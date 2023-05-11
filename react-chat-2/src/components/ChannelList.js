import React from 'react';

export function ChannelList(props) {

  const {channelNames, currentChannel} = props;

  const liArray = channelNames.map((channelNameString) => {
    let classListString = "px-2";
    if(channelNameString === currentChannel) { //on current channel
      classListString += " bg-warning";
    }

    return (
      <li className={classListString} key={channelNameString}>
        <a href={"/"+channelNameString}>{channelNameString}</a>
        </li>
    );
  })

  return (
    <nav className="channel-nav h-100 bg-secondary px-0 py-3">
      <ul className="px-0">
        {liArray}
      </ul>
    </nav>
  )
}