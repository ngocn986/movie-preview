import React, { useContext } from 'react';
import { MovieListContext } from '../Context/MovieListContext';

export default function SearchInput() {
  const { setQuery } = useContext(MovieListContext)
  const handleSearch = (e) => {
    setQuery(e.target.value);
  }
  return (
    <div className="max-w-md rounded-xl">
      <div className="relative flex items-center w-full h-12 focus-within:shadow-lg overflow-hidden">
        <input
          onChange={handleSearch}
          className="h-full w-full mr-2 outline-none text-sm text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search something.."
        />
        <div className="grid place-items-center h-full px-3 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
