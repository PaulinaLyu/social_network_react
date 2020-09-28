import React from 'react';
import CircleAvatar from '../../CircleAvatar';
import item from './item.module.scss';

const ContactItem = () => (
    <div className={item.item}>
        <div className={item.inner}>
            <CircleAvatar />
            <div className={item.info}>
                <h3 className={item.title}>Mary Smith</h3>
                <p className={item.text}>Some quick example text to build on the card title 
                    and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
)

export default ContactItem;