// React.memo (Higher-Order Component)
// Kyun use hota hai? Jab ek component baar-baar re-render ho raha ho bina kisi change ke (props same rehne par), toh memo usko cache (memoize) kar leta hai aur purana result hi dikhata hai jab tak props na badlein.

// useCallback (Hook for Functions)
// Kyun use hota hai? JavaScript mein jab component re-render hota hai, toh uske andar ke functions dobara naye reference ke sath create hote hain. useCallback function ke reference ko cache karta hai taaki jab hum us function ko kisi child component ko prop mein bhejein, toh child bina wajah re-render na ho.

import React from "react";
import { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";
const UseCallback = () => {
  const [count, setCount] = useState(0);
  console.log("Rendering UseCallback component");
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>{count}</p>
      <UseCallbackChild onClick={handleClick} />
    </div>
  );
};

export default UseCallback;
