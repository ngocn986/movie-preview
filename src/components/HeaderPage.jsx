import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { HomeContext } from '../Context/HomeContext';
import { LoginProvider } from '../Context/LoginContext';
import LogoHeader from './LogoHeader';
import NavHeader from './NavHeader';
import ProfileHeader from './ProfileHeader';
export default function HeaderPage() {
  const { stateShowHeader } = useContext(HomeContext);
  const location = useLocation();
  return (
    <div>
      {!stateShowHeader ? (
        <div
          className={`${
            location.pathname.split('/')[1] === 'movieDetail' ||
            location.pathname.split('/')[1] === 'movies' ||
            location.pathname.split('/')[1] === 'myWatchList'
              ? 'w-full left-0'
              : 'absolute z-10 w-full'
          } border-b border-[#da3b1e] flex justify-around bg-[#00000067]`}
        >
          <LogoHeader></LogoHeader>
          <NavHeader></NavHeader>
          <ProfileHeader></ProfileHeader>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
