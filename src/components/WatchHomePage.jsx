import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export default function WatchHomePage({ handleWatchVideo }) {
  return (
    <>
      <button
        onClick={handleWatchVideo}
        className="bg-red-600 flex gap-1 pl-4 pr-6 py-3 transform scale-100 sm:scale-75 md:scale-90 xl:scale-120 rounded-full hover:scale-105 items-center"
      >
        <PlayArrowIcon></PlayArrowIcon>
        WATCH TRAILER
      </button>
    </>
  );
}
