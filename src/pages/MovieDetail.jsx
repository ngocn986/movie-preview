import { format, parseISO } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetailContext } from '../Context/MovieDetailContext';
import { Popover, Progress } from 'antd';
import BtnAddList from '../components/BtnAddList';
import BtnPlayTrailer from '../components/BtnPlayTrailer';
import CastMovieDetail from '../components/CastMovieDetail';
import NavContact from '../components/NavContact';
import Keyword from '../components/Keyword';
import Review from '../components/Review';
import Similar from '../components/Similar';
import MovieService from '../Services/MovieServices';
import { toast, ToastContainer } from 'react-toastify';
export default function MovieDetail() {
  const service = new MovieService();
  const { movieId } = useParams();
  const accountId = localStorage.getItem('account_id');
  const [certificate, setCertificate] = useState([]);
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);
  const [review, setReview] = useState([]);
  const {
    setMovieDetailId,
    movieDetailData,
    releaseDateMovieDetail,
    creditAndCrewData,
    movieDetailId,
    reviewData,
    similarData,
  } = useContext(MovieDetailContext);

  const handleAddWatchList = (movieId) => {
    service.addToWatchList(movieId, accountId).then((data) => {
      toast.success(data.status_message);
    });
  };

  useEffect(() => {
    setMovieDetailId(movieId);
    setCertificate(
      releaseDateMovieDetail?.filter((item) => item.iso_3166_1 === 'VI')
    );
    setCrew(creditAndCrewData?.crew?.filter((item) => item.job === 'Director'));
    setCast(creditAndCrewData?.cast);
    setReview(reviewData);
  }, [movieId, releaseDateMovieDetail, creditAndCrewData]);
  const content = (
    <div>
      <p className="font-Roboto text-lg">
        Popularity: {movieDetailData?.popularity}
      </p>
      <p className="font-Roboto text-lg">
        Vote Count: {movieDetailData?.vote_count}
      </p>
    </div>
  );

  const conicColors = {
    '0%': '#87d068',
    '50%': '#ffe58f',
    '100%': '#ffccc7',
  };
  console.log('movieDetailData: ', movieDetailData);
  return (
    <>
      <div
        className="relative text-white w-full h-[600px]"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieDetailData?.poster_path}')`,
          backgroundPosition: 'left calc((50vw - 170px) - 540px) center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-[#000000c4]">
          <div className="top-[2rem] left-[8vw] absolute flex gap-8 items-center ">
            <div>
              <img
                width="340px"
                height="450px"
                srcSet={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetailData?.poster_path} 1x, https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movieDetailData?.poster_path} 2x`}
                alt={movieDetailData?.title}
                className="rounded-xl"
              ></img>
            </div>
            <div className="w-[900px]">
              <span className="font-bold text-4xl">
                {movieDetailData?.original_title}
              </span>
              <span className="text-4xl text-gray-300 px-3">
                (
                {movieDetailData?.release_date &&
                  format(parseISO(movieDetailData?.release_date), 'yyyy')}
                )
              </span>
              <div className="flex items-center mt-2 text-gray-300 text-center gap-2">
                <p className="border border-white px-1 font-Roboto rounded-md ">
                  {certificate[0]?.release_dates[0]?.certification}
                </p>
                <li className="font-Roboto">
                  {certificate[0]?.release_dates[0]?.release_date &&
                    format(
                      parseISO(certificate[0]?.release_dates[0]?.release_date),
                      'yyyy/MM/dd'
                    )}
                </li>
              </div>
              <ul className="font-Roboto pt-2 text-lg">
                {movieDetailData?.genres?.map((genres, index) => (
                  <span key={genres.id}>
                    {genres.name}
                    {index < movieDetailData?.genres?.length - 1 && ', '}
                  </span>
                ))}
              </ul>
              <div className="flex items-center gap-4 mt-2">
                <Popover content={content} title="Score" placement="bottom">
                  <div className="w-fit bg-[#ffffff69] hover:scale-110 rounded-full mt-2">
                    <div className="custom-progress">
                      <Progress
                        size="small"
                        type="circle"
                        percent={
                          (
                            (movieDetailData?.vote_count /
                              movieDetailData?.popularity) *
                            100
                          ).toFixed(0) > 100
                            ? 'NaN'
                            : (
                                (movieDetailData?.vote_count /
                                  movieDetailData?.popularity) *
                                100
                              ).toFixed(0)
                        }
                        strokeColor={conicColors}
                        trailColor="#423d0f"
                        strokeWidth={8}
                      />
                    </div>
                  </div>
                </Popover>
                <span className="w-[80px] font-bold text-lg">User Score</span>
                <BtnAddList
                  movieDetailId={movieDetailId}
                  handleAddWatchList={handleAddWatchList}
                ></BtnAddList>
                <BtnPlayTrailer movieDetailId={movieDetailId}></BtnPlayTrailer>
              </div>
              <p className="py-4 font-semibold text-gray-400 text-lg italic">
                {movieDetailData?.tagline}
              </p>
              <span className="font-semibold text-2xl">Overview</span>
              {<p className="py-2">{movieDetailData?.overview}</p>}
              <div className="py-3">
                {crew &&
                  crew.map((crew) => (
                    <div key={crew.id}>
                      <p className="font-Roboto text-xl">{crew.name}</p>
                      <p className="font-Roboto">{crew.job}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-52 pt-8 w-[115.7rem]">
        <span className="font-Roboto text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Actor
        </span>
        <div className="flex justify-around gap-8">
          <section className="bg-white px-4 sm:px-8 md:px-12 lg:px-16 pt-8 ">
            <CastMovieDetail cast={cast}></CastMovieDetail>
            <div className="py-10 border-b border-gray-500"></div>
            <Review review={review}></Review>
            <div className="border-b border-gray-500"></div>
            <Similar similarData={similarData}></Similar>
          </section>
          <section className="flex-grow-[2]">
            <NavContact movieDetailData={movieDetailData}></NavContact>
            <div className="py-5">
              <p className="font-Roboto text-lg">Status</p>
              <p className="">{movieDetailData?.status}</p>
            </div>
            <div>
              <p className="font-Roboto text-lg">Original Language</p>
              <p className="">{movieDetailData?.original_language}</p>
            </div>
            <div className="py-5">
              <p className="font-Roboto text-lg">Budget</p>
              <p className="">${movieDetailData?.budget?.toLocaleString()}</p>
            </div>
            <div>
              <p className="font-Roboto text-lg">Revenue</p>
              <p className="">${movieDetailData?.revenue?.toLocaleString()}</p>
            </div>
            <div className="py-5 ">
              <Keyword></Keyword>
            </div>
            <ToastContainer></ToastContainer>
          </section>
        </div>
      </div>
    </>
  );
}
