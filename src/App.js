import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import s from './App.module.css';
import shortid from 'shortid';
import * as actions from './redux/contacts/contacts-actions';

export const App = () => {
  
  return (
    <div className={s.App}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
