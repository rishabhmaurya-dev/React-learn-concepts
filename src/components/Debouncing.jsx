import React from "react";
import { useState, useEffect } from "react";

function Debouncing() {
  const [name, setName] = useState("");
  const [user, setuser] = useState("");
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!name.trim()) {
        setuser("");
        return;
      }
      const api = await fetch(
        `https://jsonplaceholder.typicode.com/users?q=${name}`,
      );
      const data = await api.json();
      console.log(data);
      setuser(data[0].name);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [name]);

  return (
    <>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
      <p>{user}</p>
    </>
  );
}
export default Debouncing;
