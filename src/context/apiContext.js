import { createContext } from "react";

export const ApiContext = createContext()

export const ApiProvider = ({children}) => {

    /* UseEffect para la petición */
    return (
        <ApiContext.Provider value={{}}>
            {children}
        </ApiContext.Provider>
    )
}