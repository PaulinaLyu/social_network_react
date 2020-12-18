import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from './About/About';
import PostsContainer from './Posts/PostsContainer';

const Profile = () => (
	<Container>
		<Row>
			<Col xl={3}>
				<About />
			</Col>
			<Col xl={9}>
				<PostsContainer />
			</Col>
		</Row>
	</Container>
)

export default Profile;