import React, { createContext, useContext, useState } from 'react';
export const AccessContext = createContext({});

export const AccessProvider = ({ children }) => {
 const [openEditDelete, setOpenEditDelete] = useState(false);
 const [openDelete, setOpenDelete] = useState(false);
 const [openUser, setOpenUser] = useState(false);

 return (
  <AccessContext.Provider
   value={{
    openEditDelete,
    setOpenEditDelete,
    openDelete,
    setOpenDelete,
    openUser,
    setOpenUser,
   }}
  >
   {children}
  </AccessContext.Provider>
 );
};

export const useAccess = () => {
 return useContext(AccessContext);
};
