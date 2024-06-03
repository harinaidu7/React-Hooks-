import { createContext, useContext } from "react"

export const AppContext = createContext();

const ContextProvider =(props)=>{
    
    const phone = "+91 9321134777"
    const contextValue = useContext(AppContext);
    return(
        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider> 
    )
}
export default ContextProvider;