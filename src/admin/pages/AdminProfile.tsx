import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const AdminProfile: FC = () => {
  const location = useLocation();
  const user = location.state?.user || {
    name: "Admin",
    role: "Admin",
    img: "../images/ustlogo.png",
  };

  return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center mt-12">
      <div className="max-w-md w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden mt-4">
        <img
          className="w-full h-56 object-cover"
          src={user.img}
          alt={`${user.name}'s profile`}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-600">{user.role}</p>
        </div>
        <div className="p-2">
          <Link
            to="/admin/dashboard"
            className="block w-1/2 mx-auto bg-yellow-400 hover:bg-yellow-500 text-white text-center font-semibold py-2 rounded"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
