import React from 'react';
import MessageItem from './MessageItem';


const Messages = ({ messages }) => (
    <>
        <h2>Messages</h2>
        {messages.map(item => <MessageItem message={item.message} />)}
    </>
)

export default Messages;