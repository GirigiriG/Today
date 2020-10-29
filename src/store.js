/* eslint-disable no-unused-vars */
import React, {createContext, useContext, useReducer} from 'react'
import reducer from './reducer'
const initialState = {count: 0, message: "HELLO WORLD"};

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
   
    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}
export const useStore = () => useContext(StoreContext)
