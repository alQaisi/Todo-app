import { useState, createContext } from "react";

export const UiContext=createContext({});

export function UiProvider({children}){
    const [currentPage,setCurrentPage]=useState(false);
    const value={currentPage,setCurrentPage}
    return(
        <UiContext.Provider value={value}>{children}</UiContext.Provider>
    );
}