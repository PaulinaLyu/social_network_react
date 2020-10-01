import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contacts from './Contacts/Contacts';
import Messages from './Messeges/Messages';
import Send from './Send/Send';

const Dialogs = ({ dialogsPage, dispatch }) => {
	console.log(dialogsPage);
	return(
    <Container>
		<Row>
			<Col xl={5}>
                <Contacts contacts={dialogsPage.contacts}/>
			</Col>
			<Col xl={7}>
                <Messages messages={dialogsPage.messages}/>
				<Send dispatch = {dispatch} newMessageText={dialogsPage.newMessageText}/>
			</Col>
		</Row>
	</Container>
)
}

export default Dialogs;
