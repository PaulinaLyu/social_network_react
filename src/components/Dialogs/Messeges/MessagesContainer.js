import { connect } from 'react-redux';
import Messages from './Messages';
import { sendMessage, updateMessageText } from '../../../redux/dialogsReducer';

let mapStateToProps = (state) => {
	return {
		messages: state.dialogsPage.messages,
		newMessageText: state.dialogsPage.ewMessageText
	}
}

const MessagesContainer = connect(mapStateToProps, {sendMessage, updateMessageText})(Messages);

export default MessagesContainer;