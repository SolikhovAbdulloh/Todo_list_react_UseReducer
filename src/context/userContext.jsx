import React, { useState } from 'react'
import { createContext } from 'react'

const AppContext = createContext({})

function UserContextProvider({children}){

    const [name , setName] = useState('Solikhov')
    return <AppContext.Provider value={{name,setName}}>
            {children}
    </AppContext.Provider>
}

export {UserContextProvider , AppContext}