import { useSearchParams } from "react-router-dom";
const UseSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("abc"));
  console.log(searchParams.get("bcd"));
  return <div></div>;
};

export default UseSearchParams;
