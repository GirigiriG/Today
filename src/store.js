/* eslint-disable no-unused-vars */
import React, {createContext, useContext, useReducer} from 'react'
import reducer, {initialState} from './reducer/reducer'

export const ProjectContext = createContext();

export const ProjectProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <ProjectContext.Provider value={{state, dispatch}}>
            {children}
        </ProjectContext.Provider>
    )
}

export const useStore = () => useContext(ProjectContext)