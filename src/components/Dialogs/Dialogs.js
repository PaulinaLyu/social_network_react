import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Contacts from './Contacts/Contacts';
import MessagesContainer from './Messeges/MessagesContainer';

const Dialogs = () => (
    <Container>
		<Row>
			<Col xl={5}>
                {/* <Contacts contacts={dialogsPage.contacts}/> */}
			</Col>
			<Col xl={7}>
                <MessagesContainer />
			</Col>
		</Row>
	</Container>
)

export default Dialogs;
