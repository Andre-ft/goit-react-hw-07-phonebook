import React, {  useState } from 'react';
import shortid from 'shortid';
import { connect, useSelector, useDispatch } from 'react-redux';
import s from './ContactForm.module.css';
import {addContact, deleteContact, changeFilter} from '../../redux/contacts/contacts-actions'
import { getItems } from '../../redux/contacts/contacts-selectors';
import { useFetchContactsQuery, useCreateContactMutation } from '../../redux/contacts/contactsSlice';
import { Spinner } from '../Spinner/Spinner';
import  toast, { Toaster }  from 'react-hot-toast';

export default function ContactForm() {
   
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [btnEnable, setBtnEnable] = useState(true);
    
  const { data, isFetching } = useFetchContactsQuery();
  const [createContact, { isLoading, isSuccess }] = useCreateContactMutation();
  
  const onSubmit = () => createContact({ name, number });
  
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const checkName = (name) => {
    
    const check = data ? data.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    ) : false;

    if (check) {
      setBtnEnable(false);
      alert(`${name} is already in contacts`);
      return;
    }

    setBtnEnable(true);
  }

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    name === 'name' && checkName(value);

    switch (name) {
      case 'name': setName(value);        
        break;

      case 'number': setNumber(value);
        break;

      default:
        break;
    }
  };

  const containerStyle = {
    duration: 3000,
    position: 'top-right',
    style: {
      background: 'lawngreen',
     },
  }

  const handleSubmit = e => {
    e.preventDefault();
    toast('Contact added', containerStyle);

    onSubmit({name, number});
    
    setName('');
    setNumber('');

  };


    return (<>
      <Toaster />
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor={nameInputId} className={s.input}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            id={nameInputId}
          />
        </label>

        <label htmlFor={numberInputId} className={s.input}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            id={numberInputId}
          />
        </label>
        <button
          type="submit"
          className={s.button}
          disabled={!btnEnable || isLoading}
        >
          {isLoading && <Spinner size={12} />}
          Add contact
        </button>
      </form>
      </>
    );
}
