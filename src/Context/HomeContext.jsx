import { useCallback, useEffect } from 'react';
import { createContext, useState } from 'react';
import MovieService from '../Services/MovieServices';
export const HomeContext = createContext({});

export const HomeProvider = ({ children }) => {
  const service = new MovieService();
  const [popularMovie, setPopularMovie] = useState([]);
  const [videoTrailerMovie, setVideoTrailerMovie] = useState([]);
  const [movieId, setMovieId] = useState('');
  const [stateTrendingNow, setStateTrendingNow] = useState(false);
  const [movieTrend, setMovieTrend] = useState([]);
  const [movieUpComing, setMovieUpComing] = useState([]);
  const [stateShowHeader, setStateShowHeader] = useState(false);
  useEffect(() => {
    service.getPopularMovie().then((response) => {
      setPopularMovie(response.results.slice(0, 10));
    });
  }, []);

  useEffect(() => {
    service.movieVideoTrailer(movieId).then((response) => {
      setVideoTrailerMovie(response?.results);
    });
  }, [movieId]);
  const handleTrendingNow = (e) => {
    setStateTrendingNow(e);
  };

  useEffect(() => {
    switch (stateTrendingNow) {
      case false:
        service.getMovieTrendingNowByDay('day').then((response) => {
          setMovieTrend(response?.results);
        });
        break;
      case true:
        service.getMovieTrendingNowByDay('week').then((response) => {
          setMovieTrend(response?.results);
        });
    }
  }, [stateTrendingNow]);

  useEffect(() => {
    service.upComingMovie().then((response) => {
      setMovieUpComing(response?.results);
    });
  }, []);
  const contextValue = {
    popularMovie: popularMovie,
    movieId: movieId,
    setMovieId: setMovieId,
    videoTrailerMovie: videoTrailerMovie,
    handleTrendingNow: handleTrendingNow,
    movieTrendByDay: movieTrend,
    movieUpComing: movieUpComing,
    setStateShowHeader: setStateShowHeader,
    stateShowHeader: stateShowHeader
  };
  return (
    <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>
  );
};
