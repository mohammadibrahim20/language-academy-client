const Header = ({ subTitle, title, description, label }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-left space-y-3">
        <p className="font-bold text-lg text-red-400">{subTitle}</p>
        <h className="text-4xl text-[#002058] font-bold">{title}</h>
        <p>{description}</p>
      </div>
      <button className="btn btn-outline border-indigo-200 backdrop-blur hover:bg-indigo-400 hover:border-indigo-600 ring-1  rounded-full ">
        {label}
      </button>
    </div>
  );
};

export default Header;
