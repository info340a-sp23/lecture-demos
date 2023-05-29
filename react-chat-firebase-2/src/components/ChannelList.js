import React from 'react';

import { Link } from 'react-router-dom';


export function ChannelList(props) {
  const {channelNames, channelCounts} = props;

  const CHANNEL_NAMES_ARRAY = ['general', 'random', 'dank-memes', 'birds', 'channel-5'];

//render the links
  const liArray = channelNames.map((channelNameString) => {
    const count = channelCounts[channelNameString] || 0;

    return (
      <div key={channelNameString}>
        <Link 
          name={channelNameString}
          to={"/chat/"+channelNameString}>{channelNameString} ({count})</Link>
      </div>
    );
  })

  return (
    <nav className="channel-nav h-100 bg-secondary px-1 py-3">
      {liArray}
    </nav>
  )
}