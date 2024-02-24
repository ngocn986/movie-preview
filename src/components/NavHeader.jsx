import { NavLink, useLocation } from 'react-router-dom';

const navOption = [
  {
    id: '1',
    linkUrl: '/',
    name: 'Home',
  },
  {
    id: '3',
    linkUrl: '/movies',
    name: 'Movies',
  },
  {
    id: '4',
    linkUrl: '/myWatchList',
    name: 'My Watchlist',
  },
];

export default function NavHeader() {
  const accountId = localStorage.getItem('account_id');
  const location = useLocation();
  return (
    <div className="flex flex-grow-[8] font-Roboto justify-center ">
      {navOption.map((item) => (
        <NavLink
          key={item.id}
          to={`${
            item.linkUrl === '/myWatchList' && !accountId
              ? '/login'
              : item.linkUrl
          }`}
        >
          <span
            className={`cursor-pointer border-b-4 ${
              location.pathname === item.linkUrl
                ? 'border-red-600 text-white font-bold'
                : 'border-none'
            } w-[6rem] h-full flex items-center justify-center text-[#da3b1e]`}
          >
            {item.name}
          </span>
        </NavLink>
      ))}
    </div>
  );
}
