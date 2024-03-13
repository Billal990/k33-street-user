import { createContext, useState } from "react";
export const loaderContext = createContext();
export default function LoaderProvider({children}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  
  return (
    <loaderContext.Provider value={{isLoading, setIsLoading, isError, setIsError}}>
      {children}
    </loaderContext.Provider>
  );
}
