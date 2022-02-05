import React from 'react';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';


export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

// export default Filter;

// const mapStateToProps = state => ({
//   value: state.contacts.filter
// })

// const mapDispatchToProps = dispatch => {
//   return {
//     onChange: (e)=> dispatch(changeFilter(e.currentTarget.value))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);