import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

type PostsType = {
	id: number
	name: string
	likesCount: number
	text: string
}

export type InitialStateType = {
	posts: Array<PostsType>
	profile: any
	status: string | null
}

let initialState: InitialStateType = {
	posts: [
		{id: 1, name: 'Donna Hayward', likesCount: 12, text: 'Owls'},
		{id: 2, name: 'Dale Cooper', likesCount: 100, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
		{id: 3, name: 'Audrey Horne', likesCount: 50, text: 'Hi, Dear Laura'},
		{id: 4, name: 'Laura Palmer', likesCount: 74, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
		{id: 5, name: 'James Hurley', likesCount: 3, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
		{id: 6, name: 'Norma Jennings', likesCount: 89, text: 'Dolce Gusto'}
	],
	profile: null,
	status: ""
};

// export type InitialStateType = typeof initialState;
// let exampleState: InitialStateType = {
// 	posts: [
// 		{id: 1, name: 'Donna Hayward', likesCount: 12, text: 'Owls'},
// 		{id: 2, name: 'Dale Cooper', likesCount: 100, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
// 		{id: 3, name: 'Audrey Horne', likesCount: 50, text: 'Hi, Dear Laura'},
// 		{id: 4, name: 'Laura Palmer', likesCount: 74, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
// 		{id: 5, name: 'James Hurley', likesCount: 3, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
// 		{id: 6, name: 'Norma Jennings', likesCount: 89, text: 'Dolce Gusto'}
// 	],
// 	profile: null,
// 	status: ""
// }
// let initialState = {
// 	posts: [
// 		{id: 1, name: 'Donna Hayward', likesCount: 12, text: 'Owls'},
// 		{id: 2, name: 'Dale Cooper', likesCount: 100, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
// 		{id: 3, name: 'Audrey Horne', likesCount: 50, text: 'Hi, Dear Laura'},
// 		{id: 4, name: 'Laura Palmer', likesCount: 74, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
// 		{id: 5, name: 'James Hurley', likesCount: 3, text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
// 		{id: 6, name: 'Norma Jennings', likesCount: 89, text: 'Dolce Gusto'}
// 	],
// 	profile: null,
// 	status: ""
// };

const profileReducer = (state = initialState, action: any): InitialStateType => {
	switch(action.type) {
		case ADD_POST: 
			const newPost = {
				id: 7,
				name: 'Polina Lyu',
				text: action.newPostText,
				likesCount: 0,
			};
			return {
				...state,
				posts: [newPost, ...state.posts],
				// newPostText: ''
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

type AddPostActionType = {
	type: typeof ADD_POST
}

// type GetAddPostActionType = {
// 	type: typeof ADD_POST,
// 	newPostText: string
// }

// type GetSetUserProfileType = {
// 	type: typeof ADD_POST,
// 	newPostText: string
// }

// type GetSetStatusType = {
// 	type: typeof ADD_POST,
// 	newPostText: string
// }

export const addPost = newPostText => ({type: ADD_POST, newPostText});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
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