import Bannerr from "../Banner/Banner";
import ExtraPage from "../ExtraPage/ExtraPage";
import PopularInstructiors from "../Popular Instructors/PopularInstructiors";
import PopularClass from "../PopularClass/PopularClass";

const Home = () => {
  return (
    <div>
      <Bannerr />
      <PopularClass />
      <PopularInstructiors/>
      <ExtraPage/>
    </div>
  );
};

export default Home;
