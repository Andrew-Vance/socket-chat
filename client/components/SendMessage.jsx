import React, { useState } from 'react';

const SendMessage = (props) => {

  const [messageText, updateMessageText] = useState('');

  const handleSend = () => {
    props.submitMessage(messageText);
    updateMessageText('');
  }

  return (
    <div>
      <input onChange={(e) => {updateMessageText(e.target.value)}} value={messageText}/>
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default SendMessage;