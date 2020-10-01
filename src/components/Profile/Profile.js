import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Posts from './Posts/Posts';
import Send from './Send/Send';
import About from './About/About';

const Profile = ({ profilePage, dispatch }) => (
	<Container>
		<Row>
			<Col xl={3}>
				<About />
			</Col>
			<Col xl={9}>
				<Send dispatch={dispatch} newPostText={profilePage.newPostText} />
				<Posts posts={profilePage.posts} />
			</Col>
		</Row>
	</Container>
)

export default Profile;