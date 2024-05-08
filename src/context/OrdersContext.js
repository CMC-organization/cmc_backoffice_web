import React, { createContext, useContext, useState } from 'react';
export const OrdersContext = createContext({});

export const OrdersProvider = ({ children }) => {
 const [openFilter, setOpenFilter] = useState(false);
 const [openExport, setOpenExport] = useState(false);

 const [value, setValue] = useState([0, 1000]);
 const [maxPrice, setMaxPrice] = useState(1000);
 const [minPrice, setMinPrice] = useState(0);

 return (
  <OrdersContext.Provider
   value={{
    openFilter,
    setOpenFilter,
    openExport,
    setOpenExport,
    value,
    setValue,
    maxPrice,
    setMaxPrice,
    minPrice,
    setMinPrice,
   }}
  >
   {children}
  </OrdersContext.Provider>
 );
};

export const useOrders = () => {
 return useContext(OrdersContext);
};
