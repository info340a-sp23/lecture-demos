import React from 'react';
import _ from 'lodash';
import { useParams } from 'react-router-dom';

import { ChannelList } from './ChannelList.js';
import { ChatPane } from './ChatPane.js';

const CHANNEL_NAMES = ["general", "social", "random", "birds", "dank-memes"];


export default function ChatPage(props) {
  const currentUser = props.currentUser;
  const messageObjArray = props.messageArray;
  const howToAddAMessage = props.howToAddAMessage;

  const paramsObj = useParams();
  const whichChannel = paramsObj.whichChannel || "general" //default

  const channelCounts = _.countBy(messageObjArray, 'channel')

  return (
    <div className="row flex-grow-1">
      <div className="col-3">
        <ChannelList channelNames={CHANNEL_NAMES} channelCounts={channelCounts} />
      </div>
      <div className="col d-flex flex-column">
        <ChatPane
          currentUser={currentUser}
          messageArray={messageObjArray}
          howToAddAMessage={howToAddAMessage}
          currentChannel={whichChannel}
        />
      </div>
    </div>
  )
}