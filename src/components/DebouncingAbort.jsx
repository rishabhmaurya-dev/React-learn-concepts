import React, { useState, useEffect } from "react";

function DebouncingAbort() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]); // State ka naam users (array) rakha hai
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!name.trim()) {
      setUsers([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    const timer = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?q=${name}`,
          { signal },
        );
        const data = await response.json();
        setUsers(data); // Array data store ho raha hai
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Previous fetch request aborted");
        } else {
          console.log("Error:", error);
        }
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [name]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Search user..."
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", fontSize: "16px", width: "250px" }}
      />

      <h1>Typing: {name}</h1>

      {loading && <p style={{ color: "blue" }}>Searching...</p>}

      {/* Array ko map karke list show kar rahe hain */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.length > 0
          ? users.map((u) => (
              <li
                key={u.id}
                style={{ padding: "8px 0", borderBottom: "1px solid #ddd" }}
              >
                <strong>{u.name}</strong> ({u.email})
              </li>
            ))
          : !loading && name && <p style={{ color: "red" }}>No users found</p>}
      </ul>
    </div>
  );
}

export default DebouncingAbort;
