import { useContext} from "react";
import "./videos.css";
import ThemeContext from "./contex/themscontex";
import useVideoDispatch from "./Hooks/customdispatch";

const Video = ({
  title,
  channel = "coder dost",
  time,
  views,
  verified,
  id,
  children,

  editVideo,

}) => {

       const theme = useContext(ThemeContext)
       const dispatch =useVideoDispatch()

//        useEffect(()=>{
//         const idx = setInterval(() => {
//           console.log("video",id)
          
//         }, 3000);
//         return ()=>{
//           clearInterval(idx)

//         }
      

// },[id])
  return (
    <>
      <div className={ `container ${theme}`}>
        <button
          className="close"
          onClick={() => {
            dispatch({ type: "DELETE", payload: id });
          }}
        >
          x
        </button>
        <button
          className="edit"
          onClick={() => {
            editVideo(id);
          }}
        >
          edit
        </button>

        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified ? "✅" : "❌"}
        </div>

        <div className="views">
          {views} views <span>.</span>
          {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Video;
