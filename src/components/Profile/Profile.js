import React from 'react';
import Col from 'react-bootstrap/Col';
import About from './About/About';
import PostsContainer from './Posts/PostsContainer';

const Profile = () => (
	<>
		<Col xl={3}>
			<About />
		</Col>
		<Col xl={9}>
			<PostsContainer />
		</Col>
	</>
)

export default Profile;