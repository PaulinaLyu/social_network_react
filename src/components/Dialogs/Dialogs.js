import React from 'react';
import Col from 'react-bootstrap/Col';
// import Contacts from './Contacts/Contacts';
import MessagesContainer from './Messeges/MessagesContainer';

const Dialogs = () => (
	<>
		<Col xl={5}>
            {/* <Contacts contacts={dialogsPage.contacts}/> */}
		</Col>
		<Col xl={7}>
            <MessagesContainer />
		</Col>
	</>
)

export default Dialogs; 