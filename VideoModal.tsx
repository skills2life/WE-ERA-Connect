import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { VideoPlayer } from "./VideoPlayer";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const videoUrl = "";

  const videoOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    techOrder: ["youtube"],
    sources: [
      {
        type: "video/youtube",
        src: videoUrl,
      },
    ],
    youtube: {
      customVars: {
        wmode: "transparent",
        rel: 0,
        modestbranding: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl"
        >
          {/* Close Backdrop */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal content box - Sized at 80% of screen */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-[80vw] max-w-7xl aspect-video max-h-[80vh] bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 bg-slate-950/60 hover:bg-red-500/80 text-white hover:text-white p-2 rounded-full border border-white/10 transition-all duration-300 hover:rotate-90 cursor-pointer"
              aria-label="Close video player"
            >
              <X size={20} />
            </button>

            {/* Video Main Player (Fills the modal) */}
            <div className="w-full h-full bg-black flex items-center justify-center">
              <VideoPlayer options={videoOptions} key={videoUrl} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

