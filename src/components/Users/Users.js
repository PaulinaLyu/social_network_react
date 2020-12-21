import React from 'react';
import users from './users.module.scss'
import Button from 'react-bootstrap/Button';
import UsersItem from './UsersItem';

const Users = (props) => {
	let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
	let pages = [];

	for (let i=1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div>
			<div className={users.pagination}>
				{ pages.map( page =>  <div className={users.pagination_item} key={page + "328884"}>
					<span className={props.currentPage === page && users.selected} onClick={ () => { props.onPageChanged(page)} }>{page}</span>
				</div>
				)}
			</div>

			<h1>Users</h1>
			{
				props.users.map( user => <div key={user.id}>
					<UsersItem avatar={user.photos.small 
						? user.photos.small 
						: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-red-512.png" }
						name={user.name} 
						about={user.status}  /> 
						
					{ user.followed
						? <Button disabled={props.followingInProgress
							.some(id => id === user.id)} variant="success" 
								onClick={ () => { props.unfollow(user.id) }}>
						Unfollow</Button>

						: <Button disabled={props.followingInProgress
							.some(id => id === user.id)} variant="success"
							onClick={ () => { props.follow(user.id) }}>
						Follow</Button>
					}
					</div>
				)
			}	
			<Button variant="success">Show more</Button>
		</div> 
	)	
}
export default Users;