import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contacts from './Contacts/Contacts';
import Messages from './Messeges/Messages';

const Dialogs = () => (
    <Container>
		<Row>
			<Col xl={5}>
                <Contacts />
			</Col>
			<Col xl={7}>
                <Messages />
			</Col>
		</Row>
	</Container>
)

export default Dialogs;
