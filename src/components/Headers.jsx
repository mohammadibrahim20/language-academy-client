import { Link } from "react-router-dom";

const Headers = ({ subTitle, title, description, label, path }) => {
  return (
    <div className="flex md:justify-between items-center">
      <div className="text-left space-y-1 md:space-y-3">
        <p className="font-bold text-lg text-red-400">{subTitle}</p>
        <h1 className="text-3xl md:text-4xl text-[#002058] font-bold">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="hidden md:block">
        <Link
          to={path}
          className="btn btn-outline border-indigo-200 backdrop-blur hover:bg-indigo-400 hover:border-indigo-600 ring-1 rounded-full "
        >
          {label}
        </Link>
      </div>
    </div>
  );
};

export default Headers;
