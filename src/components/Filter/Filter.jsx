import React from 'react';
import { changeFilter} from '../../redux/contacts/contacts-actions'
import { connect } from 'react-redux';


const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

// export default Filter;

const mapStateToProps = state => ({
  value: state.contacts.filter
})

const mapDispatchToProps = dispatch => {
  return {
    onChange: (e)=> dispatch(changeFilter(e.currentTarget.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);