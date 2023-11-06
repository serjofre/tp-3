import { createContext, useEffect, useState } from "react";

export const AppContext =createContext();

export const AppProvider = ({children})=> {
    const [opciones, setOpciones] = useState([]);
    console.log(opciones);

    useEffect(()=> {
        fetch('')
    })

    const data = {};
    return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};