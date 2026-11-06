// useMemo (Hook for Values)
// Kyun use hota hai? Kisi heavy calculation ya expensive function ke result ko yaad (memoize) rakhne ke liye, taaki har render par woh calculation dubara na karni pade. Yeh sirf tabhi run hota hai jab iski dependencies change hoti hain.

import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount((prev) => prev + 1);
  };

  const sum = useMemo(() => {
    let total = 0;

    console.log("Calculation Running");
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }

    return total;
  }, []);

  return (
    <div>
      <h1>UseMemo</h1>
      <p>
        {sum}, {count}
      </p>
      <button onClick={inc}>Click</button>
    </div>
  );
};

export default UseMemo;
