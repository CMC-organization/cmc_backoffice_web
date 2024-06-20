import React, { createContext, useContext, useState } from 'react';
export const ManufacturingContext = createContext({});

export const ManufacturingProvider = ({ children }) => {
 const [openActions, setOpenActions] = useState(false);
 const [openDelete, setOpenDelete] = useState(false);

 return (
  <ManufacturingContext.Provider
   value={{
    openActions,
    setOpenActions,
    openDelete,
    setOpenDelete,
   }}
  >
   {children}
  </ManufacturingContext.Provider>
 );
};

export const useManufacturing = () => {
 return useContext(ManufacturingContext);
};
