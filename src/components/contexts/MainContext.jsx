import { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  // Navbar
  const [showSidebar, setShowSidebar] = useState(false);
  // Form Inputs
  const [isDisabled, setIsDisabled] = useState(true);
  // Fetched venues or artists previews
  const [fetchedPreviews, setFetchedPreviews] = useState([]);

  console.log(fetchedPreviews);

  return (
    <MainContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        isDisabled,
        setIsDisabled,
        fetchedPreviews,
        setFetchedPreviews,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
