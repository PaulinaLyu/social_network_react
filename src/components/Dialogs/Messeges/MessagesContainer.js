import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import Messages from './Messages';
import { sendMessage } from '../../../redux/dialogsReducer';

let mapStateToProps = (state) => {
	return {
		messages: state.dialogsPage.messages,
		newMessageText: state.dialogsPage.ewMessageText,
		isAuth: state.auth.isAuth
	}
}

export default compose(
	connect(mapStateToProps, {sendMessage}),
	withAuthRedirect
)(Messages);