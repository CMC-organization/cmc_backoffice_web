import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import reportWebVitals from './reportWebVitals';
import AppStack from './routes/AppStack';
import { GlobalProvider } from './context/GlobalContext';

import './index.css';
import { OrdersProvider } from './context/OrdersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <React.StrictMode>
  <GlobalProvider>
   <OrdersProvider>
    <ToastContainer />
    <AppStack />
   </OrdersProvider>
  </GlobalProvider>
 </React.StrictMode>,
);

reportWebVitals();
