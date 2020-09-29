import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import CircleAvatar from '../../CircleAvatar';
import share from './share.module.scss';

const Share = ({ addPost, updatePostText, newPostText }) => {

const newPostElement = React.createRef();

const sharePost = () => {
	addPost();
	updatePostText('');
};

const changePost = () => {
	const text = newPostElement.current.value;
	updatePostText(text);
};

	return(
		<div className = {share.share}>
			<Container>
				<Row>
					<Col xl={1}>
						<CircleAvatar />
					</Col>
					<Col xl={9}>
						<Form.Group>
							<Form.Control type="text" 
								placeholder="What is new today?"
								value={newPostText} 
								ref={newPostElement} 
								onChange={changePost} />
						</Form.Group>
					</Col>
					<Col xl={2}>
						<Button variant="success" onClick={sharePost}>Share</Button>{' '}
					</Col>
				</Row>
			</Container>
		</div>
	)
}


export default Share;