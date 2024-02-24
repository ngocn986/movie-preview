import React, { useContext } from 'react';
import { Progress, Rate } from 'antd';
import { AccountContext } from '../Context/AccountContext';
import { MovieListContext } from '../Context/MovieListContext';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
const conicColors = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ffccc7',
};
export default function ListWatchlist() {
  const { watchListData } = useContext(AccountContext);
  const { setMovieId, setValueRate, messageAddRate } =
    useContext(MovieListContext);
  const handleRating = (value) => {
    setValueRate(value * 2);
    toast.success(messageAddRate);
  };
  console.log(watchListData);
  return (
    <>
      <ToastContainer></ToastContainer>
      <p className="bg-white xl:px-[15vw] font-Roboto text-2xl py-2">
        My WatchList
      </p>
      <div className="bg-white xl:px-[15vw] p-0 max-h-[500px]  py-4 overflow-auto">
        {watchListData.length > 0 ? (
          watchListData?.map((watchList) => (
            <div
              key={watchList.id}
              className="shadow-2xl border flex h-[200px] rounded-lg gap-4 my-2"
            >
              <img
                srcSet={`https://media.themoviedb.org/t/p/w220_and_h330_face${watchList.poster_path} 1x, https://media.themoviedb.org/t/p/w440_and_h660_face${watchList.poster_path} 2x`}
                alt="no picture"
                className="h-full  rounded-tl-lg rounded-bl-lg"
              />
              <div className="py-6">
                <div className="flex gap-4">
                  <Progress
                    size={50}
                    type="circle"
                    percent={
                      (
                        (watchList?.vote_count / watchList?.popularity) *
                        100
                      ).toFixed(0) > 100
                        ? 'NaN'
                        : (
                            (watchList?.vote_count / watchList?.popularity) *
                            100
                          ).toFixed(0)
                    }
                    strokeColor={conicColors}
                    trailColor="#081c22"
                    strokeWidth={9}
                    className="bg-[#081c22] rounded-full "
                  />
                  <div>
                    <p className="font-bold text-xl line-clamp-1 xl:line-clamp-none">
                      {watchList.title}
                    </p>
                    <span className="text-gray-400">
                      {new Date(watchList?.release_date).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }
                      )}
                    </span>
                  </div>
                </div>
                <p className="line-clamp-2 h-[40%] overflow-hidden px-1 pt-4">
                  {watchList.overview}
                </p>
                <div className="pt-4">
                  <span className="pr-2">Rating:</span>
                  <Rate
                    allowHalf
                    onChange={(e) => {
                      handleRating(e);
                      setMovieId(watchList.id);
                    }}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>You haven't added any movies to your watchlist.</p>
        )}
      </div>
    </>
  );
}
