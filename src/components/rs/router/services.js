import React from 'react'
import { Greet } from './navlink'
import { useNavigate } from 'react-router-dom'


export const Services = () => {
  const navigate =useNavigate()
  const gotoBio=()=>{
    navigate("/biodata")

  }
  return (
   <>
   <Greet></Greet>
   <section>
    <h1>services page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cum labore ratione, magnam ad facere hic? Perferendis repudiandae maiores asperiores id expedita magni libero ducimus, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, mollitia? Nulla incidunt, placeat sequi autem iste quos. Repellendus accusantium eum mollitia amet necessitatibus ab, obcaecati nulla ipsa totam veniam molestiae?</p>
    <button onClick={()=>gotoBio()}>back to bio</button>
    <button onClick={()=> {navigate(-1)}}>go back</button>
   </section>

  
   </>
  )
}
