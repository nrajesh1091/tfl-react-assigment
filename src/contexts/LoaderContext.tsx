import React, { createContext, useState, type ReactNode, type CSSProperties, useContext } from 'react';
import { ClipLoader } from "react-spinners";

type LoaderContext = {
  showLoader: () => void;
  hideLoader: () => void;
};

type LoaderContextProvider = {
  children: ReactNode;
};
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const LoaderContext = createContext<LoaderContext | undefined>(
  undefined
);

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) throw new Error("useLoader must be used within LoaderProvider");
  return context;
};

export const LoaderProvider: React.FC<LoaderContextProvider> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const contextValue: LoaderContext = {
    showLoader: () => {
      setIsVisible(true);
    },
    hideLoader: () => {
      setIsVisible(false);
    },
  };

  return (
    <LoaderContext.Provider value={contextValue}>
      {children}
      <ClipLoader
        color={"#ffffff"}
        loading={isVisible}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

    </LoaderContext.Provider>
  );
};