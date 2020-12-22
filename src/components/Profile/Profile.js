import React from 'react';
import Col from 'react-bootstrap/Col';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => (
	<>
		<Col xl={3}>
			<ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
		</Col>
		<Col xl={9}>
			<PostsContainer />
		</Col>
	</>
)

export default Profile;