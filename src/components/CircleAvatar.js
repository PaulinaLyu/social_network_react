import React from 'react';
import circleAvatar from './../sass/modules/circleAvatar.module.scss'
import img from './../img/avatar.jpg';

function CircleAvatar() {
  	return (
    	<div className = {circleAvatar.avatar}>
      		<img className={circleAvatar.img} src={img} alt='avatar'></img>
    	</div>
  	);
}

export default CircleAvatar;