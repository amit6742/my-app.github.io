import { useState } from "react";

const DropDown = () => {

    const [options, setOptions] = useState([])
    const [nation, setNation]= useState({name:"" , value:""})
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleInput = (e)=>{
    setNation({...nation,
    [e.target.name] : e.target.value})

    

  }

  const handleSubmitted=(e)=>{
    e.preventDefault()
    if (nation.name && nation.value ) {
        setOptions([...options,nation])
        setNation({name:"", value:""})
        
    }
    else{
        alert("invalid value")
    }
   

  }


  return (
    <>
      <select onChange={handleChange}>
        <option value="IND">--Select--</option>
        {options.map(op=><options value={op.value}>{op.name}</options>)}
      </select>

      <form onSubmit={handleSubmitted}>
        <input
          type="text"
          name="title"
          onChange={handleInput}
          placeholder="name"
          value={nation.name}
        />
        <input
          type="text"
          name="views"
          onChange={handleInput}
          placeholder="value"
          value={nation.value}
        />
        <button >Submit</button>
      </form>
    </>
  );
};

export default DropDown;
