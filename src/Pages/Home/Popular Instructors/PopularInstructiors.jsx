import axios from "axios";
import { useEffect, useState } from "react";
import ContainerXL from "../../../components/ContainerXL";
import Headers from "../../../components/Headers";
import Card from "../../Instructors/Card";

const PopularInstructiors = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://assignment-final-server.vercel.app/instructors`).then((res) => {
      console.log(res.data);
      setData(res.data.slice(0, 6));
    });
  }, []);
  return (
    <div className="bg-popular pb-5">
      <ContainerXL>
        <div className="my-5 md:my-32">
          <Headers
            title="Popular Instructors"
            subTitle="Our Most Popular Instructors"
            label="All Instructors"
            description="Our Super Popular Instructors"
            path="/instructors"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
            {data?.map((useCard) => (
              <Card key={useCard._id} useCard={useCard} />
            ))}
          </div>
        </div>
      </ContainerXL>
    </div>
  );
};

export default PopularInstructiors;
