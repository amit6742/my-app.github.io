import { useState } from "react";


const FliterList = ({data})=>{
    const [searchText, setSearchText]= useState('')
    const flter = data.filter((item)=>item.toLowerCase().includes(searchText.toLowerCase()))

    const handleChnage = (e)=>{
        setSearchText(e.target.value)
    }

    return (<>

    <div>
        <input type="text" value={searchText} onChange={handleChnage}  />
        <ul>
 {flter.map((items,index)=><li key={index}>{items}</li>)}

        </ul>
    </div>

    </>)
}

export default FliterList;