import { useState } from "react";
const Event = () => {
  const [change, setChange] = useState(false);
  const handleClickOver = () => {
    setChange(true);
  };
  const handleClickOut = () => {
    setChange(false);
  };
  const focus = () => {
    console.log("focus");
  };
  const blur = () => {
    console.log("blur");
  };
  const cut = (e) => {
    console.log(e.target.value);
  };
  const paste = (e) => {
    console.log(e.target.value);
  };
  const down = (e)=>{
    if(e.keyCode ===13)
    console.log("enter")
  }
  return (
    <>
      <div style={{ clear: "both" }}>
        <img
          onMouseOver={handleClickOver}
          onMouseOut={handleClickOut}
          style={change ? { transform: "scale(1.5)" } : {}}
          src="https://picsum.photos/id/1/160/90"
          alt="images"
        />
        <button>submitted</button>
        <input
        onKeyDown={down}
          onCut={cut}
          onPaste={paste}
          onFocus={focus}
          onBlur={blur}
          
          type="text"
        />
      </div>
    </>
  );
};

export default Event;
