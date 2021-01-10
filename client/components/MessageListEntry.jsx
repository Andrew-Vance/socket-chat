import React from 'react';

const MessageListEntry = (props) => {

  return (
    <div className='message'>{props.message}</div>
  );
};

export default MessageListEntry;