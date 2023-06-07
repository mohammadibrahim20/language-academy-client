import { BiBookReader } from "react-icons/bi";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import "./PopularClass.css";

const PopularClass = () => {
  return (
    <div className="bg-popular ">
      <Container>
        <div className="my-32">
          <Header
            title="Popular Classes"
            subTitle="Our Most Popular Classes"
            label="All Classes"
            description="Popular Classes"
          />
          <div className="grid grid-cols-3 my-10">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-5 pt-5">
                <img
                  src="https://dreamslms-wp.dreamguystech.com/wp-content/uploads/2023/01/course-13-5-768x512.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="px-8 pt-8 space-y-4">
                <div className="flex justify-between items-cnter">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="flex-1 ml-5 text-left">
                    <h4 className="text-lg font-bold">David Khan</h4>
                    <p>Instructor</p>
                  </div>
                  <span className="flex items-center text-xl ">
                    Price: <strong>10$</strong>
                  </span>
                </div>
                <h3 className="font-semibold text-xl">
                  Compelte HTML CSS and JavaScript Course
                </h3>
                <div className="flex justify-between items-center">
                  <span className="flex items-center">
                    <BiBookReader className="text-red-500 mr-3" />
                    <strong>Availble Seat:</strong> 25
                  </span>
                </div>
                <div className="divider"></div>
              </div>
              <div className="flex justify-around my-3">
                <button className="btn btn-outline border-indigo-200 backdrop-blur hover:bg-indigo-400 hover:border-indigo-600 ring-1  rounded-full ">
                  Add Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularClass;
