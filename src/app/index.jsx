import React, { useContext } from 'react'
import { AppContext } from '../context/userContext'

function App2(){
    const {name,} = useContext(AppContext)
  return (
    <em>{name}</em>
  )
}

export default App2