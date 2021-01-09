import React from 'react';
import MessageListEntry from './MessageListEntry';
import _ from 'lodash';

const MessageList = (props) => {
  return (
    _.map(props.messages, (message) => {
      return < MessageListEntry message={message}/>
    })
  );
};

export default MessageList;