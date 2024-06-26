import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SideNavbarUser: React.FC = () => {
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

  return (
    <>
      <nav
        style={{ backgroundColor: "#121212" }}
        className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a className="flex ms-2 md:me-24 ml-9">
                <Link
                  to="landingpage"
                  className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-yellow-500 ml-7"
                >
                  TigerGrid
                </Link>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                {/* Replace this block with a Link to the profile page */}
                <Link to="./userprofile">
                  <img
                    className="w-8 h-8 rounded-full cursor-pointer"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            {/* Removed all the Link components */}
          </ul>
          {/* Added a logout button at the bottom */}
          <div className="absolute bottom-0 left-0 w-full p-4 ml-12">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-6"
            onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideNavbarUser;
