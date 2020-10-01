import React from 'react';
import item from './item.module.scss';

const MessageItem = ({ message }) => (
    <div className={item.item}>
        <div className={item.inner}>
            <p className={item.text}>{message}</p>
        </div>
    </div>
)

export default MessageItem;