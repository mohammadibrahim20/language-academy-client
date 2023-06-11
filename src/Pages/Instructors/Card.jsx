import { MdOutlineMarkEmailRead } from "react-icons/md";

const Card = ({useCard}) => {
  const { email, user_photo, user_name} = useCard
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-5 rounded" >
        <img
          src={user_photo ? user_photo : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
          className="h-80 w-full object-cover rounded-xl"
        />
      </figure>
      <div className="card-body">
        <div className="text-center space-y-2">
          <h2 className="font-bold text-2xl text-center">{user_name}</h2>
          <p className="flex justify-center items-center">
            <MdOutlineMarkEmailRead className="text-blue-600 mr-2" />
            Email: {email}
          </p>
        </div>
        {/* <div className="divider"></div> */}
      </div>
    </div>
  );
};

export default Card;
