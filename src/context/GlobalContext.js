import React, { createContext, useContext, useState } from 'react';
export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
 const [searchInput, setSearchInput] = useState('');

 const [orders, setOrders] = useState(true);
 const [products, setProducts] = useState(false);
 const [clients, setClients] = useState(false);
 const [purchases, setPurchases] = useState(false);
 const [access, setAccess] = useState(false);

 return (
  <GlobalContext.Provider
   value={{
    searchInput,
    setSearchInput,
    orders,
    setOrders,
    products,
    setProducts,
    clients,
    setClients,
    purchases,
    setPurchases,
    access,
    setAccess,
   }}
  >
   {children}
  </GlobalContext.Provider>
 );
};

export const useGlobal = () => {
 return useContext(GlobalContext);
};
