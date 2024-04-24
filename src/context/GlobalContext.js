import React, { createContext, useState } from 'react';
export const GlobalContext = createContext({});

function GlobalProvider({ children }) {
 const [searchInput, setSearchInput] = useState('');

 return (
  <GlobalContext.Provider
   value={{
    searchInput,
    setSearchInput,
   }}
  >
   {children}
  </GlobalContext.Provider>
 );
}

export default GlobalProvider;
