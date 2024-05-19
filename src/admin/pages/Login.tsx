import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Login = () => {
  useEffect(() => {
    document.body.classList.add("login-page-body");
    return () => {
      document.body.classList.remove("login-page-body");
    };
  }, []);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (username.trim() !== "" && password.trim() !== "") {
        setIsLoggedIn(true);
        alert("Login Successful!");
      } else if (username.trim() == "" && password.trim() == "") {
        setError("Please input Email and password.");
      } else if (username.trim() == "" && password.trim() !== "") {
        setError("Please input Email.");
      } else if (username.trim() !== "" && password.trim() == "") {
        setError("Please input password.");
      }
    } catch (error) {
      setError("An error occurred while logging in");
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/images/mainbldg.png')",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center bg-cover bg-center bg-main-building">
          <div className="container w-full md:w-3/4 lg:w-1/2 xl:w-1/3 bg-white p-8 rounded-lg shadow-md mt-28">
            <div className="flex justify-between items-center">
              <div className="flex justify-center mb-6 ml-8">
                <img src="/images/ustlogo.png" alt="Logo" className="w-40" />
              </div>
              <form
                onSubmit={handleLogin}
                className="flex flex-col items-center"
              >
                <h1 className="text-center text-2xl font-bold mb-4"></h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="flex flex-col">
                  <label className="mb-2">Email:</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="px-3 py-2 border rounded mt-1"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2">Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-3 py-2 border rounded mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 text-black px-4 py-2 rounded mt-4 hover:bg-yellow-600"
                >
                  Login
                </button>
                <p className="mt-2">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-blue-500">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
