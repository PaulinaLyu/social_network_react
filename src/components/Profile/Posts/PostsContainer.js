import { connect } from 'react-redux';
import Posts from './Posts';
import { addPost, updatePostText } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPost: state.profilePage.newPostText
	}
}

const PostsContainer = connect(mapStateToProps, {addPost, updatePostText})(Posts);

export default PostsContainer;