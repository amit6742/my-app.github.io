
import React, { useRef, useState } from 'react'

export const Flower = () => {
  const [playing, setPlaying] = useState(false)
   const refElement = useRef(null)

   const handlePlay = () =>{
    const nextPlaying = !playing
    setPlaying(nextPlaying)
    if(nextPlaying){
      refElement.current.play()
    }
    else{
      refElement.current.pause()
    }

   }
  return (
    <>
      <div className='flowers'>
        <video  onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} ref={refElement} width={500} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"></video>
        <button onClick={handlePlay}> {playing ? "pause▶️": "play⏸️"}</button>
        
      </div>
    </>
  )
}
