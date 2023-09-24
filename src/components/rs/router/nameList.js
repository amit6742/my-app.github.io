
import React, { useState } from 'react'
import { EditContact } from './editconct/editContact'

const initialContact = [
    { id:"0", name:"taylor", email:"taylor@gmail.com"},
    {id:"1" ,name: "alice", email: "alice@gmail.com"},
    {id:"2" , name:"bob", email:"bob@gmail.com"}
   
]

const NameList = () => {
    const [contact, setContact]= useState(initialContact)
    const [selectId, setSelectId]= useState(0)
    const selectContact = contact.find((c)=>c.id ===  selectId)

    const handleSave = (updateData)=>{
      const nextContact = contact.map((c) => {
        if(c.id === updateData.id){
          return updateData

        }
        else{
          return c
        }
      })
      console.log(nextContact)
    }


  return (
 <>
   <div>
   <EditContact saveContact ={selectContact} onSave = {handleSave} ></EditContact>

    
   </div>
 </>
  )
}



export default NameList