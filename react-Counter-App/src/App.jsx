import { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);

  const increase=()=>{
    setCount(prev=>prev+1);
  }
  const decrease=()=>{
    setCount(prev=>prev-1);
  }
  const reset=()=>{
    setCount(0);
  }
  return (
    <div style={{
      textAlign:"center",
      marginTop:"100px"
    }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App

