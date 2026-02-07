import { useState } from "react";
import React from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };
  const deleteTodo = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };
  return (
    <div className="parent">
      <h1>Mini Todo App</h1>
      <div className="child">
        <input
          type="text"
          placeholder="Enter a Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
