import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AddTodo = ({addTodo}) => {
    const [text, setText]=useState("");
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!text)return;
        addTodo(text);
        navigate("/");
    };

  return (
    <div style={{padding:"20px"}}>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder='Enter todo'
        value={text}
        onChange={(e)=>setText(e.target.value)}
         />
         <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
