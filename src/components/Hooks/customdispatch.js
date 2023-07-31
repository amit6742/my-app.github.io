import { useContext } from "react";
import VideoDispatch from "../contex/videoDispatch";



const useVideoDispatch = ()=>{
    return  useContext(VideoDispatch)

} 


export default useVideoDispatch


