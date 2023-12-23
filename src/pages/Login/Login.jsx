import { Button, FormControl, FormLabel, Input, useColorModeValue } from '@chakra-ui/react';
import { MainContainer } from 'components/MainContainer';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';

export default function Login() {
	const dispatch = useDispatch();
  const bc =useColorModeValue('pink.500', 'pink.900')
  const onSubmit = e => {
    e.preventDefault();
   
   
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const formData = {
      email,
      password,
    };
    dispatch(loginThunk(formData));
	
  };
  return (
    <MainContainer>
    <FormControl as="form" isRequired onSubmit={onSubmit} maxW='xs'>
      <FormLabel mb={2}>
        Mail:</FormLabel>
        <Input
          type="email"
          name="userEmail"
          placeholder="user@gmail.com"
          required
          size={['sm', null, 'sm','md','lg']}
          focusBorderColor={bc}
          mb={2}
          
        />
      
      <FormLabel mb={2}>
        Pasword:</FormLabel>
        <Input
          type="text"
          name="userPassword"
          placeholder="*******"
          minLength={6}
          required
          size={['sm', null, 'sm','md','lg']}
          focusBorderColor={bc}
          mb={2}
        />
     
      <Button as='button' variant='baseStyle' type="submit">Sign In</Button>
    </FormControl>
    </MainContainer>
  );
}
