import { Tooltip, Pagination } from 'antd';
import React, { useContext } from 'react';
import { MovieListContext } from '../Context/MovieListContext';
import { NavLink } from 'react-router-dom';
export default function MovieList() {
  const {
    filterMovieData,
    setCurrentPage,
    currentPage,
    totalPage,
    checkVisiblePage,
  } = useContext(MovieListContext);
  const onChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div class="flex justify-start gap-4 flex-wrap">
        {filterMovieData?.map((movie) => (
          <NavLink key={movie.id} to={`/movieDetail/${movie.id}`}>
            <div className="border w-[13rem] cursor-pointer max-w-[13rem] h-[26rem] max-h-[26rem] rounded-lg shadow-xl">
              <img
                className="rounded-t-lg"
                width="100%"
                height="17rem"
                srcSet={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path} 1x, https://media.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path} 2x`}
              />
              <div className="px-3 py-4">
                <Tooltip title={movie.title}>
                  <span className="font-semibold text-lg hover:text-cyan-400 line-clamp-2">
                    {movie.title}
                  </span>
                </Tooltip>
                <p className="text-gray-500">
                  {new Date(movie?.release_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      {!checkVisiblePage ? (
        <div className="flex justify-center pt-8">
          <Pagination
            current={currentPage}
            onChange={onChange}
            total={totalPage}
            defaultPageSize={20}
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
}
