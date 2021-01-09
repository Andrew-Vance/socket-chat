import React from 'react';
import MessageList from './MessageList';
import SendMessage from './SendMessage';

const App = () => {

  const socket = io();

  const submitMessage = (message) => {
    socket.emit('message', message);
  };

  return (
    <div>
      <MessageList />
      <SendMessage submitMessage={submitMessage}/>
    </div>
  );
};

export default App;
