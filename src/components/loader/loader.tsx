import { LoaderContext } from "@contexts/loader-context";
import React, { useState, type ReactNode, type CSSProperties } from "react";
import { ClipLoader } from "react-spinners";


type LoaderProviderProps = {
  children: ReactNode;
};

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const contextValue: LoaderContext = {
    showLoader: () => setIsVisible(true),
    hideLoader: () => setIsVisible(false),
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
