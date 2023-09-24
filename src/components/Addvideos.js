import {  useEffect, useRef, useState } from "react";
import "./Addvideos.css";
import useVideoDispatch from "./Hooks/customdispatch";
const initialState = {
  time: "12 year ago",
  channel: "coder Dost",
  verified: false,
  title: "",
  views: "",
};
const AddVideo = ({ editableVideo }) => {
  const [video, setVideo] = useState(initialState);
  const dispatch =  useVideoDispatch()
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }

    setVideo(initialState);
  };

  const handleChange = (e) => {
    e.stopPropagation();
    setVideo({ ...video, [e.target.name]: e.target.value });
   
  };

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }

    inputRef.current.focus()
  }, [editableVideo]);

  return (
    <>
      <form>
        <input
        ref={inputRef}
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
          value={video.views}
        />
        <button onClick={handleSubmit}>{editableVideo ? "Edit" : "Add"}</button>
      </form>
    </>
  );
};

export default AddVideo;
