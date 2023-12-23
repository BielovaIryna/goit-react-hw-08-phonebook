import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectContacts, selectError, selectIsLoading } from "redux/contacts/selectors";
import { ContactsForm } from "./ContactsForm/ContactsForm";
import Loader from "./Loader/Loader";
import { Filter } from "./filter/Filter";
import { ContactList } from "./ContactsList/ContactsList";




export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading =useSelector(selectIsLoading);
  const error = useSelector(selectError)
const dispatch = useDispatch();
useEffect (()=>{
  dispatch(fetchContacts())
  
},[dispatch])
  return (
    <div >
      <h1 > Phonebook</h1>
      <ContactsForm />
      {error!==null&& <p>error</p>}
			{isLoading&&<Loader/>}
     {contacts.length >0 ? (<div>
      <h2 >Contacts</h2>
     
          <Filter /> 
    <ContactList/>
      </div>) :<p>Unfortunately you don't have any contacts in your Phonebook</p>} 
      
      
    </div>
  );
};
