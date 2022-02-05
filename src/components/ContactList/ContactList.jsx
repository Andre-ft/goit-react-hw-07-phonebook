import React from 'react';
import s from './ContactList.module.css';
import { deleteContact} from '../../redux/contacts/contacts-actions'
import { connect, useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { useFetchContactsQuery } from '../../redux/contacts/contactsSlice';
  
export default function ContactList() {

  // const getVisibleContacts = (allContacts, filter) => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return allContacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const contactList = useSelector(({ contacts: { filter, items } }) => getVisibleContacts(items, filter));
  const { data, isFetching } = useFetchContactsQuery();
  console.log('data', data);

  console.log('useFetchContactsQuery', useFetchContactsQuery)
  const contactList = data;
  // const contactList = useSelector(getVisibleContacts);
  // const dispatch = useDispatch();
  // const onDeleteContact =(id)=> dispatch(deleteContact(id))


  return (<>
    <ul className="contactList">
      {contactList.map(({ id, name, number }) => (
        <li key={id} className={s.contactList__item}>
          {name} : {number}
          <button
            type="button"
            className={s.deleteButton}
            // onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>)
};

// const mapStateToProps = ({contacts:{filter, items}}) => {

//   return {
//     contactList: getVisibleContacts(items, filter), 
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onDeleteContact: (id) => dispatch(deleteContact(id)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);