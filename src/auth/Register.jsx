
import React, { useState } from "react";
import {
  FaUser,
  FaBirthdayCake,
  FaCalendarAlt,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaImage,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Firebase Firestore
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

const Register = () => {
  const [registerForm, setRegister] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    dob: "",
    course: "",
    gender: "",
    profileurl: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // =========================
  // VALIDATION
  // =========================
  const validation = () => {
    let err = {};

    const {
      username,
      age,
      email,
      password,
      dob,
      course,
      gender,
      profileurl,
    } = registerForm;

    if (!username) {
      err.username = "Username is required";
    }

    if (!age) {
      err.age = "Age is required";
    }

    if (!email) {
      err.email = "Email is required";
    }

    if (!password) {
      err.password = "Password is required";
    }

    if (!dob) {
      err.dob = "Date of Birth is required";
    }

    if (!course) {
      err.course = "Course is required";
    }

    if (!gender) {
      err.gender = "Gender is required";
    }

    if (!profileurl) {
      err.profileurl = "Profile URL is required";
    }

    if (Object.keys(err).length > 0) {
      setErrors(err);
      return true;
    }

    return false;
  };

  // =========================
  // FORM SUBMIT
  // =========================
  const handleForm = async (e) => {
    e.preventDefault();

    // Validate form
    if (validation()) {
      toast.error("Please fill all fields", {
        position: "top-center",
      });

      return;
    }

    try {
      // Get users collection from Firestore
      const usersRef = collection(db, "users");

      // Get all existing users
      const snapshot = await getDocs(usersRef);

      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // =========================
      // CHECK EMAIL
      // =========================
      const emailExist = users.find(
        (user) =>
          user.email.toLowerCase() === registerForm.email.toLowerCase()
      );

      if (emailExist) {
        toast.error("Email already exists", {
          position: "top-center",
        });

        return;
      }

      // =========================
      // CHECK PASSWORD
      // =========================
      const passwordExist = users.find(
        (user) => user.password === registerForm.password
      );

      if (passwordExist) {
        toast.error("Password already exists", {
          position: "top-center",
        });

        return;
      }

      // =========================
      // ADD USER TO FIRESTORE
      // =========================
      await addDoc(usersRef, registerForm);

      toast.success("Registration Done", {
        position: "top-center",
      });

      // Reset form
      setRegister({
        username: "",
        age: "",
        email: "",
        password: "",
        dob: "",
        course: "",
        gender: "",
        profileurl: "",
      });

      // Clear errors
      setErrors({});

      // Navigate to login
      navigate("/login");
    } catch (error) {
      console.error("Firebase Registration Error:", error);

      toast.error("Something went wrong", {
        position: "top-center",
      });
    }
  };

  // =========================
  // INPUT HANDLER
  // =========================
  const handleInput = (e) => {
    const { name, value } = e.target;

    setRegister({
      ...registerForm,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-slate-950 rounded-2xl p-8 md:p-10 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">
            Create <span className="text-blue-500">Account</span>
          </h1>

          <p className="text-gray-400 mt-3">
            Register to access all features.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleForm}
          className="grid md:grid-cols-2 gap-6"
        >

          {/* Username */}
          <div>
            <label className="text-gray-300 mb-2 block">
              Username
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
              <FaUser className="text-gray-400 mr-3" />

              <input
                type="text"
                name="username"
                value={registerForm.username}
                onChange={handleInput}
                placeholder="Enter username"
                className="bg-transparent outline-none w-full text-white"
              />
            </div>

            {errors.username && (
              <p className="text-red-600 text-sm mt-1">
                {errors.username}
              </p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="text-gray-300 mb-2 block">
              Age
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
              <FaBirthdayCake className="text-gray-400 mr-3" />

              <input
                type="number"
                name="age"
                value={registerForm.age}
                onChange={handleInput}
                placeholder="Enter age"
                className="bg-transparent outline-none w-full text-white"
              />
            </div>

            {errors.age && (
              <p className="text-red-600 text-sm mt-1">
                {errors.age}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 mb-2 block">
              Email
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
              <FaEnvelope className="text-gray-400 mr-3" />

              <input
                type="email"
                name="email"
                value={registerForm.email}
                onChange={handleInput}
                placeholder="Enter email"
                className="bg-transparent outline-none w-full text-white"
              />
            </div>

            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 mb-2 block">
              Password
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
              <FaLock className="text-gray-400 mr-3" />

              <input
                name="password"
                value={registerForm.password}
                onChange={handleInput}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="bg-transparent outline-none w-full text-white"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="text-gray-400 hover:text-blue-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-600 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* DOB */}
          <div>
            <label className="text-gray-300 mb-2 block">
              Date of Birth
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
              <FaCalendarAlt className="text-gray-400 mr-3" />

              <input
                type="date"
                name="dob"
                value={registerForm.dob}
                onChange={handleInput}
                className="bg-transparent outline-none w-full text-white"
              />
            </div>

            {errors.dob && (
              <p className="text-red-600 text-sm mt-1">
                {errors.dob}
              </p>
            )}
          </div>

          {/* Course */}
          <div>
            <label className="text-gray-300 mb-2 block">
              Course
            </label>

            <select
              name="course"
              value={registerForm.course}
              onChange={handleInput}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none"
            >
              <option value="">Choose Course</option>
              <option value="Java Full Stack">
                Java Full Stack
              </option>
              <option value="Python Full Stack">
                Python Full Stack
              </option>
              <option value="Web Technology">
                Web Technology
              </option>
              <option value="React Developer">
                React Developer
              </option>
              <option value="MERN Stack">
                MERN Stack
              </option>
              <option value="Node.js">
                Node.js
              </option>
              <option value="Frontend Development">
                Frontend Development
              </option>
              <option value="Backend Development">
                Backend Development
              </option>
              <option value="UI/UX Design">
                UI/UX Design
              </option>
            </select>

            {errors.course && (
              <p className="text-red-600 text-sm mt-1">
                {errors.course}
              </p>
            )}
          </div>

          {/* Gender */}
          <div className="md:col-span-2">
            <label className="text-gray-300 mb-3 block">
              Gender
            </label>

            <div className="flex gap-8">
              <label className="flex items-center gap-2 text-gray-300">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={registerForm.gender === "Male"}
                  onChange={handleInput}
                />
                Male
              </label>

              <label className="flex items-center gap-2 text-gray-300">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={registerForm.gender === "Female"}
                  onChange={handleInput}
                />
                Female
              </label>

              <label className="flex items-center gap-2 text-gray-300">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={registerForm.gender === "Other"}
                  onChange={handleInput}
                />
                Other
              </label>
            </div>

            {errors.gender && (
              <p className="text-red-600 text-sm mt-1">
                {errors.gender}
              </p>
            )}
          </div>

          {/* Profile URL */}
          <div className="md:col-span-2">
            <label className="text-gray-300 mb-2 block">
              Profile URL
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
              <FaImage className="text-gray-400 mr-3" />

              <input
                type="url"
                name="profileurl"
                value={registerForm.profileurl}
                onChange={handleInput}
                placeholder="https://example.com/profile.jpg"
                className="bg-transparent outline-none w-full text-white"
              />
            </div>

            {errors.profileurl && (
              <p className="text-red-600 text-sm mt-1">
                {errors.profileurl}
              </p>
            )}
          </div>

          {/* Button */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold text-white transition"
            >
              Create Account
            </button>
          </div>

          {/* Login */}
          <div className="md:col-span-2 text-center">
            <p className="text-gray-400">
              Already have an account?{" "}

              <Link
                to="/login"
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Login
              </Link>
            </p>
          </div>

        </form>
      </div>
    </main>
  );
};

export default Register;
