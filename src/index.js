import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { customTheme } from 'components/customTheme';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store = {store}>
      <BrowserRouter basename='/goit-react-hw-08-phonebook'>
      <PersistGate persistor ={persistor}>
        <ChakraProvider theme ={customTheme}>
          <ColorModeScript initialColorMode={customTheme.config.initialColorMode}/>
      
      <App />
      </ChakraProvider>
      </PersistGate>
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
);
