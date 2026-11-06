import React from "react";
import { useParams } from "react-router-dom";
const UseParams = () => {
  const params = useParams();

  return (
    <div>
      <p>Parameter: {params.id}</p>
    </div>
  );
};

export default UseParams;
