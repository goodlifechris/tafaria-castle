
//   const VideoYouTubePlayer = ({ videoId }) => {
//     return (
//       <div className="flex justify-center video-containerv bg-red-800 ">
//         <iframe
//   src={`https://www.youtube.com/embed/${videoId}?autoplay=1&&modestbranding=1&showinfo=0&rel=0`}
//   title="Tafaria gardens"
//   frameBorder="0"
//   allowFullScreen
// ></iframe>
    
//       </div>
//     );
//   };
//   export default VideoYouTubePlayer;


import React, { useEffect, useRef, useState } from 'react';

const VideoYouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);
  const [apiReady, setApiReady] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
    
    if (!existingScript) {
      // Load the YouTube Iframe API
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.onload = () => setApiReady(true);
      document.body.appendChild(script);
    } else {
      setApiReady(true);
    }

    // Initialize the player once the API is ready
    const initializePlayer = () => {
      if (!window.YT || !window.YT.Player) return;
      
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId,
        playerVars: {
          controls: 0, // Hide default controls
          modestbranding: 1,
          rel: 0,
        },
      });
    };

    if (apiReady) {
      if (window.YT && window.YT.Player) {
        initializePlayer();
      } else {
        window.onYouTubeIframeAPIReady = initializePlayer;
      }
    }
  }, [videoId, apiReady]);

  // Custom control handlers
  const playVideo = () => playerRef.current?.playVideo();
  const pauseVideo = () => playerRef.current?.pauseVideo();
  const seekTo = (seconds) => playerRef.current?.seekTo(seconds, true);
  const changeVolume = (e) => playerRef.current?.setVolume(e.target.value);

  return (
    <div>
      {/* Ensure the YouTube player container has proper height and width */}
      <div
        id="youtube-player"
        style={{
          width: '100%', // Ensure full width
          height: '360px', // Ensure proper height
          background: 'black', // Provide a background for the iframe
        }}
      ></div>

      <div className="controls mt-4 space-x-2">
        <button onClick={playVideo} className="px-4 py-2 bg-blue-500 text-white rounded">Play</button>
        <button onClick={pauseVideo} className="px-4 py-2 bg-red-500 text-white rounded">Pause</button>
        <button onClick={() => seekTo(30)} className="px-4 py-2 bg-green-500 text-white rounded">Seek to 30s</button>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          onChange={changeVolume}
          className="w-1/4"
        />
      </div>
    </div>
  );
};

export default VideoYouTubePlayer;
