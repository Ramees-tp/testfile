import { createContext, useContext, useState } from "react";

const SearchContext = createContext();
export const useSearch = () => useContext(SearchContext)

export const SearchProvider  = ({ children }) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput  }}>
      {children}
    </SearchContext.Provider>
  );
};
   
