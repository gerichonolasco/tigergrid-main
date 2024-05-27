import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from React Router

const Login = () => {
  useEffect(() => {
    document.body.classList.add("login-page-body");
    return () => {
      document.body.classList.remove("login-page-body");
    };
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate(); // Use useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(""); // Clear previous errors

    try {
      console.log("Attempting login with:", username, password);
      const response = await fetch(`http://localhost:8080/user/login/${username}/${password}`);
      console.log("Response status:", response.status);
      
      if (response.ok) {
        const user = await response.json();
        console.log("Login successful, user:", user);

        if (user) {
          console.log("User type:", user.type); // Debugging: Check the user's type
          if (user.type === "USER") {
            navigate("/landingpage", { state: { user } });
          } else if (user.type === "ADMIN") {
            navigate("/admin/dashboard", { state: { user } });
          } else {
            setError("Invalid user type.");
          }
        } else {
          setError("User not available. Please try again.");
        }
      } else {
        if (response.status === 401) {
          setError("Invalid credentials. Please try again.");
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      }
    } catch (error) {
      console.error("An error occurred while logging in:", error);
      setError("An error occurred while logging in");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/mainbldg.png')",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="container w-full md:w-3/4 lg:w-1/2 xl:w-1/3 bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-center mb-6">
            <img src="/images/ustlogo.png" alt="Logo" className="w-40" />
          </div>
          <form onSubmit={handleLogin} className="flex flex-col items-center">
            <h1 className="text-center text-2xl font-bold mb-4">Login</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex flex-col w-full">
              <label className="mb-2">Email:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-3 py-2 border rounded mt-1 w-full"
              />
            </div>
            <div className="flex flex-col w-full mt-4">
              <label className="mb-2">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2 border rounded mt-1 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-black px-4 py-2 rounded mt-4 hover:bg-yellow-600 w-full"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <p className="mt-2">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
