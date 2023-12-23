
export const ContactsItem = ({contact, del}) =>{
	return(
	<li >{contact.name}:
	 <span >{contact.phone}</span>
	 <button type="button"  onClick={del}>Delete</button>
	 </li>
	
	)
}