import React from 'react';
import CircleAvatar from '../../CircleAvatar';
import card from '../../../sass/modules/card.module.scss';
import post from './post.module.scss';

function Post() {
  	return (
		<div className = {card.card}>
			<div className = {card.inner}>		
				<div className = {post.post}>
					<div className = {post.title}>
						<CircleAvatar />
						<h3>Jon Wileyam</h3>
					</div>
					<p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
					<div>Likes</div>
				</div>
			</div>
		</div>
  	);
}

export default Post;