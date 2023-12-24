import { Button, FormControl, FormLabel, Input, useColorModeValue } from '@chakra-ui/react';
import { MainContainer } from 'components/MainContainer';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';

export default function Register() {
  const dispatch = useDispatch();
  const bc =useColorModeValue('pink.500', 'pink.900')
  const onSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };
    console.log(formData);
    dispatch(registerThunk(formData));
  };
  return (
    <MainContainer>
      <FormControl isRequired as ='form' onSubmit={onSubmit} maxW='xs'>
        <FormLabel mb={2}>
          Name: </FormLabel>
          <Input
          as="input"
            type="text"
            name="userName"
            placeholder="Andre Onana"
            required
            size={['sm', null, 'sm','md','lg']}
          focusBorderColor={bc}
          mb={2}
          />
       
        <FormLabel mb={2}>
          Mail: </FormLabel>
          <Input
          as="input"
            type="email"
            name="userEmail"
            placeholder="user@gmail.com"
            required
            size={['sm', null, 'sm','md','lg']}
          focusBorderColor={bc}
          mb={2}
          />
       
        <FormLabel mb={2}>
          Password: </FormLabel>
          <Input
          as="input"
            type="password"
            name="userPassword"
            placeholder="*******"
            required
            size={['sm', null, 'sm','md','lg']}
          focusBorderColor={bc}
          mb={2}
          />
        
        <Button variant='baseStyle' type="submit">Sign Up</Button>
      </FormControl>
    </MainContainer>
  );
}
