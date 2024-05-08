import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import reportWebVitals from './reportWebVitals';
import AppStack from './routes/AppStack';
import { PrimeReactProvider } from 'primereact/api';
import { GlobalProvider } from './context/GlobalContext';

import './index.css';
import { OrdersProvider } from './context/OrdersContext';
import { ProductsProvider } from './context/ProductsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <React.StrictMode>
  <GlobalProvider>
   <OrdersProvider>
    <ProductsProvider>
     <PrimeReactProvider>
      <ToastContainer />
      <AppStack />
     </PrimeReactProvider>
    </ProductsProvider>
   </OrdersProvider>
  </GlobalProvider>
 </React.StrictMode>,
);

reportWebVitals();
