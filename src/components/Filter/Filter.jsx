import React, {  useState, useContext } from 'react';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import Context from '../../contexts/context';
import s from './Filter.module.css';

export default function Filter() {
  const { filter, setFilter } = useContext(Context);
  const onChange = (e) => setFilter(e.currentTarget.value);
  return (
    <label className={s.filter}>
      Find contacts by name
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};
