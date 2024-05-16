import React, { createContext, useContext, useState } from 'react';
export const ClientsContext = createContext({});

export const ClientsProvider = ({ children }) => {
 const [openApproved, setOpenApproved] = useState(false);
 const [openActions, setOpenActions] = useState(false);
 const [openDelete, setOpenDelete] = useState(false);
 const [openEdit, setOpenEdit] = useState(false);
 const [openNewClient, setOpenNewClient] = useState(false);

 return (
  <ClientsContext.Provider
   value={{
    openApproved,
    setOpenApproved,
    openActions,
    setOpenActions,
    openDelete,
    setOpenDelete,
    openEdit,
    setOpenEdit,
    openNewClient,
    setOpenNewClient,
   }}
  >
   {children}
  </ClientsContext.Provider>
 );
};

export const useClients = () => {
 return useContext(ClientsContext);
};
