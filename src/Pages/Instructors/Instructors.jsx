import axios from "axios";
import { useEffect, useState } from "react";
import ContainerXL from "../../components/ContainerXL";
import Headers from "../../components/Headers";
import SubBanner from "../Shared/SubBanner/SUbBanner";
import Card from "./Card";

const Instructors = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(`http://localhost:5000/instructors`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <SubBanner title="Instructors" subTitle="Our all Instructors" />
      <ContainerXL>
        <div className="my-32">
          <Headers
            title="All Instructors"
            subTitle="Instructors"
            label="Back Home"
            description="Our all Instructors"
            path="/"
          />
          <div className="grid grid-cols-3 gap-5 my-10">
            {data?.map((useCard) => (
              <Card key={useCard._id} useCard={useCard} />
            ))}
          </div>
        </div>
      </ContainerXL>
    </div>
  );
};

export default Instructors;
