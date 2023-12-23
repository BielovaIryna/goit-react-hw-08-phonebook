import { FormControl, FormLabel, Input, useColorModeValue } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { filterContacts } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const bc =useColorModeValue('pink.500', 'pink.900')

  const filterContact = e => {
    dispatch(filterContacts(e.target.value.toLowerCase()));
  };

  return (
    <FormControl maxW='xs'>
    <FormLabel mr={4}>
      Find contacts by name:</FormLabel>
      <Input
        type="text"
        value={filter}
        placeholder="Search"
        onChange={filterContact}
        size={['sm', null, 'sm','md','lg']}
        focusBorderColor={bc}
        mb={4}
        
      />
    </FormControl>
    
  );
};
