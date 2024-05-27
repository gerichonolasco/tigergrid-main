import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
      setError("Please input all fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // If all validations pass, continue with registration
    setError("");
    fetch("http://localhost:8080/user/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        type: "USER"
      })
    })
    .then(() => {
      alert("Registration successful!");
    })
    .catch(() => {
      setError("Registration failed. Please try again.");
    });
  };

  return (
    <div style={{backgroundImage: "url('/images/mainbldg.png')", height: "100vh", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="flex justify-center items-center min-h-screen">
        <div className="container w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-center mb-6">
            <img src="/images/ustlogo.png" alt="Logo" className="w-40" />
          </div>
          <form onSubmit={handleSignUp} className="flex flex-col items-center">
            <h1 className="text-center text-2xl font-bold mb-4">Sign Up</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex flex-col w-full">
              <label className="mb-2">First Name<span className="text-red-500">*</span>:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="px-3 py-2 border rounded mt-1 w-full"
                required
              />
            </div>
            <div className="flex flex-col w-full mt-4">
              <label className="mb-2">Last Name<span className="text-red-500">*</span>:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="px-3 py-2 border rounded mt-1 w-full"
                required
              />
            </div>
            <div className="flex flex-col w-full mt-4">
              <label className="mb-2">Email<span className="text-red-500">*</span>:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 border rounded mt-1 w-full"
                required
              />
            </div>
            <div className="flex flex-col w-full mt-4">
              <label className="mb-2">Password<span className="text-red-500">*</span>:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2 border rounded mt-1 w-full"
                minLength="6"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-black px-4 py-2 rounded mt-4 hover:bg-yellow-600 w-full"
            >
              Sign Up
            </button>
            <p className="mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
