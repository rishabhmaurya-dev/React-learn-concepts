import React from "react";

const EventBubbling = () => {
  function handleClick(e) {
    const id = e.target.dataset.id;

    if (id === "1") {
      alert("Home Clicked");
    } else if (id === "2") {
      alert("Profile Clicked");
    } else if (id === "3") {
      alert("Settings Clicked");
    }
  }

  return (
    <div onClick={handleClick}>
      <button data-id="1">Home</button>
      <button data-id="2">Profile</button>
      <button data-id="3">Settings</button>
    </div>
  );
};

export default EventBubbling;
