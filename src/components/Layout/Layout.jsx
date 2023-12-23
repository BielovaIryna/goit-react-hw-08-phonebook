import { useSelector } from 'react-redux';

import { selectUserAuth } from 'redux/auth/authSelectors';
import { Box, Flex, Button, Spacer} from '@chakra-ui/react';
import {FaHome} from 'react-icons/fa';
import { IoLogIn } from "react-icons/io5";
import { MdImportContacts, MdAppRegistration } from "react-icons/md"
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import { MainContainer } from 'components/MainContainer';
import UserMenu from 'components/UserMenu/UserMenu';

const { NavLink } = require('react-router-dom');

const Layout = ({ children }) => {
  const isSignIn = useSelector(selectUserAuth);
  return (
    <>
      <Box as= "header" mb={4}>
        <MainContainer>
        <Flex gap='2'>
          <ColorModeSwitcher/>
          <Flex as ="nav"  gap='2' width="full" wrap='wrap'>
         <Button leftIcon={<FaHome/>}  variant='baseStyle'> <NavLink to="/" end>
            Home
          </NavLink>
          </Button>
          <Spacer/>
          {isSignIn ? (
            <>
              
              <Button leftIcon={<MdImportContacts/>} variant='baseStyle'><NavLink to="/contacts">Contacts</NavLink></Button>
              
              <UserMenu/>
            </>
          ) : (
            <>
           
              <Button leftIcon={<IoLogIn/>} variant='baseStyle'><NavLink to="/login">Login</NavLink></Button>
              <Button leftIcon={<MdAppRegistration/>} variant='baseStyle' ><NavLink to="/register">Registration</NavLink></Button>
            </>
          )}
          </Flex>
         </Flex>
        </MainContainer>
        </Box>
      <main>{children}</main>
    </>
  );
};
export default Layout;
