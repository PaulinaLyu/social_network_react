import React from 'react';
import MessageItem from './MessageItem';

const messagesData = [
    {id: 1, name: 'Donna Hayward', message:"Some quick example text to build on the card title and make up the bulk of the card's content."},
    {id: 2, name: 'Dale Cooper',  message:"Some quick example text to build on the card title."},
    {id: 3, name: 'Audrey Horne',  message:"Some quick example text."},
    {id: 4, name: 'Laura Palmer', message:"Some quick example text to build on the card title and make up the bulk of the card's content."},
    {id: 5, name: 'James Hurley', message:"Some quick example text to build on the card title and make up the bulk of the card's content."},
    {id: 6, name: 'Norma Jennings', message:"Some quick example text."}
]

const Messages = () => (
    <>
        <h2>Messages</h2>
        <MessageItem message="Some quick example text to build on the card title 
            and make up the bulk of the card's content."/>
    </>
)

export default Messages;