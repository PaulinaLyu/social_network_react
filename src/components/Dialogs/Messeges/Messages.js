import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import CircleAvatar from '../../CircleAvatar';
import message from './message.module.scss';
import MessageItem from './MessageItem';

const Messages = (props) => {
    const onSendMessage = () => props.sendMessage();
    const onupdateMessageText = event => props.updateMessageText(event.target.value);

    return (
        <>
            <div className = {message.message}>				
                <Col xl={1}>
                    <CircleAvatar />
                </Col>
                <Col xl={11}>
                    <Form>
                        <Form.Group>
                            <Form.Control as="textarea" 
                                rows="5"
                                placeholder="Enter your message"
                                value={props.newMessageText} 
                                onChange={onupdateMessageText} />
                        </Form.Group>
                    </Form>
                    <Button variant="success" onClick={onSendMessage}>Send</Button>{' '}
                </Col>
            </div>
            <h2>Messages</h2>
            {props.messages.map(item => <MessageItem text={item.message} key={item.id} />)}
        </>
    )

}

export default Messages;