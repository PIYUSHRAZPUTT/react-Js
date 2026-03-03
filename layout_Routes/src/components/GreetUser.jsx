import React from 'react'
import { useSearchParams } from 'react-router-dom'

const GreetUser = () => {
    const [searchParams, setSearchParams]=useSearchParams();
    const name= searchParams.get('name');
    const handleClick=()=>{
        setSearchParams({name:'Piyush'})
    }
  return (
    <>
    <h1>Hello, {name}</h1>
    <button onClick={handleClick}>set the value of searchParams</button>
      
    </>
  )
}

export default GreetUser
