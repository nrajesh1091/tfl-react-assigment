import type { AppConfig } from "@models/AppConfig";
import { createContext, useContext } from "react";


const AppConfigGlobalContext = createContext<AppConfig|null>(null);

export const AppConfigContext = ({AppConfigData ,children})=>{

    return (
        <AppConfigGlobalContext.Provider value={AppConfigData}>
            {children}
        </AppConfigGlobalContext.Provider>
    )
}
export const useAppConfig =()=> useContext(AppConfigGlobalContext);