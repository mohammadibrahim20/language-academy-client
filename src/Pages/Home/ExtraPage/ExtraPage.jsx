import join from "../../../assets/background/join.png";
import ContainerXL from "../../../components/ContainerXL";
const ExtraPage = () => {
  return (
    <div>
      <ContainerXL>
        <div className="flex flex-wrap md:flex-col mt-5 md:mt-28 ">
          <div className="w-full md:w-1/2 text-left space-y-3">
            <p className="font-bold text-lg text-red-400">What’s New</p>
            <h1 className="text-4xl text-[#002058] font-bold">
              Master the skills to drive your career
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>
          <div className="w-full md:w-1/2 ">
            <img src={join} alt="" />
          </div>
        </div>
      </ContainerXL>
    </div>
  );
};

export default ExtraPage;
