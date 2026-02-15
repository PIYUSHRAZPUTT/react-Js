import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";

const App = () => {
  const [todos, setTodos]=useState([]);

  // for add todo
  const addTodo=(text)=>{
    const newTodo={
      id:Date.now(),
      text
    };
    setTodos([...todos, newTodo]);
  };

  // for delete todo
  const deleteTodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
  }

  // for add todo
  const updateTodo=(id, newText)=>{
    setTodos(
      todos.map((todo)=>
        todo.id===id?{...todo, text:newText}:todo
      )
    )
  };

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route
      path="/"
      element={<Home todos={todos} deleteTodo={deleteTodo} />}
      />
      <Route
      path="/add"
     element={<AddTodo addTodo={addTodo} />}
      />
      <Route
      path="/edit/:id"
      element={<EditTodo todos={todos} updateTodo={updateTodo} />}
      />
    </Routes>
    </BrowserRouter>
  )
}

export default App

