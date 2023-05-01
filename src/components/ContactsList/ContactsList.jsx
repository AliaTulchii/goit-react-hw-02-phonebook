import React from 'react';
import css from './ContactsList.module.css'
import {FaTrashAlt} from 'react-icons/fa'


const ContactListItem = ({ id, name, number, onDelete }) => {
    return (
        <li key={id}
                className={css.ContactsList__item}>                
                <p className={css.TodoList__text}>{name}</p>
                <p className={css.TodoList__text}>{number}</p>
                <button
                    className={css.TodoList__button}
                    onClick={() => onDelete(id)}
                ><FaTrashAlt /></button>
            </li>)
   
}

const ContactList = ({ contacts, onDelete }) => {
    if (contacts.length === 0) return null
    return (
        <ul>
            {contacts.map(contact => <ContactListItem {...contact} onDelete={onDelete} />)}
        </ul>
    )
}

export default ContactList;