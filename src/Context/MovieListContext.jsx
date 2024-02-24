import { createContext, useEffect, useState } from 'react';
import MovieService from '../Services/MovieServices';
export const MovieListContext = createContext({});

export const MovieListProvider = ({ children }) => {
  const service = new MovieService();
  const [valueRadio, setValueRadio] = useState('now_playing');
  const [movieData, setMovieData] = useState([]);
  const [filterMovieData, setFilterMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [genresData, setGenresData] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [valueKeywords, setValueKeywords] = useState([]);
  const [checkVisiblePage, setCheckVisiblePage] = useState(false);
  const [movieId, setMovieId] = useState('');
  const [valueRate, setValueRate] = useState('');
  const [messageAddRate, setMessageAddRate] = useState('');
  const [query, setQuery] = useState('');
  useEffect(() => {
    setCurrentPage(1);
    setSelectedTags([]);
    setValueKeywords([]);
  }, [valueRadio]);

  useEffect(() => {
    service.addRating(movieId, valueRate).then((data) => {
      setMessageAddRate(data.status_message);
    });
  }, [movieId, valueRate]);
  useEffect(() => {
    service.FilterSeeMovie(valueRadio, currentPage).then((data) => {
      setFilterMovieData(data.results);
      setMovieData(data.results);
      setTotalPage(data.total_pages);
    });
    service.genres().then((data) => {
      setGenresData(data.genres);
    });
  }, [valueRadio, currentPage]);

  useEffect(() => {
    const query = valueKeywords.map((value) => value.value).join(' ');
    if (!query) {
      setFilterMovieData(movieData);
    } else {
      service.keywordsByMovie(query, currentPage).then((data) => {
        console.log(data);
        setFilterMovieData(data.results);
        setMovieData(data.results);
        setTotalPage(data.total_pages);
      });
    }
  }, [valueKeywords, currentPage]);

  useEffect(() => {
    const a = selectedTags.map((tag) => tag);
    const result = filterMovieData.filter((movie) =>
      movie.genre_ids.some((genre) => a.includes(genre))
    );
    if (result.length === 0) {
      setFilterMovieData(movieData);
      setCheckVisiblePage(false);
    } else {
      setFilterMovieData(result);
      setCheckVisiblePage(true);
    }
  }, [selectedTags]);

  useEffect(() => {
    if (query && currentPage) {
      service.searchMovies(query, currentPage).then((data) => {
        setFilterMovieData(data.results);
      });
    } else {
      setFilterMovieData(movieData);
      setCurrentPage('1')
    }
  }, [query, currentPage]);
  const contextValue = {
    setValueRadio: setValueRadio,
    valueRadio: valueRadio,
    filterMovieData: filterMovieData,
    setCurrentPage: setCurrentPage,
    currentPage: currentPage,
    totalPage: totalPage,
    genresData: genresData,
    setSelectedTags: setSelectedTags,
    selectedTags: selectedTags,
    setValueKeywords: setValueKeywords,
    valueKeywords: valueKeywords,
    checkVisiblePage: checkVisiblePage,
    setMovieId: setMovieId,
    setValueRate: setValueRate,
    messageAddRate: messageAddRate,
    setQuery: setQuery,
  };
  return (
    <MovieListContext.Provider value={contextValue}>
      {children}
    </MovieListContext.Provider>
  );
};
