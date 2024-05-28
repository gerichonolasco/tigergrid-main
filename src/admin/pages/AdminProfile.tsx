import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminProfile: FC = () => {
  const [currUser, setCurrUser] = useState<any>({});
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault();
    
    try {
      fetch("http://localhost:8080/user/logout", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(
            "Logout failed. Server responded with status: " + response.status
          );
        }
        alert("Logout successful!");
        navigate('/login')
      })
      .catch((error) => {
        console.log(error)
      })
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

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

  if (currUser === null) {
    return <div>Loading...</div>;
  }
  
  const user = currUser || {
    id: "",
    firstName: "Admin",
    lastName: "Admin",
    email: "",
    password: "",
    type: "",
    responses: [],
  };

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
          <div className="p-2 flex justify-between">
            <Link
              to="/admin/dashboard"
              className="block w-1/2 mx-auto bg-yellow-400 hover:bg-yellow-500 text-white text-center font-semibold py-2 rounded"
            >
              Back to Home
            </Link>
            <button
              className="block w-1/2 mx-auto bg-red-400 hover:bg-red-500 text-white text-center font-semibold py-2 rounded ml-4"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
