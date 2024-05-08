import React, { createContext, useContext, useState } from 'react';
export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
 const [openFilter, setOpenFilter] = useState(false);
 const [openCategories, setOpenCategories] = useState(false);
 const [openCoupons, setOpenCoupons] = useState(false);

 const [value, setValue] = useState([0, 1000]);
 const [maxPrice, setMaxPrice] = useState(1000);
 const [minPrice, setMinPrice] = useState(0);

 return (
  <ProductsContext.Provider
   value={{
    openFilter,
    setOpenFilter,
    openCategories,
    setOpenCategories,
    openCoupons,
    setOpenCoupons,
    value,
    setValue,
    maxPrice,
    setMaxPrice,
    minPrice,
    setMinPrice,
   }}
  >
   {children}
  </ProductsContext.Provider>
 );
};

export const useProducts = () => {
 return useContext(ProductsContext);
};
