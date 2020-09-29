import React from 'react';
import ContactItem from './ContactItem';

const Contacts = ({ contacts }) => (
    <>
        <h2>Contacts</h2>
        {contacts.map(item => <ContactItem name={item.name} id={item.id}/>)}
    </>
)

export default Contacts;