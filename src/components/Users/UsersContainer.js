import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/usersReducer';
import Users from './Users';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		return <Users users={this.props.users}
					pageSize={this.props.pageSize}
					totalUsersCount={this.props.totalUsersCount}
					currentPage={this.props.currentPage}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					onPageChanged={this.onPageChanged}
					followingInProgress={this.props.followingInProgress}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		followingInProgress: state.usersPage.followingInProgress
	// Поля, если что здесь можно хранить стейт не только с текущей страницы (usersPage), можно и с dialogsPage или profilePage это нормально.
	}
}

export default connect(mapStateToProps, 
	{follow, unfollow, setCurrentPage, 
		toggleFollowingProgress,
		getUsers: getUsers}) (UsersContainer);