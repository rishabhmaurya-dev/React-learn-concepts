// useRef ka main kaam kisi bhi DOM node ko directly target karna ya pakadna hota hai, chahe woh input ho ya na ho.
import { useRef, useState } from "react";
const UseRef = () => {
  const [val, setVal] = useState("");
  const inputRef = useRef(null);

  return (
    <div>
      <p ref={inputRef}>UseRef</p>
      <button onClick={() => setVal(inputRef.current.innerText + " clicked")}>
        Click
      </button>
      <p>{val}</p>
    </div>
  );
};

export default UseRef;
