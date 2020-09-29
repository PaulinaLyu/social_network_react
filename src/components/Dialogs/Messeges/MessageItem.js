import React from 'react';
import item from './item.module.scss';

const MessageItem = (props) => (
    <div className={item.item}>
        <div className={item.inner}>
            <p className={item.text}>{props.message}</p>
        </div>
    </div>
)

export default MessageItem;