import {useFormStatus} from "react-dom"
import './App.css'

async function saveData(formData){
  await new Promise((resolve)=> setTimeout(resolve, 2000)); //simulating time-delay
  console.log("saved Data", formData.get("name"));
}

function App() {
  function SubmitButton(){
    const {pending}=useFormStatus();
    return(
      <button type="submit"disabled={pending}>{pending?"submitting":"Submitted"}</button>
    )
  }

  return (
    <>
      <form action={saveData} style={{
          display:"flex",
          flexDirection:"column",
          gap:"10px",
        }}>
        <input type="text"
        name="name"
        placeholder="Enter your name"
        required 
        style={{padding:"8px 15px"}}
        />
        <SubmitButton />
      </form>
    </>
  )
}

export default App
