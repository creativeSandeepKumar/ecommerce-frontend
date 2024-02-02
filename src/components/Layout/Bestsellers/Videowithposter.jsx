import React, { useRef, useState, useEffect } from "react";

const VideoWithDynamicPoster = ({ videoSource, frameIndex }) => {
  const videoRef = useRef(null);
  const [poster, setPoster] = useState(null);
  const [mobileOrTablet, setMobileOrTablet] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener("loadedmetadata", () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setPoster(canvas.toDataURL());
    });

    const handleEnded = () => {
      // Restart the video when it ends
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("loadedmetadata", () => {});
      video.removeEventListener("ended", handleEnded);
    };
  }, [videoSource, frameIndex]);

  useEffect(() => {
    // Autoplay video on smaller screens
    const isMobileOrTablet = window.matchMedia("(max-width: 768px)").matches;
    console.log("check mbile or tablet", isMobileOrTablet);
    if (isMobileOrTablet) {
      setMobileOrTablet(true);
      videoRef.current.play();
      videoRef.current.loop = true; // Enable loop for mobile and tablet devices
    }
  }, []);

  const handleMouseEnter = () => {
    if (!videoRef.current.paused) return; // Don't restart if video is already playing
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

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
