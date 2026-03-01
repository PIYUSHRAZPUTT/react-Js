import { useState } from 'react'
import './App.css'
import {z} from "zod"

const signupSchema=z.object({
  userName:z.string().min(1, "userName is required!"),
  email:z.string().email("Invalid email"),
  password:z.string().min(6, "password must be atleast 6 digit character"),
  confirmPassword:z.string(),
})
.refine((data)=>data.password===data.confirmPassword,{
  message:"Password do not match",
  path:["confirmPassword"],
});

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [confirmPassword, setConfirmPassword]=useState("");
  const [errors, setErrors]=useState([]); //array of error message

  const handleSubmit=(e)=>{
    e.preventDefault();
     const result=signupSchema.safeParse({
    userName,
    email,
    password,
    confirmPassword,
  });
  if(result.success){
    alert("form submit successfully");
    setErrors([]);
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }else{
    const allErrors=result.error.issues.map((err)=>err.message);
    setErrors(allErrors);
  }
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{
        display:"flex",
        flexDirection:"column",
        gap:"10px"
      }}>
        <input type="text"
        placeholder='Enter UserName'
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        style={{padding:"7px 15px"}} 
        />
        <input type="email"
        placeholder='Enter email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)} 
        style={{padding:"7px 15px"}} 
        />
        <input type="text"
        placeholder='Enter password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)} 
        style={{padding:"7px 15px"}} 
        />
        <input type="text"
        placeholder='Enter confirm Password'
        value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)} 
        style={{padding:"7px 15px"}} 
        />
        <button type='submit'
        style={{padding:"7px 15px"}} >signUp</button>
        {errors.length>0&&(
          <div style={{color:"red"}}>
            <ul>
              {errors.map((msg, i)=>(
                <li key={i}>{msg}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </>
  )
}

export default App
