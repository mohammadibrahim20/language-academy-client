import { ThreeCircles } from "react-loader-spinner";

const LodingCmpo = () => {
  return (
    <div className="flex justify-center items-center">
      <ThreeCircles
        height="300"
        width="300"
        color="#d54215"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default LodingCmpo;
