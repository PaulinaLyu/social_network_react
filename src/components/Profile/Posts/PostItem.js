import React from 'react';
import CircleAvatar from '../../CircleAvatar';
import card from '../../../sass/modules/card.module.scss';
import post from './post.module.scss';

const PostItem = ({ name, likesCount, text }) => (
	<div className = {card.card}>
		<div className = {card.inner}>		
			<div className = {post.post}>
				<div className = {post.title}>
					<CircleAvatar />
					<h3>{name}</h3>
				</div>
				<p>{text}</p>
				<div>{`Likes: ${likesCount}`}</div>
			</div>
		</div>
	</div>
)

export default PostItem;