import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Profile from './Profile';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.getUserProfile(userId);
		this.props.getUserStatus(userId);
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isAuth: state.auth.isAuth,
		status: state.profilePage.status
	}
}

export default compose(
	connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
	withRouter,
	withAuthRedirect,
)(ProfileContainer);