import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import CircleAvatar from '../../CircleAvatar';
import send from './send.module.scss';
import { sendMessageCreator, updateNewMessageTextCreator} from '../../../redux/state';

const Send = ({ dispatch, newMessageText }) => {

const newMessageElement = React.createRef();

const sendMessage = () => {
	dispatch(sendMessageCreator());
};

const createMessage = () => {
	const text = newMessageElement.current.value;
	dispatch(updateNewMessageTextCreator(text));
};

	return(
		<div className = {send.send}>
			<Container>
				<Row>					
					<Col xl={1}>
						<CircleAvatar />
					</Col>
					<Col xl={10}>
						<Form>
							<Form.Group>
								<Form.Control as="textarea" 
									rows="5"
									placeholder="Enter your message"
									value={newMessageText} 
									ref={newMessageElement} 
									onChange={createMessage} />
							</Form.Group>
						</Form>
					</Col>
					<Col xl={2}>
						<Button variant="success" onClick={sendMessage}>Send</Button>{' '}
					</Col>
				</Row>
			</Container>
		</div>
	)
}


export default Send;