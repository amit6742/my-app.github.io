 import { useRef } from "react";
// const  Funk = ()=>{
//     const refElement = useRef("")
//     const [name, setName]= useState("amit")



//     const reset = ()=>{
//         setName("")
//         refElement.current.focus()
//     }
//     const handleInput= ()=>{
//         refElement.current.style.color = "red"
//         refElement.current.value = "jenny"
//     }
//     return (<>

//     <h1>learning useref</h1>  
//     <input ref={refElement} type="text " value={name} onChange={(e)=>setName(e.target.value)}  />
//     <button onClick={reset}>reset</button>
//     <button onClick={handleInput}>handleInput</button>

    

//     </>)
// }


// export default Funk;





 const  Funk = ()=>{
    const inputRef = useRef(null)
    const handleClick = ()=>{
        inputRef.current.value="";
        inputRef.current.focus()
        inputRef.current.style.color = "green";

    }
    


    return(<>
   <h1>useRef</h1>
   <input type="text" ref={inputRef}  />
   <button onClick={handleClick}>handleInput</button>

    </>)
    
}


export default Funk;




//  forward ref


// const Forward = ()=>{

//     const listRef = useRef(null)

//     const handleClick  = ()=>{
//         listRef.current.value="1000"
//     }
  
//     return(<>
//     <h2>forward condition</h2>
//     <List ref={listRef}></List>
// <button onClick={handleClick}>update input box</button>

//     </>)
// }


// export default Forward