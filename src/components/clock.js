import {useState } from "react";

const Clock = () => {
 
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);
  return (
    <>
      <h1>
        {date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}
      </h1>
    </>
  );
};
export default Clock;
