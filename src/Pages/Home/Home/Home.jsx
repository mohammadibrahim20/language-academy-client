import Bannerr from "../Banner/Banner";
import PopularInstructiors from "../Popular Instructors/PopularInstructiors";
import PopularClass from "../PopularClass/PopularClass";

const Home = () => {
  return (
    <div>
      <Bannerr />
      <PopularClass />
      <PopularInstructiors/>
    </div>
  );
};

export default Home;
