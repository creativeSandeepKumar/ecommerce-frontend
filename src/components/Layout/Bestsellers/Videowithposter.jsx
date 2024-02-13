import useVideoWithDyanamicPoster from "@/hooks/useVideoWithDyanamicPoster";

const VideoWithDynamicPoster = ({ videoSource, frameIndex }) => {
  const { handleMouseEnter, handleMouseLeave, mobileOrTablet, poster, videoRef } = useVideoWithDyanamicPoster(videoSource, frameIndex);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video
        className="rounded-t-xl"
        ref={videoRef}
        src={videoSource}
        autoPlay={mobileOrTablet} // Autoplay only if not mobile or tablet
        muted
        // controls
        poster={poster}
      ></video>
    </div>
  );
};

export default VideoWithDynamicPoster;
