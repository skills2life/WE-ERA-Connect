import React, { useState } from "react";

interface VideoPlayerProps {
  options: any;
  onReady?: (player: any) => void;
}

// Robust helper to extract YouTube ID
function getYoutubeId(url: string): string {
  if (!url) return "";
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ options, onReady }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Extract source from options
  const videoUrl = options?.sources?.[0]?.src || "https://www.youtube.com/watch?v=W9BX0jyzd2k";
  const videoId = getYoutubeId(videoUrl) || "W9BX0jyzd2k";

  // Build secure, feature-rich YouTube embed URL
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1`;

  const handleLoad = () => {
    setIsLoading(false);
    if (onReady) {
      onReady(null);
    }
  };

  return (
    <div className="w-full h-full relative bg-black flex items-center justify-center overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950 z-10">
          <div className="w-10 h-10 border-4 border-brand border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <iframe
        src={embedUrl}
        title="Summit Presentation Video"
        className="w-full h-full border-0 absolute inset-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="no-referrer"
        onLoad={handleLoad}
      />
    </div>
  );
};

