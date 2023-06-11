import axios from "axios";
import { useEffect, useState } from "react";
import ClassCard from "../../../components/Card/ClassCard";
import ContainerXL from "../../../components/ContainerXL";
import Headers from "../../../components/Headers";
import SubBanner from "../../Shared/SubBanner/SUbBanner";

const Classes = () => {
  const [classData, setClassData] = useState([]);
  useEffect(() => {
    axios.get(`https://assignment-final-server.vercel.app/all-class`).then((res) => {
      console.log(res.data);
      setClassData(res.data);
    });
  }, []);
  return (
    <div>
      <SubBanner title="All Class" subTitle="Our all Classes" />
      <div>
        <ContainerXL>
          <div className="my-32">
            <Headers
              title="Popular Classes"
              subTitle="Our Most Popular Classes"
              label="Back Home"
              path="/"
              description="Popular Classes"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 gap-5">
              {classData.map((card) => (
                <ClassCard key={card._id} card={card} />
              ))}
            </div>
          </div>
        </ContainerXL>
      </div>
    </div>
  );
};

export default Classes;
