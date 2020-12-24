import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import CircleAvatar from '../../CircleAvatar';
import PostItem from './PostItem';
import PostFormRedux from './PostFormRedux';
import post from './post.module.scss';

const Posts = (props) => {
	const onAddPost = (values) => props.addPost(values.newPostText);

	return (
		<>		
			<div className = {post.post}>
				<Container>
					<Row>
						<Col xl={1}>
							<CircleAvatar />
						</Col>
						<Col xl={11}>
							<PostFormRedux onSubmit={onAddPost} />
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