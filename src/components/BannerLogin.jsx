import React, { useContext } from 'react';
import { Carousel } from 'antd';
import { HomeContext } from '../Context/HomeContext';

export default function BannerLogin() {
  const { popularMovie } = useContext(HomeContext);
  return (
    <>
      <div className="w-[20rem] h-full">
        <Carousel dots={false} autoplay={true} effect='fade' infinite={true} speed={2000} autoplaySpeed={3000}>
          {popularMovie?.map((movie) => (
            <img
                
              key={movie.id}
              src={
                `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` ||
                ''
              }
              alt={movie.title}
              className="aspect-square h-[28.4rem] w-full rounded-tl-xl rounded-bl-xl"
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}
