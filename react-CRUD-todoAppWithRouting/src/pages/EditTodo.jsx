import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const EditTodo = ({ todos, updateTodo }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const todo = todos.find(
    (t) => t.id === Number(id)
  );

  const [text, setText] = useState(todo?.text || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(Number(id), text);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Todo</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditTodo;
