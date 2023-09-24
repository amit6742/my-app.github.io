import ChildB from "./childB"

const ChildA = ({name})=>{
    return(<>
    <ChildB name={name}></ChildB>

    </>)
}


export default ChildA