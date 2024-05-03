import React, { createContext, useContext, useState } from 'react';
export const OrdersContext = createContext({});

export const OrdersProvider = ({ children }) => {
 const [openFilter, setOpenFilter] = useState(false);

 return (
  <OrdersContext.Provider
   value={{
    openFilter,
    setOpenFilter,
   }}
  >
   {children}
  </OrdersContext.Provider>
 );
};

export const useOrders = () => {
 return useContext(OrdersContext);
};
