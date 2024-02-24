import TrendingNow from '../components/TrendingNow';
import UpComingHomePage from '../components/UpComingHomePage';
import { HomeProvider } from '../Context/HomeContext';
import BannerImageHomePage from '../components/BannerImageHomePage';

export default function Home() {
  return (
    <>
      <BannerImageHomePage></BannerImageHomePage>
      <div className="bg-[#16151a]">
        <TrendingNow></TrendingNow>
      </div>
      <div className="bg-[#16151a]">
        <UpComingHomePage></UpComingHomePage>
      </div>
    </>
  );
}
