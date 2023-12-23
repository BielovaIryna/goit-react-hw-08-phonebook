import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react'
import { IoLogOut } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/authOperations';
import { selectUser} from 'redux/auth/authSelectors';

function UserMenu() {
	const dispatch = useDispatch()
	
	const user = useSelector(selectUser);
	const onLogOut =()=>{
  dispatch(logoutThunk())
	}
  return (
	<Box as ="div">
                <Text as ="span" mr={2}> {user.email}</Text>
                <Button leftIcon={<IoLogOut/>} variant='baseStyle' as ='button' onClick={onLogOut}>Log Out</Button>
              </Box>
  )
}

export default UserMenu