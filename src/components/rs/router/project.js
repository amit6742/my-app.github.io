
import React from 'react'
import { Greet } from './navlink'
import { useNavigate } from 'react-router-dom'



export const Project = () => {
   const navigate  = useNavigate()
  const gotoservices=()=>{
    navigate("/")

  }
  return (
    <>
      <Greet></Greet>
     <section>
      <h1>Project page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus quam expedita ipsa molestias voluptates a, qui placeat architecto sunt illum in iusto corrupti aspernatur blanditiis, natus laudantium numquam modi!</p>
      <button onClick={()=> gotoservices()}>go to services</button>
      <button onClick={()=> {navigate(-1)}}>go back</button>
     </section>
    </>
  )
}
