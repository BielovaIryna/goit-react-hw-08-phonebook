

import { selectFilter } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';


export const Filter = () => {
    const filter = useSelector(selectFilter)
  const dispatch = useDispatch();

  const filterContact = e => {
    dispatch(filterContacts(e.target.value.toLowerCase()));
    
    
  };

  return (
    <label>
      Find contacts by name:
      <input
        type="text"
        value={filter}
        placeholder="Search"
        onChange={filterContact}
      />
    </label>
  );
};
