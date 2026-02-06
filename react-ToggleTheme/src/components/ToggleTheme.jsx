import React from 'react'

const ToggleTheme = (props) => {
  return (
    <div>
      <button onClick={props.toggleTheme}
      style={{
        padding:"10px 15px",
        fontWeight:"bold",
        borderRadius:"5px",
        margin:"5px"
      }}>Toggle Theme!</button>
    </div>
  )
}

export default ToggleTheme
