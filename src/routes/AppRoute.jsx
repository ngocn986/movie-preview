import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Movies from '../pages/Movie';
import MyList from '../pages/MyWatchlist';
import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';
import Login from '../pages/Login';

function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="/" element={<HomePage></HomePage>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="movies" element={<Movies></Movies>}></Route>
          <Route path="myWatchList" element={<MyList></MyList>}></Route>
          <Route
            path="movieDetail/:movieId"
            element={<MovieDetail></MovieDetail>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default AppRoute;
