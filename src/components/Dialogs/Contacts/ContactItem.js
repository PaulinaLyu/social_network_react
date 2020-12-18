import React from 'react';
import { NavLink } from 'react-router-dom';
import CircleAvatar from '../../CircleAvatar';
import contact from './contact.module.scss';

const ContactItem = ({ id, name }) => (
    <NavLink to={`/dialogs/${id}`} className={contact.item}>
        <div className={contact.inner}>
            <CircleAvatar />
            <div className={contact.info}>
                <h3 className={contact.title}>{name}</h3>
                <p className={contact.text}>Some quick example text</p>
            </div>
        </div>
    </NavLink>
)

export default ContactItem;