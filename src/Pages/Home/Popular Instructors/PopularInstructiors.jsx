import { MdOutlineMarkEmailRead } from "react-icons/md";
import Container from "../../../components/Container";
import Header from "../../../components/Header";

const PopularInstructiors = () => {
  return (
    <div className="bg-popular ">
      <Container>
        <div className="my-32">
          <Header
            title="Popular Instructors"
            subTitle="Our Most Popular Instructors"
            label="All Instructors"
            description="Popular Classes"
          />
          <div className="grid grid-cols-3 my-10">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://media.licdn.com/dms/image/C5603AQHtR8m5I1IJwQ/profile-displayphoto-shrink_800_800/0/1607378729683?e=1691625600&v=beta&t=3su2PliWFTWQh6-_v-DLOMaSqKgH4P4m6f0fapE8jGE"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
               <div className="text-center space-y-2">
               <h2 className="font-bold text-2xl text-center">
                  Munazarin Shahid
                </h2>
                <p className="flex justify-center items-center"><MdOutlineMarkEmailRead className="text-blue-600 mr-2"/>Email: munzareen@shhid.com</p>
               </div>
               {/* <div className="divider"></div> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularInstructiors;
