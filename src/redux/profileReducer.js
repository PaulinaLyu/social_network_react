const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {
	switch(action.type) {
		case ADD_POST:
			const newPost = {
				id: 5,
				name: 'Polina Lyu',
				text: state.newPostText,
				likesCount: 0,
			};
			state.posts.unshift(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_POST_TEXT: 
			state.newPostText = action.newText;
			return state;
		default: 
			return state;
	}
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = text => 
    ({type: UPDATE_POST_TEXT, newText: text});

export default profileReducer;