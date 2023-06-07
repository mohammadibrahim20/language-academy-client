// import Banner from "../../../assets/background/banner.png";
import photoObject from "../../../assets/background/object.png";
import ContainerXL from "../../../components/ContainerXL";
import "./Banner.css";
const Bannerr = () => {
  return (
    <div className="w-full new-banner">
      <ContainerXL>
        <div className="flex flex-col md:flex-row m-5 justify-between items-center py-16 md:py-32 ">
          <div className="text-left my-auto space-y-5">
            <p className="text-xl font-semibold">The Leader in Online Learning</p>
            <h1 className="text-3xl text-[#002058] font-bold md:text-6xl md:w-3/4 ">
              Engaging & Accessible Online Courses For All
            </h1>
            <p className="text-2xl font-medium">Trusted by over 15K Users worldwide since 2022</p>
          </div>
          <figure className="px-8 py-5 ">
            <img className="object-cover bottom-0" src={photoObject} alt="" />
          </figure>
        </div>
      </ContainerXL>
    </div>
  );
};

export default Bannerr;
