import { createContext, useContext } from "react";

export type LoaderContext = {
  showLoader: () => void;
  hideLoader: () => void;
};

export const LoaderContext = createContext<LoaderContext | undefined>(
  undefined
);

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) throw new Error("useLoader must be used within LoaderProvider");
  return context;
};
