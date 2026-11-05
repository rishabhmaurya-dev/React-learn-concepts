import React from "react";
const About = React.lazy(() => import("./About.jsx"));
const Contact = React.lazy(() => import("./Contact.jsx"));

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      <React.Suspense fallback={<div>Loading...</div>}>
        <About />
        <Contact />
      </React.Suspense>
    </div>
  );
};

export default Home;
