import { Modal } from 'antd';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReactPlayer from 'react-player';
import { HomeContext } from '../Context/HomeContext';

export default function BtnPlayTrailer({ movieDetailId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setMovieId, videoTrailerMovie } = useContext(HomeContext);
  const [movieKey, setMovieKey] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const reactPlayerRef = useRef(null);
  const handleCancel = () => {
    setIsModalOpen(false);
    if (reactPlayerRef.current) {
      reactPlayerRef.current.seekTo(0);
    }
  };
  const showModal = useCallback(() => {
    setMovieId(movieDetailId);
    setIsModalOpen(true);
    setIsVideoPlaying(true);
  }, [movieDetailId]);
  const handleVideoStart = () => {
    setIsVideoPlaying(true);
  };
  const handleVideoPause = () => {
    setIsModalOpen(false);
    setIsVideoPlaying(false);
    setMovieKey(null);
  };
  useEffect(() => {
    let movieKey = videoTrailerMovie.filter(
      (trailer) => trailer.type === 'Trailer'
    );
    setMovieKey(movieKey[0]?.key);
  }, [videoTrailerMovie]);
  return (
    <>
      <button
        onClick={showModal}
        className="flex items-center gap-1 mx-3 hover:scale-110 group hover:text-red-700"
      >
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          className="group-hover:fill-red-700"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {' '}
            <g>
              {' '}
              <path fill="none" d="M0 0h24v24H0z" />{' '}
              <path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" />{' '}
            </g>{' '}
          </g>
        </svg>
        <span className="font-Roboto text-lg">Play Trailer</span>
      </button>
      <Modal
        onCancel={handleCancel}
        open={isModalOpen}
        footer={null}
        width={1200}
      >
        <div className="h-[40rem] my-6">
          {movieKey && isVideoPlaying ? (
            <ReactPlayer
              ref={reactPlayerRef}
              width="100%"
              height="100%"
              url={`https://www.youtube.com/watch?v=${movieKey}`}
              onEnded={handleVideoPause}
              onStart={handleVideoStart}
              controls={true}
            />
          ) : null}
        </div>
      </Modal>
    </>
  );
}
