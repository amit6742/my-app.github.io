import { useRef, useState } from "react";
const Counter = () => {
  const [number, setNum] = useState(0);
  let num = useRef(0);
 

  const handleClick = (e) => {
    e.stopPropagation();
    setNum((number) => number + 1);
    num.current++
    console.log(num.current)
  };

  return (
    <>
      <h1>{number} </h1>
      <button onClick={handleClick}>add</button>
    </>
  );
};

export default Counter;
