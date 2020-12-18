import React from 'react';
import Button from 'react-bootstrap/Button';
import UsersItem from './UsersItem';
import * as axios from 'axios';

class Users extends React.Component {

	constructor(props) {
		super(props);
		if (this.props.users.length === 0) {

			axios.get("https://social-network.samuraijs.com/api/1.0/users")
				.then(response => {
					this.props.setUsers (response.data.items)
				})
		}
	}

	render() {
		return (
			<div>
				<h2>Users</h2>
				{
					this.props.users.map( user => <div key={user.id}>
						<UsersItem avatar={user.photos.small 
							? user.photos.small 
							: "https://lh3.googleusercontent.com/proxy/vWMfy5o6w0aann31j35dogdWIP1hKzlt77MQfFikXkOL6CSiTkqJywBt34d-CD_GwCCFJ1i5HagC3_lBuzWH0xQBP7j_L0Vw9ePqj4i-Lux59OsebcDgvOJWYwKWG1KzNyz9utaZMKgEs0Lu_so" }
							name={user.name} 
							about={user.status}  /> 

						{ user.followed
							? <Button variant="success" onClick={ () => { this.props.unfollow(user.id)}}>Unfollow</Button>
							: <Button variant="success" onClick={ () => { this.props.follow(user.id)}}>Follow</Button>
						}
					</div>
					)
				}	
					<Button variant="success">Show more</Button>
			</div> 
		)	
	}
}

export default Users;