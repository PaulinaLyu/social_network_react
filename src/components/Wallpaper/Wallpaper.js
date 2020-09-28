import React from 'react';
import Image from 'react-bootstrap/Image';
import wallpaper from './wallpaper.module.scss';
import img from './../../img/wallpaper.jpg';

const Wallpaper = () => (
    <div className = {wallpaper.wallpaper}>
        <Image src = {img} alt="Wallpaper" fluid />
    </div>
);

export default Wallpaper;