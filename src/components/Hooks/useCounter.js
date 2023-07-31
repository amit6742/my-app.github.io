import { useState } from "react";

const useCounter = (value) => {
  const [count, setCount] = useState(value);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return [count, plus, minus];
};

export default useCounter;
