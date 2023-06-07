
import Banner from "../../../assets/background/ellipse.png";

const SubBanner = ({title, subTitle}) => {
  return (
    <div className="h-[360px] bg-cover bg-center py-4 px-8 text-center flex justify-center items-center">
      <img
        src={Banner}
        alt="Banner Image"
        className="w-full h-[412px] "
      />
       <div className="absolute bg-black bg-opacity-10 flex flex-col justify-center h-[360px] w-full my-5  p-4">
        <h1 className="md:text-5xl text-3xl font-bold">{title}</h1>
        <p className="md:text-2xl text-lg mt-5 text-gray-800">{subTitle}</p>
      </div>
    </div>
  );
};

export default SubBanner;
