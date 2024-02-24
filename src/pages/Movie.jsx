import React from 'react';
import FilterMovie from '../components/FilterMovie';
import MovieList from '../components/MovieList';
import { MovieListProvider } from '../Context/MovieListContext';
import Search from '../components/SearchHeader';
export default function Movie() {
  return (
    <>
      <MovieListProvider>
        <div className="bg-white py-8 xl:px-60 sm:px-10 md:px-20 lg:px-40">
          <div className="flex items-center justify-between">
            <p className="font-Roboto text-3xl">Movie list</p>
            <Search></Search>
          </div>
          <div className="flex gap-6 pt-4">
            <div>
              <FilterMovie></FilterMovie>
            </div>
            <div className="flex-grow-1">
              <MovieList></MovieList>
            </div>
          </div>
        </div>
      </MovieListProvider>
    </>
  );
}
