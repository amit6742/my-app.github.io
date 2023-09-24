
import "./Registration.css"
import ColorContext from "./colorcontext";

import React, { useReducer, useState } from 'react'
const initialState = 0;
const count = (state=initialState,action)=>{
  switch (action) {
    case "inc":
      return state +1;
      case "dec":
        return state -1
    default:
      return state
  }

}
export const CounterBox = () => {
  const [display, dispatch] = useReducer(count,initialState)
  const [nano, setNano] = useState("light-color")
  return (
    <>
    <ColorContext.Provider value={nano}>
    <div className={nano}>
    <div>CounterBox : {display}</div>
    <button onClick={()=>dispatch("inc")}>inc</button>
    <button onClick={()=>dispatch("dec")}>dec</button>
    </div>
    </ColorContext.Provider>
    <button onClick={()=>setNano ==="dark-color" ? "light-color" : ""}>{nano}</button>

    </>
  )
}
