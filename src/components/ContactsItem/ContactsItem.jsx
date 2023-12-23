import { Avatar, Flex, IconButton, ListItem, Text } from "@chakra-ui/react"
import { MdDeleteForever } from "react-icons/md";
export const ContactsItem = ({contact, del}) =>{
	return(
	<ListItem mb={2}>
		<Flex gap ={2} alignItems='center'>
	<Avatar size='sm'/>
	<Text>{contact.name}:</Text>
	 <Text>{contact.number}</Text>
	 <IconButton size='md' type="button" onClick={del} icon={<MdDeleteForever/>} variant='baseStyle'/>
	 </Flex>
	 </ListItem>
	
	)
}