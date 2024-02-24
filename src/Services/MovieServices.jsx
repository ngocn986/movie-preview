import axios from 'axios';

const access_token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGMxZjAyNmI1ZDBlYzJiODY3YWIyOTlhODU5MzBkOCIsInN1YiI6IjY0MDk5Y2M0MzJjYzJiMDA4NDEwNGEwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eoWptJcADTV2Z5Cz8S_UithD9CsOFCrgV_DeN-EP1zs';
class MovieService {
  async getPopularMovie() {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular',
        params: { language: 'en-US', page: '1' },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async movieVideoTrailer(movieId) {
    try {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        params: { language: 'en-US' },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getMovieTrendingNowByDay(date) {
    try {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/trending/movie/${date}`,
        params: { language: 'en-US' },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async upComingMovie() {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/upcoming',
        params: { language: 'en-US', page: '1' },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async getMovieDetail(movieId) {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
    };

    const response = await axios.request(options);
    return response.data;
  }
  async releaseDateMovieDetail(movieId) {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}/release_dates`,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
    };

    const response = await axios.request(options);
    return response.data;
  }
  async creditAndCrewMovie(movieId) {
    try {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
        params: { language: 'en-US' },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async externalId(movieId) {
    try {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieId}/external_ids`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async keyword(movieId) {
    try {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieId}/keywords`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async reviews(movieId) {
    try {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
        params: { language: 'en-US', page: '1' },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async similar(movieId) {
    try {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movieId}/similar`,
        params: { language: 'en-US', page: '1' },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async searchKeywords(query) {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/keyword',
        params: { query: query, page: '1' },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async FilterSeeMovie(type, pageNumber) {
    try {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${type}`,
        params: { language: 'en-US', page: pageNumber },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async genres() {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/genre/movie/list',
        params: { language: 'en' },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async keywordsByMovie(keywordIds, pageNumber) {
    try {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/keyword/${keywordIds}/movies`,
        params: { include_adult: 'false', language: 'en-US', page: pageNumber },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async addToWatchList(movieId, accountId) {
    try {
      const options = {
        method: 'POST',
        url: `https://api.themoviedb.org/3/account/${accountId}/watchlist`,
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
        data: { media_type: 'movie', media_id: movieId, watchlist: true },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async listWatchList(accountId) {
    try {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies`,
        params: { language: 'en-US', page: '1', sort_by: 'created_at.asc' },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async addRating(movieId, valueRate) {
    try {
      const options = {
        method: 'POST',
        url: `https://api.themoviedb.org/3/movie/${movieId}/rating`,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${access_token}`,
        },
        data: `{"value":${valueRate}}`,
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async searchMovies(query, currentPage) {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
          query: query,
          include_adult: 'true',
          language: 'en-US',
          page: currentPage,
        },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default MovieService;
