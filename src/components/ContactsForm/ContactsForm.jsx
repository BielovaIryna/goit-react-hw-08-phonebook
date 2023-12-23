import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Notify } from 'notiflix';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Button, FormControl, FormLabel, Input, useColorModeValue } from '@chakra-ui/react';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
const bc =useColorModeValue('pink.500', 'pink.900')
  const handlerSubmit = e => {
    e.preventDefault();

    const newContact = { name, number };
    const hasDuplicates = contacts.some(
      cont =>
        cont.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
    );
    if (hasDuplicates) {
      Notify.failure(`${newContact.name} already exists`);
      return;
    }
    dispatch(addContact(newContact));
console.log(newContact);
    setName('');
    setPhone('');
  };
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  return (
     <FormControl isRequired as ='form' onSubmit={handlerSubmit} mb={4}  maxW='xs'>
      <FormLabel mb={2}>
        Name:{' '}</FormLabel>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          mb={2}
          placeholder='Andre Tan'
          size={['sm', null, 'sm','md','lg']}
          focusBorderColor={bc}
         
        />
      
      <FormLabel mb={2} >
        Phone:{' '}</FormLabel>
        <Input
          type="tel"
          name="phone"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
          placeholder='+380632535566'
          mb={2}
          size={['sm', null, 'sm','md','lg']}
          focusBorderColor={bc}
        />
    
      <Button type="submit" variant='baseStyle'>
        Submit
      </Button>
    </FormControl>
  );
};
