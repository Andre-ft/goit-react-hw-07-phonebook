import React, {useContext} from 'react';
import s from './ContactList.module.css';
import { useFetchContactsQuery, useDeleteContactMutation } from '../../redux/contacts/contactsSlice';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import Context from '../../contexts/context';


export default function ContactList() {
  const { filter } = useContext(Context);
  const { data, isFetching } = useFetchContactsQuery();

  const getVisibleContacts = (arr, value) => {
    const normalizedFilter = value.toLowerCase();

    return arr.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  
  return (<>
    <ul className={s.contactList__item}>
      {data && getVisibleContacts(data, filter).map((contact) => (
        < ContactListItem key={contact.id} {...contact} />
      ))}
    </ul>
  </>)
};
