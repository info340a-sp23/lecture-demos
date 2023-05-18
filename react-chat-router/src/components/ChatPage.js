import React from 'react';
import _ from 'lodash';

import { ChannelList } from './ChannelList.js';
import { ChatPane } from './ChatPane.js';

export default function ChatPage(props) {
  const currentUser = props.currentUser;
  const messageObjArray = props.messageArray;
  const howToAddAMessage = props.howToAddAMessage;

  const channelNames = ["general", "social", "random", "birds", "dank-memes"];

  const channelCounts = _.countBy(messageObjArray, 'channel')

  return (
    <div className="row flex-grow-1">
      <div className="col-3">
      <ChannelList channelNames={channelNames} channelCounts={channelCounts} />
      </div>
      <div className="col d-flex flex-column">
        <ChatPane
          currentUser={currentUser}
          messageArray={messageObjArray}
          howToAddAMessage={howToAddAMessage}
        />
      </div>
    </div>
  )
}