import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserProfile: FC = () => {
  const [currUser, setCurrUser] = useState<any>({});
  const user = currUser || {
    id: "",
    firstName: "Admin",
    lastName: "Admin",
    email: "",
    password: "",
    type: "",
    responses: [],
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("Fetching user...");
        const result = await fetch("http://localhost:8080/user/getLoggedIn", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (result.ok) {
          
          const data = await result.json();
          console.log("Data:", data);
          setCurrUser(data);
        } else {
          console.error("Error fetching user:", result.statusText);
          console.log("Response:", result);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="w-screen-xl px-4 bg-white min-h-screen flex flex-col items-center mt-12">
      <div className="max-w-md w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden mt-4">
        <img
          className="w-full h-56 object-cover"
          src={"../images/ustlogo.png"}
          alt={`${user.firstName}'s profile`}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
        <div className="p-2">
          <Link
            to="/landingpage"
            className="block w-1/2 mx-auto bg-yellow-400 hover:bg-yellow-500 text-white text-center font-semibold py-2 rounded"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
