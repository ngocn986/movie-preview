import React from 'react';
import HeaderPage from '../components/HeaderPage';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { HomeProvider } from '../Context/HomeContext';
import { MovieDetailProvider } from '../Context/MovieDetailContext';
export default function HomePage() {
  return (
    <>
      <HomeProvider>
        <MovieDetailProvider>
          <div>
            <HeaderPage></HeaderPage>
            <div>
              <Outlet></Outlet>
              <Footer></Footer>
            </div>
          </div>
        </MovieDetailProvider>
      </HomeProvider>
    </>
  );
}
