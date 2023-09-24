
import React, { useState } from 'react'

export const MyInput = () => {
  const [name, setName] = useState("")
  const [upper, setUpper] = useState(false)
  const [lower , setLower] = useState(false)
  return (
   <>
    <button>show</button>
    <div>
    <label >
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    </label>
    <label >
    <input type="checkbox" value={upper} onChange={(e)=>setUpper(e.target.checked)} /> make it checked value to upper
    </label>
    <label >
    <input type="checkbox" value={lower} onChange={(e)=>setLower(e.target.checked)} /> make it checked value to lowe
    </label>
    </div>
    <p> to convert uppercase <b>{upper ? name.toUpperCase() : name} </b></p>
    <p> to convert lowercase <b>{lower ? name.toLowerCase() : name} </b></p>


   </>
  )
}
