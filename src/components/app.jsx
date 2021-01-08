import React from 'react';

import ChannelList from './channel_list';
import MessageList from '../containers/message_list';




const App = (props) => {
  return (
    <div className="app">
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
