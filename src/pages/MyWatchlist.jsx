import React from 'react';
import { LoginProvider } from '../Context/LoginContext';
import InfoWatchList from '../components/InfoWatchList';
import ListWatchlist from '../components/ListWatchlist';
import { AccountProvider } from '../Context/AccountContext';
import { MovieListProvider } from '../Context/MovieListContext';
export default function MyWatchlist() {
  return (
    <>
      <LoginProvider>
        <InfoWatchList></InfoWatchList>
      </LoginProvider>
      <AccountProvider>
        <MovieListProvider>
          <ListWatchlist></ListWatchlist>
        </MovieListProvider>
      </AccountProvider>
    </>
  );
}
