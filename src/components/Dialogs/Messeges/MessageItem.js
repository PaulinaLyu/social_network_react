import React from 'react';
import message from './message.module.scss';

const MessageItem = ({ text }) => (
    <div className={message.item}>
        <div className={message.inner}>
            <p className={message.text}>{text}</p>
        </div>
    </div>
)

export default MessageItem;