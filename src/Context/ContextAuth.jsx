import React, { createContext } from 'react'

export const MyContext = createContext(null);

const ContextAuth = ({ children }) => {
    return (
        <MyContext.Provider value={10}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextAuth