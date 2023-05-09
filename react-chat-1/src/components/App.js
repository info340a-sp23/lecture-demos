import React from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelList.js';
import { ChatPane } from './ChatPane.js';

function App(props) {

  const channelNames = ["general", "social", "random", "birds", "dank-memes"];
  const currentChannel = "random";

  return (
    <div>
      <HeaderBar />
      <div className="row">
        <div className="col-3">
          <ChannelList channelNames={channelNames} currentChannel={currentChannel} />
        </div>
        <div className="col-9">
          <ChatPane currentChannel={currentChannel} />
          {/* <ComposeForm /> */}
        </div>
    </div>
  </div>
  );
}

export default App;