import { createContext, useContext, useState } from "react";
const AppContext = createContext();
export function AppProvider({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [ isSearchOpen, setSearchOpen] = useState(false)
  
    return (
      <AppContext.Provider
        value={{
          isSidebarOpen,
          setIsSidebarOpen,
          isSearchOpen,
          setSearchOpen
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
  export function useAppContext() {
    return useContext(AppContext);
  }