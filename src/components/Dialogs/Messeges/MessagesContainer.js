import { connect } from 'react-redux';
import Messages from './Messages';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogsReducer';

let mapStateToProps = (state) => {
	return {
		messages: state.dialogsPage.messages,
		newMessageText: state.dialogsPage.ewMessageText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => dispatch(sendMessageCreator()),
		createMessage: text => dispatch(updateNewMessageTextCreator(text))
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;