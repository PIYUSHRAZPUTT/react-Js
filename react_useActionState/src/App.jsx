import './App.css'
import React from 'react'

function App() {
  function saveName(prevState, formData){
    console.log(prevState);

    const name=formData.get("name");
    return `Hello ${name}`;
  }

  const [message, formAction, isPending]=React.useActionState(saveName, "");

  return (
    <>
      <form action={formAction}  style={{
        display:"flex",
        flexDirection:"column",
        gap:"10px"
      }}>
        <input type="text" name='name' placeholder='Enter your name'  style={{padding:"7px 15px"}} />
        <button type='submit'>Greeting</button>
        {isPending?"Loading....":message}
      </form>
    </>
  )
}

export default App
