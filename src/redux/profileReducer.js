import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
	posts: [
		{id: 1, name: 'Donna Hayward', likesCount: 12, text: 'Owls'},
		{id: 2, name: 'Dale Cooper', likesCount: 100, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
		{id: 3, name: 'Audrey Horne', likesCount: 50, text: 'Hi, Dear Laura'},
		{id: 4, name: 'Laura Palmer', likesCount: 74, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
		{id: 5, name: 'James Hurley', likesCount: 3, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
		{id: 6, name: 'Norma Jennings', likesCount: 89, text: 'Dolce Gusto'}
	],
	newPostText: '',
	profile: null,
	status: ""
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
		case SET_USER_PROFILE: 
			return {
				...state,
				profile: action.profile
			}
		case SET_STATUS: 
			return {
				...state,
				status: action.status
			}
		default: 
			return state;
	}
}

export const addPost = () => ({type: ADD_POST});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const updatePostText = text => ({type: UPDATE_POST_TEXT, newText: text});
export const setStatus = status => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => {
	return (dispatch) => {

		profileAPI.getProfile(userId)
			.then(response => {
				dispatch(setUserProfile(response.data));
			});
	
	}
};

export const getUserStatus = (userId) => {
	return (dispatch) => {

		profileAPI.getStatus(userId)
			.then(response => {
				dispatch(setStatus(response.data));
			});
	
	}
};

export const updateUserStatus = (status) => {
	return (dispatch) => {

		profileAPI.updateStatus(status)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setStatus(status));
				}
			});
	
	}
};

export default profileReducer;