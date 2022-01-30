import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import s from './App.module.css';
import shortid from 'shortid';
import * as actions from './redux/contacts/contacts-actions';
// import { addContact, deleteContact, changeFilter };

function App({ contacts, filter, addContact, deleteContact }) {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // вместо useEffect используем persist
  /*useEffect(() => {
    if (!contacts.length) {
      const savedContacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(savedContacts);

      if (parsedContacts) {
        parsedContacts.map(({ name, number }) => addContact({ name, number }));
        // setContacts(parsedContacts);
      }
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);
  */

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   setContacts([contact, ...contacts]);
  // };
  /*
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
*/

  // const deleteContact = contactId => {
  //   const newContacts = contacts.filter(contact => contact.id !== contactId);
  //   setContacts(newContacts);
  // };

  // const visibleContacts = getVisibleContacts();

  return (
    <div className={s.App}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList /*contactList={getVisibleContacts}*/ />
    </div>
  );
}

// export default App;

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  addContact: ({ name, number }) =>
    dispatch(actions.addContact({ name, number })),
  deleteContact: () => dispatch(actions.deleteContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
