import React from 'react';
import s from './ContactList.module.css';
import { deleteContact} from '../../redux/contacts/contacts-actions'
import { connect } from 'react-redux';

  
const ContactList = ({ contactList, onDeleteContact, filter }) => {

  return (<>
    <ul className="contactList">
      {contactList.map(({ id, name, number }) => (
        <li key={id} className={s.contactList__item}>
          {name} : {number}
          <button
            type="button"
            className={s.deleteButton}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>)
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
}


const mapStateToProps = ({contacts:{filter, items}}) => {

  return {
    contactList: getVisibleContacts(items, filter), 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: (id) => dispatch(deleteContact(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);