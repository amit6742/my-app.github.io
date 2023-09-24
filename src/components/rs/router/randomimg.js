import React, { useState } from 'react'
import { Sresult } from './sresult';

export const Search = () => {
   const [image , setImage]=useState("")
   const inputEvent = (e)=>{
    const data = e.target.value;
    console.log(data)
     setImage(data)

   }
  return (
    <>
    <div>
    <input type="text" placeholder='search something' value={image} onChange={inputEvent} />
    <Sresult></Sresult>
    </div>
    </>
    
  )
}
