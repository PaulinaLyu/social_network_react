import React from 'react';
import avatar from './avatar.module.scss';
import img from './../../img/avatar.jpg'

const Avatar = () => (
    <div className = {avatar.avatar}>
      	<img className = {avatar.img} src = {img} alt='avatar'></img>
    </div>
);

export default Avatar;