import React from 'react';
import BannerLogin from '../components/BannerLogin';
import FieldLogin from '../components/FieldLogin';
import { HomeProvider } from '../Context/HomeContext';
import { LoginProvider } from '../Context/LoginContext';

export default function () {
  return (
    <>
      <div className="flex bg-[#201f2d] rounded-xl shadow-2xl w-full 2xl:w-[40%] xl:w-[60%] md:w-[80%] sm:w-[55ch]  max-w-1/2 max-h-1/2 absolute top-[15rem] xl:left-[20rem] 2xl:left-[37rem] md:left-[6rem] sm:left-[5rem]">
        <div className="hidden xl:block md:block 2xl:block">
          <HomeProvider>
            <BannerLogin></BannerLogin>
          </HomeProvider>
        </div>
        <div className=" flex-grow-[1.5] px-12 pt-6">
          <LoginProvider>
            <FieldLogin></FieldLogin>
          </LoginProvider>
        </div>
      </div>
    </>
  );
}
