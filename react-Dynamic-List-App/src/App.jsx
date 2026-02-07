import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Build Projects" },
  ]);
  const [input, setInput] = useState("");
  const addItem = () => {
    if (input.trim() === "") return;
    const newItem = {
      id: Date.now(),
      name: input,
    };
    setItems([...items, newItem]);
    setInput("");

  };
  return (
    <div style={{ 
      textAlign: "center",
       padding: "50px",
       minHeight:"100vh",
       backgroundColor:"black"}}>
      <h1>Dynamic List App</h1>
      <input
        type="text"
        placeholder="Add new Item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        {items.map((item) => (
          <li key={item.id} style={{ margin: "10px 0" }}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
