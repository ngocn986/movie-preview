import { useCallback, useContext, useEffect, useState } from 'react';
import { Carousel } from 'antd';
import StarIcon from '@mui/icons-material/Star';
import WatchHomePage from '../components/WatchHomePage';
import AddToListHomePage from '../components/AddToListHomePage';
import { HomeContext } from '../Context/HomeContext';
import { format } from 'date-fns';
import ReactPlayer from 'react-player';

export default function BannerImageHomePage() {
  const [movieKey, setMovieKey] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const { popularMovie, setMovieId, videoTrailerMovie, setStateShowHeader } =
    useContext(HomeContext);

  const handleWatchVideo = useCallback((movieId, index) => {
    setMovieId(movieId);
    setIsVideoPlaying(true);
    setActiveSlide(index);
    setStateShowHeader(true);
  }, []);

  useEffect(() => {
    if (videoTrailerMovie) {
      let movieKey = videoTrailerMovie.filter(
        (trailer) => trailer.type === 'Trailer'
      );
      setMovieKey(movieKey[0]?.key);
    }
  }, [videoTrailerMovie]);

  const handleVideoStart = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  const handleCarouselChange = (current) => {
    setStateShowHeader(false);
    if (isVideoPlaying && current !== activeSlide) {
      setIsVideoPlaying(false);
    }
  };
  return (
    <>
      <Carousel
        effect="fade"
        autoplaySpeed={5000}
        infinite
        speed={1000}
        autoplay
        afterChange={handleCarouselChange}
      >
        {popularMovie?.map((movie, i) => (
          <div
            key={movie.id}
            className="rounded-t-lg px-0 md:px-8 lg:px-12 xl:px-16"
          >
            {movieKey && isVideoPlaying && activeSlide === i ? (
              <div className="w-full h-[40vw] md:w-1/2 xl:w-1/3 object-cover">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={`https://www.youtube.com/watch?v=${movieKey}`}
                  onEnded={handleVideoPause}
                  onPause={handleVideoPause}
                  onStart={handleVideoStart}
                />
              </div>
            ) : (
              <div className="flex flex-col md:flex-row">
                <img
                  className="w-full h-[40vw] md:w-1/2 xl:w-1/3 object-cover cursor-pointer"
                  src={`https://image.tmdb.org/t/p/w3840_and_h2160_bestv2${movie.poster_path}`}
                  alt="no picture"
                ></img>
                <div className="absolute xl:top-36 2xl:top-72 md:top-20 sm:hidden md:block xl:block 2xl:block  sm:top-20 left-4 md:left-20 sm:left-24 xl:w-[60%] md:w-w-[60%]  xl:left-40 transform scale-100 md:scale-110 xl:scale-120">
                  <div className="flex gap-2 font-Roboto items-center text-xl text-[#da3b1e] xl:block 2xl:block sm:hidden">
                    <StarIcon color="error"></StarIcon>
                    <p>{movie.vote_average.toFixed(1)}</p>
                    <li className="list-disc">
                      {format(new Date(movie.release_date), 'yyyy')}
                    </li>
                  </div>
                  <p className="py-10 text-[#da3b1e] md:text-4xl sm:text-4xl xl:text-7xl ">
                    {movie.title}
                  </p>
                  <div className="flex items-center gap-6">
                    <WatchHomePage
                      handleWatchVideo={() => handleWatchVideo(movie.id, i)}
                    ></WatchHomePage>
                    <AddToListHomePage></AddToListHomePage>
                  </div>
                  <p className="w-1/3 sm:hidden font-Roboto md:mt-2 xl:mt-14 2xl:mt-14 md:block xl:block text-xl text-white h-[80px] overflow-hidden overflow-ellipsis line-clamp-3 break-words">
                    {movie.overview}
                  </p>
                </div>
              </div>
            )}
            <div className="w-full absolute top-[37vw] h-[5rem] bg-black opacity-40"></div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
