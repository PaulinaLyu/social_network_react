import React from 'react';
import posts from './posts.module.scss';
import Post from './Post';

function Posts() {
  	return (
    	<div className = {posts.post}>
			<Post />
			<Post />
			<Post />
			<Post />
    	</div>
  	);
}

export default Posts;