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
      <FormControl onSubmit={onSubmit} maxW='xs'>
        <FormLabel mb={2}>
          Name:
          <Input
            type="text"
            name="userName"
            placeholder="Andre Onana"
            required
            size={['sm', null, 'sm','md','lg']}
          focusBorderColor={bc}
          mb={2}
          />
        </FormLabel>
        <FormLabel>
          Mail:
          <Input
            type="email"
            name="userEmail"
            placeholder="user@gmail.com"
            required
            size={['sm', null, 'sm','md','lg']}
          focusBorderColor={bc}
          mb={2}
          />
        </FormLabel>
        <FormLabel mb={2}>
          Password:
          <Input
            type="text"
            name="userPassword"
            placeholder="*******"
            required
            size={['sm', null, 'sm','md','lg']}
          focusBorderColor={bc}
          mb={2}
          ></Input>
        </FormLabel>
        <Button variant='baseStyle' type="submit">Sign Up</Button>
      </FormControl>
    </MainContainer>
  );
}
