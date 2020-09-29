import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Posts from './Posts/Posts';
import Share from './Share/Share';
import About from './About/About';

const Profile = ({ posts }) => (
	<Container>
		<Row>
			<Col xl={3}>
				<About />
			</Col>
			<Col xl={9}>
				<Share />
				<Posts posts={posts} />
			</Col>
		</Row>
	</Container>
)

export default Profile;