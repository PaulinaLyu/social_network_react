import { connect } from 'react-redux';
import Posts from './Posts';
import { addPost } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPost: state.profilePage.newPostText
	}
}

const PostsContainer = connect(mapStateToProps, {addPost})(Posts);

export default PostsContainer;