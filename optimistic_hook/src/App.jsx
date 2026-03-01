import { useOptimistic, useState } from "react";
import "./App.css";

async function sendToServer(comment) {
  await new Promise((res) => setTimeout(res, 2000)); //fake delay
  console.log("Saved to server: ", comment);
}
function App() {
  const [comments, setComments] = useState([]);
  const [optimisticsComments, addOptimisticsComments] = useOptimistic(
    comments,
    (currentState, newComment) => [...currentState, newComment],
  );

  async function handleSubmit(formData) {
    const comment = formData.get("comment");
    addOptimisticsComments(comment); //optimistic update
    setComments((prev) => [...prev, comment]);
    await sendToServer(comment);
  }
  return (
    <>
      <form
        action={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name="comment"
          placeholder="Type your comment"
          required
          style={{ padding: "8px 15px",
            borderRadius:"5px"
           }}
        />
        <button type="submit">Submit</button>
        <ul>
          {optimisticsComments.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default App;
