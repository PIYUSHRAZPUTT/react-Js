import { Link } from "react-router-dom";

const Home = ({ todos, deleteTodo }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>
      {todos.length === 0 && <p>No Todos Yet</p>}
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: "10px" }}>
            Detete Todo
          </button>
          <Link to={`/edit/${todo.id}`} style={{ marginLeft: "10px" }}>
            Edit Todo
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
