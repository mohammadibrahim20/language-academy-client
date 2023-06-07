import { Link } from "react-router-dom";

const OutlineBtn = ({ label, path }) => {
  return (
    <Link to={path} className="btn btn-outline border-indigo-200 backdrop-blur hover:bg-indigo-400 hover:border-indigo-600 ring-1  rounded-full ">
      {label}
    </Link>
  );
};

export default OutlineBtn;
