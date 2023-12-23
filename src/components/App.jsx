import { Suspense, lazy, useEffect } from 'react';
import * as ROUTES from 'constants/appRoutes.js';
import { RestrictedRoutes } from './RestrictedRoutes';
import { PrivateRoute } from './PrivateRoute';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/auth/authOperations';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';

const Register = lazy(() => import('pages/Registr/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Home = lazy(() => import('pages/Home/Home'));

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <Home />,
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: <RestrictedRoutes><Register /></RestrictedRoutes> ,
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    element:<RestrictedRoutes><Login /></RestrictedRoutes> ,
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element:<PrivateRoute><Contacts /></PrivateRoute> ,
  },
];
export const App = () => {
  const bg = useColorModeValue('linear(to-l, pink.600, pink.900)', 'linear(to-l, pink.200, pink.500)')
  const color = useColorModeValue('white', 'pink.900')
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <div>
     
      <Box w='100%' h='100vh' bgGradient ={bg} color={color}>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}

            <Route path="*" element={<Navigate to ='./' />} />
          </Routes>
        </Suspense>
      </Layout>
      </Box>
      
    </div>
  );
};
