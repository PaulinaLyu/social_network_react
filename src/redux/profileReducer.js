const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
	posts: [
		{id: 1, name: 'Donna Hayward', likesCount: 12, text: 'Owls'},
		{id: 2, name: 'Dale Cooper', likesCount: 100, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
		{id: 3, name: 'Audrey Horne', likesCount: 50, text: 'Hi, Dear Laura'},
		{id: 4, name: 'Laura Palmer', likesCount: 74, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
		{id: 5, name: 'James Hurley', likesCount: 3, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
		{id: 6, name: 'Norma Jennings', likesCount: 89, text: 'Dolce Gusto'}
	],
	newPostText: ''
};

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST: 
			const newPost = {
				id: 7,
				name: 'Polina Lyu',
				text: state.newPostText,
				likesCount: 0,
			};
			return {
				...state,
				posts: [newPost, ...state.posts],
				newPostText: ''
			}
		case UPDATE_POST_TEXT: 
			return {
				...state,
				newPostText: action.newText
			}
		default: 
			return state;
	}
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = text => 
    ({type: UPDATE_POST_TEXT, newText: text});

export default profileReducer;