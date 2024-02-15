import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  //2 component import krane hai, aur wo 2 component kaise data access krenge? woh humnei component k anadr hi handle krliya hai
  return (
    <UserContextProvider>
     <h1>React with Chai and share is imp</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
