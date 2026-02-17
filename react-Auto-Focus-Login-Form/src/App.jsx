import { useRef, useEffect, useState } from "react";
import React from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit Form");
    console.log({
      username: input,
      password: password,
    });
    setInput("");
    setPassword("");
    inputRef.current.focus();
  };
  return (
    <div style={{ padding: "40px" }}>
      <h2>Login Form</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          ref={inputRef}
          placeholder="EnterUserName"
          style={{ padding: "5px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          style={{ padding: "5px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={{ margin: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
