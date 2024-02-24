import { useContext, useEffect, useRef, useState } from 'react';
import { HomeContext } from '../Context/HomeContext';
import { Tooltip } from 'antd';
import { NavLink } from 'react-router-dom';

export default function MovieListHomePage() {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const { movieUpComing } = useContext(HomeContext);
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel mx-28 pb-10">
      <div className="relative overflow-hidden">
        <p className="font-Roboto text-2xl text-red-700  mx-10 mt-20">
          Movie List
        </p>
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="w-10 h-full text-center disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000000"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="w-10 h-full text-center disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000000"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container flex  mx-10 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {movieUpComing?.map((data) => {
            return (
              <>
                <NavLink key={data.id} to={`movieDetail/${data.id}`}>
                  <div
                    className="carousel-item ml-5 text-center w-64 h-96 snap-start my-4 shadow-md transform transition-transform duration-500"
                  >
                    <div className="cursor-pointer h-full w-full aspect-square block bg-origin-padding rounded-xl overflow-hidden">
                      <img
                        src={
                          `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.poster_path}` ||
                          ''
                        }
                        alt={data.title}
                        className="aspect-square h-3/4 w-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent top-48">
                        <div className="absolute bottom-0 top-28 left-0 px-7 text-left font-Roboto">
                          <Tooltip title={data.title}>
                            <p className="text-lg text-[#da3b1e] overflow-hidden overflow-ellipsis line-clamp-1 break-words h-[30px]">
                              {data.title}
                            </p>
                          </Tooltip>
                          <p className="text-gray-700">{data.release_date}</p>
                        </div>
                        <div className="absolute top-10 left-5 border border-yellow-500 p-4 rounded-full font-Roboto bg-[#081c22] text-yellow-500">
                          {data.vote_average.toFixed(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
