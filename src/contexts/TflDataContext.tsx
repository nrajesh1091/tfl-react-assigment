
import type { TubeGroup } from "@models/tube-status-description";
import { createContext, useContext } from "react";


const TflData = createContext<TubeGroup|undefined>(undefined);

export const TflDataContext=({tflData , children})=>{

    return <TflData.Provider value={tflData}>
        {children}
    </TflData.Provider>
}

export const  useTflData = ()=>useContext(TflData);