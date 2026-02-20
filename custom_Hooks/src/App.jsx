import useFetch from "./hooks/useFetch";
import "./App.css";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {data &&
        data.map((user) => (
          <div
            key={user.id}
            style={{
              padding: "10px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h4>{user.email}</h4>
            <p>{user.address.city}</p>
          </div>
        ))}
    </div>
  );
};

export default App;
