import axios from "axios";
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

const Register = () => {

    const [registerForm, setRegister] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    dob: "",
    course:"",
    gender: "",
    profileurl: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validation = () => {
    let err = {};
    const { username, age, email, password, dob, course , gender, profileurl } =
      registerForm;
    if (!username) {
      err.username = "username is required";
    }
    if (!age) {
      err.age = "age is required";
    }
    if (!email) {
      err.email = "Email is required";
    }
    if (!password) {
      err.password = "Password is required";
    }
    if (!dob) {
      err.dob = "Date Of Birth is Required";
    }
    if(!course){
        err.course="Course is Required"
    }
    if (!gender) {
      err.gender = "Gender is required";
    }
    if (!profileurl) {
      err.profileurl = "profileurl is required";
    }
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return true;
    }
    return false;
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (validation()) {
      toast.error("failed to Register.plz fill all Filed", { position: "top-center" });
      return;
    }
    try {
      const { data } = await axios.get("https://studentdashboardbackend.onrender.com/users");
      let exist = false;

      const emailExist = data.find((ele) => ele.email === registerForm.email);
      if (emailExist) {
        toast.error("Email already exist", { position: "top-center" });
        exist = true;
      }

      const passwordExist = data.find(
        (ele) => ele.password === registerForm.password,
      );
      if (passwordExist) {
        toast.error("password already exist", { position: "top-center" });
        exist = true;
      }
      if (exist) return;

      await axios.post("https://studentdashboardbackend.onrender.com/users", registerForm);
      toast.success("Registartion Done", { position: "top-center" });
      setRegister({
        username: "",
        age: "",
        email: "",
        password: "",
        dob: "",
        course:"",
        gender: "",
        profileurl: "",
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { position: "top-center" });
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegister({ ...registerForm, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className=" bg-slate-950 flex items-center justify-center px-6 py-24">
      <div className=" bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">
            Create <span className="text-blue-500">Account</span>
          </h1>
          <p className="text-gray-400 mt-3">
            Register to access all features.
          </p>
        </div>

        <form onSubmit={handleForm} className="grid md:grid-cols-2 gap-6">

          {/* Username */}
          <div>
            <label className="text-gray-300 mb-2 block">Username</label>
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
              <p className="text-red-600">{errors.username}</p>
              )}
          </div>

          {/* Age */}
          <div>
            <label className="text-gray-300 mb-2 block">Age</label>
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
              <p className="text-red-600">{errors.age}</p>
              )}
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 mb-2 block">Email</label>
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
              <p className="text-red-600">{errors.email}</p>
              )}
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 mb-2 block">Password</label>
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
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-blue-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-600">{errors.password}</p>
              )}
          </div>

            {/* DOB */}
          <div>
            <label className="text-gray-300 mb-2 block">Date of Birth</label>
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
              <p className="text-red-600">{errors.dob}</p>
              )}
          </div>

          {/* Course */}
          <div>
            <label className="text-gray-300 mb-2 block">Course</label>

            <select
            name="course"
            value={registerForm.course}
            onChange={handleInput}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none">
              <option>Choose Course</option>
              <option>Java Full Stack</option>
              <option>Python Full Stack</option>
              <option>Web Technology</option>
              <option>React Developer</option>
              <option>MERN Stack</option>
              <option>Node.js</option>
              <option>Frontend Development</option>
              <option>Backend Development</option>
              <option>UI/UX Design</option>
            </select>
            {errors.course && (
              <p className="text-red-600">{errors.course}</p>
              )}
          </div>

          {/* Gender */}
          <div className="md:col-span-2">
            <label className="text-gray-300 mb-3 block">Gender</label>

            <div className="flex gap-8">
              <label className="flex items-center gap-2 text-gray-300">
                <input
                 type="radio"
                 name="gender"
                 value={"Male"}
                 checked={registerForm.gender === "Male"}
                 onChange={handleInput}
                 />
                Male
              </label>

              <label className="flex items-center gap-2 text-gray-300">
                <input
                 type="radio"
                  name="gender"
                  value={"Female"}
                  checked={registerForm.gender === "Female"}
                  onChange={handleInput}
                  />
                Female
              </label>

              <label className="flex items-center gap-2 text-gray-300">
                <input
                 type="radio"
                  name="gender"
                  value={"Other"}
                  checked={registerForm.gender === "Other"}
                  onChange={handleInput}
                  />
                Other
              </label>
            </div>
            {errors.gender && (
              <p className="text-red-600">{errors.gender}</p>
              )}
          </div>

          {/* Profile URL */}
          <div className="md:col-span-2">
            <label className="text-gray-300 mb-2 block">Profile URL</label>

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
              <p className="text-red-600">{errors.profileurl}</p>
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
              <Link to={"/login"} className="text-blue-500 cursor-pointer hover:underline">
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