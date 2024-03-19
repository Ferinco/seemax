import { createContext, useContext, useState } from "react";
const AppContext = createContext();
export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [movieId, setMovieId] = useState("");
  const [openTrailer, setTrailerOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isSearchOpen,
        setSearchOpen,
        query,
        setQuery,
        openTrailer,
        setTrailerOpen,
        movieId,
        setMovieId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
