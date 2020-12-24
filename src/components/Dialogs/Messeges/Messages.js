import React from 'react';
import Col from 'react-bootstrap/Col';
import CircleAvatar from '../../CircleAvatar';
import message from './message.module.scss';
import MessageItem from './MessageItem';
import MessagesFormRedux from './MessagesFormRedux';

const Messages = (props) => {
    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <>
            <div className = {message.message}>				
                <Col xl={1}>
                    <CircleAvatar />
                </Col>
                <Col xl={11}>
                    <MessagesFormRedux onSubmit={addNewMessage} />
                </Col>
            </div>
            <h2>Messages</h2>
            {props.messages.map(item => <MessageItem text={item.message} key={item.id} />)}
        </>
    )
};

export default Messages;