import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import Loader from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';
import { MainContainer } from 'components/MainContainer';
import { Heading } from '@chakra-ui/react';



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
        <div>
          <Heading as ='h2' size ='2xl' textTransform='uppercase' textAlign='center' mb={4}>Contacts</Heading>

          <Filter />
          <ContactList />
        </div>
      ) : (
        <p>Unfortunately you don't have any contacts in your Phonebook</p>
      )}
    </MainContainer>
  );
};
export default Contacts;