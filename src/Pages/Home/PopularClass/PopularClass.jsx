import axios from "axios";
import { useEffect, useState } from "react";
import ClassCard from "../../../components/Card/ClassCard";
import ContainerXL from "../../../components/ContainerXL";
import Headers from "../../../components/Headers";
import LodingCmpo from "../../../components/LodingCmpo";
import "./PopularClass.css";

const PopularClass = () => {
  const [classData, setClassData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://assignment-final-server.vercel.app/popular-class`)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setClassData(res.data.slice(0, 6));
      });
  }, []);
  return (
    <div className="bg-popular pb-5 md:mt-24">
      <ContainerXL>
        <div className="my-5 md:mb-24">
          <Headers
            title="Popular Classes"
            subTitle="Our Most Popular Classes"
            label="All Classes"
            description="Popular Classes"
            path="/classes"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 gap-5">
            {classData.map((card) => (
              <ClassCard key={card._id} card={card} />
            ))}
          </div>
          {loading && <LodingCmpo />}
        </div>
      </ContainerXL>
    </div>
  );
};

export default PopularClass;
