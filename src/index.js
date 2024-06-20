import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/fluent-light/theme.css';
import 'react-circular-progressbar/dist/styles.css';

import { PrimeReactProvider } from 'primereact/api';
import { GlobalProvider } from './context/GlobalContext';
import { OrdersProvider } from './context/OrdersContext';
import { ProductsProvider } from './context/ProductsContext';
import { AccessProvider } from './context/AccessContext';
import { ClientsProvider } from './context/ClientsContext';
import { ManufacturingProvider } from './context/Manufacturing';
import { PurchaseProvider } from './context/PurchasesContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppStack from './routes/AppStack';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <React.StrictMode>
  <GlobalProvider>
   <OrdersProvider>
    <ProductsProvider>
     <PurchaseProvider>
      <AccessProvider>
       <ClientsProvider>
        <ManufacturingProvider>
         <PrimeReactProvider>
          <ToastContainer />
          <AppStack />
         </PrimeReactProvider>
        </ManufacturingProvider>
       </ClientsProvider>
      </AccessProvider>
     </PurchaseProvider>
    </ProductsProvider>
   </OrdersProvider>
  </GlobalProvider>
 </React.StrictMode>,
);

reportWebVitals();
