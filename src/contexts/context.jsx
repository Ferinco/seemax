import { createContext, useContext, useState } from "react";
const AppContext = createContext();
export function AppProvider({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    return (
      <AppContext.Provider
        value={{
          isSidebarOpen,
          setIsSidebarOpen,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
  export function useAppContext() {
    return useContext(AppContext);
  }