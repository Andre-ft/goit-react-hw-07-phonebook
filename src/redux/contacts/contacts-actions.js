import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
// import types from './contacts-types';

// export const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

// prepareCallback
export const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

// export const deleteContact = id => ({
//   type: types.DELETE,
//   payload: id,
// });

export const deleteContact = createAction('contacts/delete');

// export const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export const changeFilter = createAction('contacts/changeFilter');

// export default { addContact, deleteContact, changeFilter };
