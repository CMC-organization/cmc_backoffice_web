import React, { createContext, useContext, useState } from 'react';
export const PurchaseContext = createContext({});

export const PurchaseProvider = ({ children }) => {
    const [openFilter, setOpenFilter] = useState(false);
    const [openCategories, setOpenCategories] = useState(false);
    const [openAddSupplier, setOpenAddSupplier] = useState(false);
    const [openNewPurchase, setOpenNewPurchase] = useState(false);
    const [openActions, setOpenAction] = useState(false);

    const [value, setValue] = useState([0, 1000]);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [minPrice, setMinPrice] = useState(0);
   
 return (
  <PurchaseContext.Provider
   value={{
    openFilter,
    setOpenFilter,
    openCategories,
    setOpenCategories,
    openAddSupplier,
    setOpenAddSupplier,
    openNewPurchase,
    setOpenNewPurchase,
    openActions,
    setOpenAction,
    value,
    setValue,
    maxPrice,
    setMaxPrice,
    minPrice,
    setMinPrice,
   }}
  >
   {children}
  </PurchaseContext.Provider>
 );
};

export const usePurchases = () => {
 return useContext(PurchaseContext);
};
