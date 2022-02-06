import React from 'react';
import s from './ContactListItem.module.css';
import { useFetchContactsQuery, useDeleteContactMutation } from '../../redux/contacts/contactsSlice';
import { Spinner } from '../Spinner/Spinner';


export const ContactListItem = ({id, name, number}) => {
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

    return (
         <li className={s.contactList__item}>
          {name} : {number}
          <button
            type="button"
            className={s.deleteButton}
            onClick={() => deleteContact(id)}
            disabled={isDeleting}
          >
            {isDeleting && <Spinner size={12} />}
            Delete
          </button>
        </li>
    )
}