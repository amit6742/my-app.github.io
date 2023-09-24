import React from 'react'
import { Greet } from './navlink'
import { useNavigate } from 'react-router-dom'




export const BioData = () => {
  const navigate = useNavigate()
  const goToProject=()=>{
    navigate("/project")
  
  
  
  }
  return (
    <>
      <Greet></Greet>
   <section>
    <h1>BioData page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum optio libero doloremque cum, ullam natus ex laboriosam inventore! Unde maxime porro eligendi sunt, fuga at! Accusamus officiis labore ab.hhipdhguifhgihufiytihruyreuithlwoughlflkdhalglfkdn;khfipwiqyirqywyriuewyqr</p>
    <button onClick={()=>goToProject()}>go to project</button>
    <button onClick={()=> {navigate(-1)}}>go back</button>
   </section>
    </>
  )
}
