import photoObject from "../../../assets/background/object.png";
import "./Banner.css";
// Import Swiper React components
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import ContainerXL from "../../../components/ContainerXL";

const Bannerr = () => {
  return (
    <div className="w-full h-[85vh] md:h-[60vh] new-banner">
      <ContainerXL>
        <Swiper
          modules={[Navigation,Pagination, Scrollbar, A11y,]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          
          <SwiperSlide >
            <div className="flex flex-col md:flex-row justify-between items-center py-12 md:py-10">
              <div className="text-left my-auto space-y-1 md:space-y-5 ">
                <p className="text-xl font-semibold">
                  The Leader in Online Learning
                </p>
                <h1 className="text-3xl text-[#002058] font-bold md:text-6xl md:w-3/4 ">
                Improve Your Language Skill in Language Academy
                </h1>
                <p className="text-2xl font-medium">
                  Trusted by over 15K Users worldwide since 2022
                </p>
              </div>
              <figure className="px-8 pt-8 md:pt-0">
                <img
                  className="object-cover bottom-0"
                  src={photoObject}
                />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col md:flex-row m-5 justify-between items-center ">
              <div className="text-left my-auto space-y-5">
                <p className="text-xl font-semibold">
                  The Leader in Online Learning
                </p>
                <h1 className="text-3xl text-[#002058] font-bold md:text-6xl md:w-3/4 ">
                  Engaging & Accessible Online Courses For All
                </h1>
                <p className="text-2xl font-medium">
                  Trusted by over 15K Users worldwide since 2022
                </p>
              </div>
              <figure className="px-8 py-5 ">
                <img
                  className="object-cover bottom-0"
                  src={photoObject}
                  alt=""
                />
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </ContainerXL>
    </div>
  );
};

export default Bannerr;
