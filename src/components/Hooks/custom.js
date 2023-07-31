

import { useContext } from "react";
import VideosContext from "../contex/videocontex";




const useVideos = ()=>{
    return  useContext(VideosContext)

} 


export default useVideos


