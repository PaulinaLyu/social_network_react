import { connect } from 'react-redux';
import Posts from './Posts';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPost: state.profilePage.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => dispatch(addPostCreator()),
		changePost: text => dispatch(updateNewPostTextCreator(text))
	}
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

	
export default PostsContainer;