import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import SendMessage from './SendMessage';
import socket from '../service/socket.js';

const App = () => {

  const [messages, updateMessages] = useState(null);

  useEffect(() => {
    socket.once('messages', newMessage => {
      console.log(newMessage);
      let currentMessages;
      if (!messages) {
        currentMessages = [];
      } else {
        currentMessages = [...messages];
      }
      currentMessages.push(newMessage);
      updateMessages(currentMessages);
    });
  }, [messages]);

  const submitMessage = (message) => {
    socket.emit('message', message);
  };

  return (
    <div>
      <div id='chat'>
        <MessageList messages={messages}/>
      </div>

      <SendMessage submitMessage={submitMessage}/>
    </div>
  );
};

export default App;
