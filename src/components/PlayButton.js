

import { useContext, useState } from "react";
import "./PlayButton.css"
import ThemeContext from "./contex/themscontex";
const PlayButton =({children,onPlay,onPause})=>{

    const theme = useContext(ThemeContext)


const [playing, setPlaying ]  = useState(false) ;  
    const handleClick=(e)=>{
        e.stopPropagation()
        console.log(e)
        if(playing)onPlay()
        else onPause()

        setPlaying(!playing)
      

    }
    return (<>

<button  className={theme} onClick={handleClick}>{children} {playing?'⏸️' :'▶️'}</button>

    </>)
}

export default PlayButton