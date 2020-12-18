import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import CircleAvatar from '../../CircleAvatar';
import PostItem from './PostItem';
import post from './post.module.scss';

const Posts = (props) => {
	const onAddPost = () => props.addPost();
	const onChangePost = event => props.changePost(event.target.value);
	
	return (
		<>		
			<div className = {post.post}>
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
										value={props.newPostText} 
										onChange={onChangePost} />
								</Form.Group>
							</Form>
						</Col>
						<Col xl={2}>
							<Button variant="success" onClick={onAddPost}>Add</Button>{' '}
						</Col>
					</Row>
				</Container>
			</div>
			<h2>Posts</h2>
			{props.posts.map(item => <PostItem name={item.name} likesCount={item.likesCount} text={item.text} key={item.id} />)}
		</>
	)
}

export default Posts;