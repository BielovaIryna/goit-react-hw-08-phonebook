import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import Loader from 'components/Loader/Loader';

import { ContactList } from 'components/ContactsList/ContactsList';
import { MainContainer } from 'components/MainContainer';
import { Box, Heading, Text } from '@chakra-ui/react';



const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <MainContainer>
      <Heading as='h1' size='3xl' textTransform='uppercase' textAlign='center' mb={4}> Phonebook</Heading>
      <ContactsForm />
      {error !== null && <p>error</p>}
      {isLoading && <Loader />}
      {contacts.length > 0 ? (
        <Box>
          <Heading as ='h2' size ='2xl' textTransform='uppercase' textAlign='center' mb={4}>Contacts</Heading>

        
          <ContactList />
        </Box>
      ) : (
        <Text>Unfortunately you don't have any contacts in your Phonebook</Text>
      )}
    </MainContainer>
  );
};
export default Contacts;
