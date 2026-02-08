import { useState, useEffect } from "react";

const FetchUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null); // reset old error

      const response = await fetch("https://randomuser.me/api/");

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const data = await response.json();
      setUser(data.results[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Random User App 🌍</h1>

      {loading && <h2>Loading...</h2>}

      {error && (
        <div>
          <h3 style={{ color: "red" }}>Error: {error}</h3>
          <button
            onClick={fetchUser}
            style={{
              marginTop: "20px",
              padding: "10px 15px",
              borderRadius: "5px",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && user && (
        <div>
          <img
            src={user.picture.large}
            alt="user"
            style={{ borderRadius: "50%" }}
          />
          <h2>
            {user.name.first} {user.name.last}
          </h2>
          <p>{user.email}</p>
        </div>
      )}

      {!loading && !error && (
        <button
          onClick={fetchUser}
          style={{
            marginTop: "20px",
            padding: "10px 15px",
            borderRadius: "5px",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Get New User
        </button>
      )}
    </div>
  );
};

export default FetchUser;
