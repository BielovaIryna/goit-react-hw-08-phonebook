import { Notify } from "notiflix";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";


export const ContactsForm =()=> {

	const [name, setName]= useState('');
	const [phone, setPhone]= useState('');

const contacts = useSelector(selectContacts);
const dispatch = useDispatch();


const handlerSubmit =(e) =>{
	e.preventDefault();

    const newContact = {name, phone};
	const hasDuplicates = contacts.some(
		cont => cont.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
	  );
	  if (hasDuplicates) {
		Notify.failure(`${newContact.name} already exists`);
		return;
	  }
 dispatch(addContact(newContact));
	
	setName("");
	setPhone("")
	
	
}
    const handleChange = (e) =>{
		const {name, value} = e.target;
		switch (name) {
			case "name": setName (value); 
			break;
			case "phone": setPhone (value);
			break;
			default:return;

		}
        
    }
  
	return (
	  <form  onSubmit ={handlerSubmit}>
		<label  >
			Name: <input type ="text"  name ="name" 
			value = {name} onChange={handleChange} pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" required></input>
		</label>
		<label >
			Phone: <input type="tel"  name = "phone" value = {phone} onChange={handleChange} pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}" required ></input>
		</label>
		<button type='submit' >Submit</button>
	  </form>
	)
  
}
