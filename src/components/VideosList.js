import Video from "./video";
import axios from "axios";

import PlayButton from "./PlayButton";
import useVideos from "./Hooks/custom";
import { useEffect, useState } from "react";
import useVideoDispatch from "./Hooks/customdispatch";
const VideoList = ({ editVideo }) => {
  const dispatch = useVideoDispatch()
  const url = "https://jsonplaceholder.typicode.com/users"
   const videos = useVideos();

 async function handleClick (){
    const res =  await axios.get(url);
    console.log(res.data)
    dispatch({ type:'LOAD',payload:res.data})

  }
  useEffect(()=>{
    async function getVideos (){
      const res =  await axios.get(url);
      console.log(res.data)
      dispatch({ type:'LOAD',payload:res.data})
  
    }
   getVideos()

  },[dispatch])
  return (
    <>
      {videos.map((video) => (
        <>
          <Video
            key={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
            id={video.id}
            editVideo={editVideo}
          >
            <PlayButton
              onPlay={() => console.log("play" + video.title)}
              onPause={() => console.log("pause" + video.title)}
            >
              {video.title}
            </PlayButton>
          </Video>
        </>
      ))}
      <button onClick={handleClick}>get videos</button>
    </>
  );
};

export default VideoList;
