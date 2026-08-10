import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [allUsers, setAllUsers] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Fetch all users from Firebase Firestore
  const fetchAllUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));

      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAllUsers(users);
    } catch (error) {
      console.error("Error fetching users:", error);

      toast.error("Something went wrong. Please try again later.", {
        position: "top-center",
      });
    }
  };

  // Fetch users when page loads
  useEffect(() => {
    fetchAllUsers();
  }, []);

  // Validation
  const validation = () => {
    const { email, password } = loginForm;

    if (!email || !password) {
      return true;
    }

    return false;
  };

  // Handle login form
  const handleForm = (e) => {
    e.preventDefault();

    // Check empty fields
    if (validation()) {
      toast.error("You are missing some field", {
        position: "top-center",
      });
      return;
    }

    // Find user by email
    const user = allUsers.find(
      (ele) => ele.email === loginForm.email
    );

    // Email not found
    if (!user) {
      toast.error("Mail id not registered", {
        position: "top-center",
      });
      return;
    }

    // Check password
    if (user.password !== loginForm.password) {
      toast.error("Password incorrect", {
        position: "top-center",
      });
      return;
    }

    // Create login token
    const token =
      "hbgfoqbqi." + "vkgjrhgglkr." + user.id;

    // Store token
   localStorage.setItem("token", JSON.stringify(user.id));

    // Store logged-in user
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    // Clear form
    setLoginForm({
      email: "",
      password: "",
    });

    // Success message
    toast.success("Well Done! You Successfully Logged-in", {
      position: "top-center",
    });

    // Navigate to dashboard
    navigate("/dashboard");
  };

  // Handle input
  const handleInput = (e) => {
    const { name, value } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">
            Welcome{" "}
            <span className="text-blue-500">
              Back
            </span>
          </h1>

          <p className="text-gray-400 mt-3">
            Sign in to continue to your account.
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleForm}
          className="space-y-6"
        >

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Email
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus-within:border-blue-500 transition">
              <FaEnvelope className="text-gray-400 mr-3" />

              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={handleInput}
                placeholder="Enter your email"
                className="bg-transparent outline-none w-full text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Password
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus-within:border-blue-500 transition">

              <FaLock className="text-gray-400 mr-3" />

              <input
                name="password"
                value={loginForm.password}
                onChange={handleInput}
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                className="bg-transparent outline-none w-full text-white placeholder:text-gray-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="text-gray-400 hover:text-blue-500 transition"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-blue-500 hover:text-blue-400 text-sm transition"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold text-white transition"
          >
            Login
          </button>

          {/* Register */}
          <p className="text-center text-gray-400">
            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Register
            </Link>
          </p>

        </form>
      </div>
    </main>
  );
};

export default Login;
