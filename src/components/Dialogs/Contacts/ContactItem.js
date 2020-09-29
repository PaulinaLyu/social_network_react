import React from 'react';
import { NavLink } from 'react-router-dom';
import CircleAvatar from '../../CircleAvatar';
import item from './item.module.scss';

const ContactItem = ({ id, name }) => (
    <NavLink to={`/dialogs/${id}`} className={item.item}>
        <div className={item.inner}>
            <CircleAvatar />
            <div className={item.info}>
                <h3 className={item.title}>{name}</h3>
                <p className={item.text}>Some quick example text</p>
            </div>
        </div>
    </NavLink>
)

export default ContactItem;