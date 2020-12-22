import React from 'react';
import status from './status.module.scss';
// import Spinner from 'react-bootstrap/Spinner';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status

	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateUserStatus();
	}

	onStatusChange = (event) => {
		this.setState({
			status: event.currentTarget.value
		})
	}

	componentDidUpdate(prevProps, prevState) {
		
		if (prevProps.status !== this.props.status)
		this.setState({
			status: this.props.status
		});
	}

	render () {
		return (
			<>	
				{!this.state.editMode &&
					<span className={status.text} onDoubleClick={this.activateEditMode}>{this.props.status}</span>
				}
				{this.state.editMode &&
					<div>
						<input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
					</div>
				}
			</>
		)
	}
};

export default ProfileStatus;

	// if (!props.profile) {
	// 	return  (
	// 		<>
	// 			<Spinner animation="grow" variant="success" />
	// 			<Spinner animation="grow" variant="success" />
	// 			<Spinner animation="grow" variant="success" />
	// 		</>
	// 	) 
	// }