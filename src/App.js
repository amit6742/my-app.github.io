import "./App.css";
import videoDB from "./components/data/data";

import { useReducer, useState } from "react";
import AddVideo from "./components/Addvideos";
import VideoList from "./components/VideosList";
import ThemeContext from "./components/contex/themscontex";

import VideosContext from "./components/contex/videocontex";
import VideoDispatch from "./components/contex/videoDispatch";
function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState("darkMode");

  const VideoReducer = (videos, action) => {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;

      default:
        return videos;
    }
  };

  const [videos, dispatch] = useReducer(VideoReducer, videoDB);

  const editVideo = (id) => {
    setEditableVideo(videos.find((video) => video.id === id));
  };

  return (
    <>
      <ThemeContext.Provider value={mode}>
        <VideosContext.Provider value={videos}>
          <VideoDispatch.Provider value={dispatch}>
            <button
              onClick={() =>
                setMode(mode === "darkMode" ? "LightMode" : "darkMode")
              }
            >
              {mode}
            </button>

            <div className={`App ${mode}`}>
              <AddVideo editableVideo={editableVideo}></AddVideo>
              <VideoList editVideo={editVideo}></VideoList>
            </div>
          </VideoDispatch.Provider>
        </VideosContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
