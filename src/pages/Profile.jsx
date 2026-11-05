import React from "react";

//
// 4. React.memo() in React
// React.memo() ek performance optimization technique hai jo unnecessary component re-rendering ko prevent karne mein help karti hai.

// Simple words mein: Agar parent component re-render hota hai, lekin child component ke props change nahi hue, to React.memo child ka re-render skip kar sakta hai.
const Profile = () => {
  console.log("Rendering Profile component");
  return (
    <div>
      <h1>Profile Page</h1>
      <p>This is the profile page of the user.</p>
    </div>
  );
};
export default React.memo(Profile);
