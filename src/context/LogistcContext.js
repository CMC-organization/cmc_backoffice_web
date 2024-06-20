import React, { createContext, useContext, useState } from 'react';
export const LogistcContext = createContext({});

export const LogistcProvider = ({ children }) => {
 const [openFilter, setOpenFilter] = useState(false);

 return (
  <LogistcContext.Provider
   value={{
    openFilter,
    setOpenFilter,
   }}
  >
   {children}
  </LogistcContext.Provider>
 );
};

export const useLogistc = () => {
 return useContext(LogistcContext);
};
