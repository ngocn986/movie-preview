import { useEffect, useState } from 'react';
import { createContext } from 'react';
import MovieService from '../Services/MovieServices';
export const MovieDetailContext = createContext({});

export const MovieDetailProvider = ({ children }) => {
  const [movieDetailId, setMovieDetailId] = useState('');
  const [movieDetailData, setMovieDetailData] = useState([]);
  const [releaseDateMovieDetail, setReleaseDateMovieDetail] = useState([]);
  const [creditAndCrewData, setCreditAndCrewData] = useState([]);
  const [externalID, setExternalID] = useState([]);
  const [keyword, setKeyword] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [similarData, setSimilarData] = useState([]);
  const service = new MovieService();
  useEffect(() => {
    service.getMovieDetail(movieDetailId).then((data) => {
      setMovieDetailData(data);
    });
    service.releaseDateMovieDetail(movieDetailId).then((data) => {
      setReleaseDateMovieDetail(data.results);
    });
    service.creditAndCrewMovie(movieDetailId).then((data) => {
      setCreditAndCrewData(data);
    });
    service.externalId(movieDetailId).then((data) => {
      setExternalID(data);
    });
    service.keyword(movieDetailId).then((data) => {
      setKeyword(data);
    });
    service.reviews(movieDetailId).then((data) => {
      setReviewData(data.results);
    });
    service.similar(movieDetailId).then((data) => {
      setSimilarData(data.results);
    });

  }, [movieDetailId]);

  const contextValue = {
    setMovieDetailId: setMovieDetailId,
    movieDetailId: movieDetailId,
    movieDetailData: movieDetailData,
    releaseDateMovieDetail: releaseDateMovieDetail,
    creditAndCrewData: creditAndCrewData,
    externalID: externalID,
    keyword: keyword,
    reviewData: reviewData,
    similarData: similarData
  };

  return (
    <MovieDetailContext.Provider value={contextValue}>
      {children}
    </MovieDetailContext.Provider>
  );
};
