import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contacts from './Contacts/Contacts';
import Messages from './Messeges/Messages';

const Dialogs = ({ contacts }) => (
    <Container>
		<Row>
			<Col xl={5}>
                <Contacts contacts={contacts}/>
			</Col>
			<Col xl={7}>
                <Messages />
			</Col>
		</Row>
	</Container>
)

export default Dialogs;
