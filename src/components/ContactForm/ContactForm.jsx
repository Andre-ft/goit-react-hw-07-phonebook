import React, {  useState } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import s from './ContactForm.module.css';
import {addContact, deleteContact, changeFilter} from '../../redux/contacts/contacts-actions'

function ContactForm({onSubmit, contactList}) {
  // state = {
  //   name: '',
  //   number: '',
  //   btnEnable: true,
  // };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [btnEnable, setBtnEnable] = useState(true);

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const checkName = (name)=> {
    const check = contactList.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
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

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({name, number});

    setName('');
    setNumber('');
  };

    return (
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
          disabled={!btnEnable}
        >
          Add contact
        </button>
      </form>
    );
}

// export default ContactForm;

const mapStateToProps = state =>{
 return {
   contactList: state.contacts.items,

 }
}
const mapDispatchToProps = dispatch => {
return {
    onSubmit: ({name, number}) => dispatch(addContact({name, number}))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);