import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/fluent-light/theme.css';

import { PrimeReactProvider } from 'primereact/api';
import { GlobalProvider } from './context/GlobalContext';
import { OrdersProvider } from './context/OrdersContext';
import { ProductsProvider } from './context/ProductsContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppStack from './routes/AppStack';

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
