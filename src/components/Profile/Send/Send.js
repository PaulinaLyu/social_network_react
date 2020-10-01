import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import CircleAvatar from '../../CircleAvatar';
import send from './send.module.scss';
import { addPostCreator, updateNewPostTextCreator} from '../../../redux/state';

const Send = ({ dispatch, newPostText }) => {

const newPostElement = React.createRef();

const sendPost = () => {
	dispatch(addPostCreator());
};

const changePost = () => {
	const text = newPostElement.current.value;
	dispatch(updateNewPostTextCreator(text));
};

	return(
		<div className = {send.send}>
			<Container>
				<Row>
					<Col xl={1}>
						<CircleAvatar />
					</Col>
					<Col xl={9}>
						<Form>
							<Form.Group>
								<Form.Control as="textarea" 
									rows="2"
									placeholder="What is new today?"
									value={newPostText} 
									ref={newPostElement} 
									onChange={changePost} />
							</Form.Group>
						</Form>
					</Col>
					<Col xl={2}>
						<Button variant="success" onClick={sendPost}>Send</Button>{' '}
					</Col>
				</Row>
			</Container>
		</div>
	)
}


export default Send;