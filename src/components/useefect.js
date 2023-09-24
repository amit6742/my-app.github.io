import { useState,useEffect } from "react"


const Counter = ()=>{
    const [counter, setCounter] = useState(0)
    const[ data, setData] = useState("ram")

    

    useEffect(()=>{
        console.log("components mounted")
    },[data])

    const updatecount = ()=>{
        setCounter(counter+1)
    }


    const updatedata = ()=>{
        setData("seeta")
    }


    return (<>


    <h1>button click {counter} time</h1>
    <button onClick={updatecount}>click</button>
    <button onClick={updatedata}>update daya</button>

    </>)
}


export default Counter