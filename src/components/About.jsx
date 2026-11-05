import Profile from "../pages/Profile";
import { useState } from "react";

const About = () => {
  console.log("Rendering About component");
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>About Page</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <p>Welcome to the About page!</p>
      <Profile />
    </div>
  );
};

export default About;
