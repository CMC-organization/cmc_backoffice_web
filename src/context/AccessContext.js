import React, { createContext, useContext, useState } from 'react';
export const AccessContext = createContext({});

export const AccessProvider = ({ children }) => {
 const [openEditDelete, setOpenEditDelete] = useState(false);
 const [openDelete, setOpenDelete] = useState(false);

 return (
  <AccessContext.Provider
   value={{
    openEditDelete,
    setOpenEditDelete,
    openDelete,
    setOpenDelete,
   }}
  >
   {children}
  </AccessContext.Provider>
 );
};

export const useAccess = () => {
 return useContext(AccessContext);
};
