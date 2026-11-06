import React from "react";
const UseCallbackChild = React.memo(({ onClick }) => {
  console.log("Rendering UseCallbackChild component");
  return (
    <div>
      <button
        onClick={() => {
          console.log("clicked"); 
          onClick();
        }}
      >
        Click me
      </button>
    </div>
  );
});

export default UseCallbackChild;
