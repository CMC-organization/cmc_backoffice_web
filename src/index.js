import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/fluent-light/theme.css';

import reportWebVitals from './reportWebVitals';
import AppStack from './routes/AppStack';
import { PrimeReactProvider } from 'primereact/api';
import { GlobalProvider } from './context/GlobalContext';

import './index.css';
import { OrdersProvider } from './context/OrdersContext';
import { ProductsProvider } from './context/ProductsContext';
import { ClientsProvider } from './context/ClientsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <React.StrictMode>
  <GlobalProvider>
   <OrdersProvider>
    <ProductsProvider>
    <ClientsProvider>
     <PrimeReactProvider>
      <ToastContainer />
      <AppStack />
     </PrimeReactProvider>
     </ClientsProvider>
    </ProductsProvider>
   </OrdersProvider>
  </GlobalProvider>
 </React.StrictMode>,
);

reportWebVitals();
