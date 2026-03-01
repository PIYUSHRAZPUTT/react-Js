import { useState } from 'react'
import './App.css'
import {z} from "zod";

const schema=z.object({
  name:z.string().min(1, "Name is required"),
  email:z.string().email("Invalid email"),
  phone:z.string().regex(/^\d{10}$/, "phone number has to be of 10 digits"),
});

function App() {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [phone, setPhone]=useState("");
  const [error, setError]=useState({});

  const handleSubmit=(e)=>{
    e.preventDefault();
    const result= schema.safeParse({name, email, phone});
    if(result.success){
      alert("Form Submitted");
      console.log(result.data);
    }else{
      const fieldError={};
      result.error.issues.forEach((err)=>{
        fieldError[err.path[0]]=err.message;
      });
      setError(fieldError);
    }
    // setName("");
    // setEmail("");
    // setPhone("");
    // setError({});
  }
  return (
    <>
    <form onSubmit={handleSubmit} style={{
      display:"flex",
      flexDirection:"column",
      gap:"10px"
    }}>
      <input type="text"
      placeholder='Enter your name'
      value={name}
      onChange={(e)=>setName(e.target.value)}
     />
     {error.name && <p style={{color:"red"}}>{error.name}</p>}
      <input type="email"
      placeholder='Enter your email'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
     />
     {error.email && <p style={{color:"red"}}>{error.email}</p>}
      <input type="text"
      placeholder='Enter your phone'
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}
     />
     {error.phone && <p style={{color:"red"}}>{error.phone}</p>}
     <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default App
