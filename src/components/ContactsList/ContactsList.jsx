import { ContactsItem } from "components/ContactsItem/ContactsItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { selectVisibleContacts } from "redux/contacts/selectors";


export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
   const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    
  };
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactsItem
            key={contact.id}
            contact={contact}
            del={() => handleDeleteContact(contact.id)}
          />
        );
      })}
    </ul>
  );
};
