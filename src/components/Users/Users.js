import React from 'react';
import Button from 'react-bootstrap/Button';
import UsersItem from './UsersItem';

const Users = (props) => {

	if(props.users.length === 0) {
		props.setUsers ([
			{id: 1, followed: true, photoUrl: "https://yt3.ggpht.com/ytc/AAUvwnjIcdBYKWiRzC25WYws-5Gv6_iG8eHTXFWBQ2eD=s900-c-k-c0x00ffffff-no-rj", fullName: 'Polina Lyubezzznova', status: 'frontend new commer', location: {city: 'Moscow', country: 'Russia'} },
			{id: 2, followed: true, photoUrl: "https://yt3.ggpht.com/ytc/AAUvwnjIcdBYKWiRzC25WYws-5Gv6_iG8eHTXFWBQ2eD=s900-c-k-c0x00ffffff-no-rj", fullName: 'Ron', status: 'frontend new commer', location: {city: 'Moscow', country: 'Russia'} },
			{id: 3, followed: true, photoUrl: "https://yt3.ggpht.com/ytc/AAUvwnjIcdBYKWiRzC25WYws-5Gv6_iG8eHTXFWBQ2eD=s900-c-k-c0x00ffffff-no-rj", fullName: 'Germmy', status: 'frontend new commer', location: {city: 'London', country: 'England'} },
			{id: 4, followed: false, photoUrl: "https://yt3.ggpht.com/ytc/AAUvwnjIcdBYKWiRzC25WYws-5Gv6_iG8eHTXFWBQ2eD=s900-c-k-c0x00ffffff-no-rj", fullName: 'Snape', status: 'frontend new commer', location: {city: 'Hogwards', country: 'Russia'} },
			{id: 5, followed: false, photoUrl: "https://yt3.ggpht.com/ytc/AAUvwnjIcdBYKWiRzC25WYws-5Gv6_iG8eHTXFWBQ2eD=s900-c-k-c0x00ffffff-no-rj", fullName: 'John', status: 'frontend new commer. Yeeee', location: {city: 'Berlin', country: 'Germany'} },
			{id: 6, followed: true, photoUrl: "https://yt3.ggpht.com/ytc/AAUvwnjIcdBYKWiRzC25WYws-5Gv6_iG8eHTXFWBQ2eD=s900-c-k-c0x00ffffff-no-rj", fullName: 'Holmes', status: 'frontend new commer', location: {city: 'Moscow', country: 'Russia'} }
		]);
	}

	return (
		<div>
			<h2>Users</h2>
			{
				props.users.map( user => <div key={user.id}>
					<UsersItem avatar={user.photoUrl} name={user.fullName} about={user.about} city={user.location.city} country={user.location.country}  /> 

					{ user.followed
						? <Button variant="success" onClick={ () => { props.unfollow(user.id)}}>Unfollow</Button>
						: <Button variant="success" onClick={ () => { props.follow(user.id)}}>Follow</Button>

					}
				</div>
				)
			}	
				<Button variant="success">Show more</Button>
		</div> 
	)	

}
export default Users;