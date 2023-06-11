import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { FcReadingEbook } from "react-icons/fc";
import { FiAward, FiBookOpen, FiUserPlus } from "react-icons/fi";
import join from "../../../assets/background/join.png";
import ContainerXL from "../../../components/ContainerXL";
const ExtraPage = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div>
      <ContainerXL>
        <div className="flex flex-col md:flex-row mt-5 md:mt-28 ">
          <div className="w-full text-left space-y-3">
            <p className="font-bold text-lg text-red-400">What’s New</p>
            <Fade cascade>
              <h1 className="text-4xl text-[#002058] font-bold">
                Master the skills to drive your career
              </h1>
            </Fade>
            <p>
              At Language Academy, we believe that learning a new language opens
              doors to new cultures, opportunities, and personal growth. Our
              academy is dedicated to providing comprehensive language education
              that empowers individuals to become proficient communicators in a
              globalized world.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Fade>
                <div className="flex justify-center items-center mt-5">
                  <span className="mr-5">
                    <FcReadingEbook className="text-7xl p-2 bg-red-100 mask mask-squircle" />
                  </span>
                  <p className="font-semibold text-gray-500 text-lg">
                    ContentStay motivated with engaging instructors
                  </p>
                </div>
              </Fade>
              <Fade>

              <div className="flex justify-center items-center mt-5">
                <span className="mr-5">
                  <FiUserPlus className="text-7xl p-3 text-red-400 bg-red-100 mask mask-squircle" />
                </span>
                <p className="font-semibold text-gray-500 text-lg">
                  Keep up with in the latest in cloud
                </p>
              </div>
              <div className="flex justify-center items-center mt-5">
                <span className="mr-5">
                  <FiAward className="p-3 text-red-400 text-7xl bg-red-100 mask mask-squircle" />
                </span>
                <p className="font-semibold text-gray-500 text-lg">
                  Get certified with 100+ certification courses
                </p>
              </div>
              </Fade>
              <Fade bounce>
              <div className="flex justify-center items-center mt-5">
                <span className="mr-5">
                  <FiBookOpen className="text-7xl p-3 text-red-400 bg-red-100 mask mask-squircle" />
                </span>
                <p className="font-semibold text-gray-500 text-lg">
                  Build skills your way, from labs to courses
                </p>
              </div>
            </Fade>
            </div>
           
          </div>
          <div className="w-full "  data-aos="fade-left" >
            <img src={join} alt="" />
          </div>
        </div>
      </ContainerXL>
    </div>
  );
};

export default ExtraPage;
