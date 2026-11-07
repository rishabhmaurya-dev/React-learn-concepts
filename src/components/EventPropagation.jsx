import React from "react";

const EventPropagation = () => {
  return (
    <div
      onClick={() => alert("Div Clicked")}
      style={{ border: "2px solid white", padding: "50px" }}
    >
      <button
        onClick={(e) => {
          alert(`${e.target.innerText} clicked`);
          e.stopPropagation(); // Stop the event from propagating to the parent div
        }}
      >
        Button 1
      </button>
      <button>Button 2</button>
    </div>
  );
};

export default EventPropagation;
