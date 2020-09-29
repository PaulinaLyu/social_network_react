import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Posts from './Posts/Posts';
import Share from './Share/Share';
import About from './About/About';

const Profile = ({ profilePage, addPost, updatePostText }) => (
	<Container>
		<Row>
			<Col xl={3}>
				<About />
			</Col>
			<Col xl={9}>
				<Share addPost={addPost} newPostText={profilePage.newPostText} updatePostText={updatePostText} />
				<Posts posts={profilePage.posts} />
			</Col>
		</Row>
	</Container>
)

export default Profile;