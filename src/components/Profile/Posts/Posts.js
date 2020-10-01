import React from 'react';
import PostItem from './PostItem';

const Posts = ({ posts }) => (
	<>
		<h2>Posts</h2>
		{posts.map(item => <PostItem name={item.name} likesCount={item.likesCount} text={item.text} />)}
	</>
)

export default Posts;