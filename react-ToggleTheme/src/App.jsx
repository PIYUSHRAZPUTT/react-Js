import React, { useState } from 'react'
import ToggleTheme from './components/ToggleTheme'

const App = () => {
  const[darkMode, setDarkMode]=useState(false);
  const toggleTheme=()=>{
    setDarkMode(prev=>!prev);
  }
  return (
    <div style={{
      height:"100vh",
      backgroundColor:darkMode?"#222":"#fff",
      color:darkMode?"#fff":"#222",
      textAlign:"center",
      paddingTop:"100px",
      transition:"0.3s"
    }}>
      <h1>Toggle Theme</h1>
      <ToggleTheme toggleTheme={toggleTheme}/>
    </div>
  )
}

export default App
