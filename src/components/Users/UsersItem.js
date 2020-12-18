import React from 'react';
import { Card } from 'react-bootstrap';

const UsersItem = (props) => (
	<Card style={{ width: '18rem' }}>
		<Card.Img variant="top" src={props.avatar} alt="Avatar" />
		<div>{props.name}</div>
		<div>{props.about}</div>
		<div>"props.city"</div>
		<div>"props.country"</div>
	</Card>
)

export default UsersItem;