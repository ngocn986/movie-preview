import React, { useContext } from 'react';
import { MovieDetailContext } from '../Context/MovieDetailContext';

export default function Keyword() {
  const { keyword } = useContext(MovieDetailContext);
  return (
    <>
      <p className="font-Roboto text-xl pb-2">Keyword</p>
      <div className="flex items-center flex-wrap gap-2 w-[20rem]">
        {keyword && keyword.keywords &&
          keyword.keywords.map((keyword) => (
            <span key={keyword.id} className="border border-[#e5e5e5] px-1.5 py-1 rounded-md bg-[#e5e5e5]">
              {keyword.name}
            </span>
          ))}
      </div>
    </>
  );
}
