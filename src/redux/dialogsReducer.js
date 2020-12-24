const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	contacts: [
		{id: 1, name: 'Donna Hayward'},
		{id: 2, name: 'Dale Cooper'},
		{id: 3, name: 'Audrey Horne'},
		{id: 4, name: 'Laura Palmer'},
		{id: 5, name: 'James Hurley'},
		{id: 6, name: 'Norma Jennings'}
	],
	messages: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Hallo'},
		{id: 3, message: 'Shaman King 2021'},
		{id: 4, message: 'I am waiting for you'},
		{id: 5, message: 'Go'},
		{id: 6, message: 'JS one love'}
	],
};

const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case SEND_MESSAGE: 
			const newMessage = {
				id: 7,
				message: action.newMessageBody,
			};
			return {
				...state,
				messages: [...state.messages, newMessage],
			}
		default: 
			return state;
	}
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;