import React from 'react';
import Button from 'react-bootstrap/Button';
import UsersItem from './UsersItem';

const Users = (props) => {
	let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
	let pages = [];

	for (let i=0; i <= pagesCount; i++) {
		pages.push(i)
	}
	//<span style={props.currentPage === page && {fontWeight: 'bold'} }
	return (
		<div>
			<div>
				{pages.map(page => {
					return <span onClick={ () => { props.onPageChanged(page)} }>{page}</span>
				})};
			</div>
			<h1>Users</h1>
			{
				props.users.map( user => <div key={user.id}>
					<UsersItem avatar={user.photos.small 
						? user.photos.small 
						: "https://lh3.googleusercontent.com/proxy/vWMfy5o6w0aann31j35dogdWIP1hKzlt77MQfFikXkOL6CSiTkqJywBt34d-CD_GwCCFJ1i5HagC3_lBuzWH0xQBP7j_L0Vw9ePqj4i-Lux59OsebcDgvOJWYwKWG1KzNyz9utaZMKgEs0Lu_so" }
						name={user.name} 
						about={user.status}  /> 

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