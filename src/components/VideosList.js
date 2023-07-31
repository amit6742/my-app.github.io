import Video from "./video";
import PlayButton from "./PlayButton";
import useVideos from "./Hooks/custom";
const VideoList = ({ editVideo }) => {
  const videos = useVideos();
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
    </>
  );
};

export default VideoList;
