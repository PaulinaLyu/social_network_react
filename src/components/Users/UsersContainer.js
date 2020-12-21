import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import { follow, unfollow,setUsers, setCurrentPage, setTotalUsersCount } from '../../redux/usersReducer';

class UsersContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
			withCredentials: true,
		})
		.then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
			withCredentials: true,
		})
		.then(response => {
			this.props.setUsers(response.data.items)
		});
	}

	render() {
		return <Users users={this.props.users}
					pageSize={this.props.pageSize}
					totalUsersCount={this.props.totalUsersCount}
					currentPage={this.props.currentPage}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					onPageChanged={this.onPageChanged}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	// Поля, если что здесь можно хранить стейт не только с текущей страницы (usersPage), можно и с dialogsPage или profilePage это нормально.
	}
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount}) (UsersContainer);