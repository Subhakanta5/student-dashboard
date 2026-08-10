
import React, { useEffect, useState } from "react";
import {
  FaBirthdayCake,
  FaCalendarAlt,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaImage,
  FaLock,
  FaUser,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

// Firebase
import { db } from "../firebase";
import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const UpdateProfile = () => {
  const [form, setForm] = useState({
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
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  // =========================
  // FETCH USER DATA
  // =========================
  const fetchData = async () => {
    try {
      if (!id) {
        toast.error("User ID not found", {
          position: "top-center",
        });

        navigate("/dashboard");
        return;
      }

      // Get user document from Firestore
      const userRef = doc(db, "users", id);

      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setForm(userSnap.data());
      } else {
        toast.error("User not found", {
          position: "top-center",
        });

        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Fetch User Error:", error);

      toast.error("Something went wrong", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // USE EFFECT
  // =========================
  useEffect(() => {
    fetchData();
  }, [id]);

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
    } = form;

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

    setErrors(err);

    return Object.keys(err).length > 0;
  };

  // =========================
  // UPDATE PROFILE
  // =========================
  const handleForm = async (e) => {
    e.preventDefault();

    if (validation()) {
      toast.error("Please fill all fields", {
        position: "top-center",
      });

      return;
    }

    try {
      // Reference to the user's Firestore document
      const userRef = doc(db, "users", id);

      // Update the document
      await updateDoc(userRef, {
        username: form.username,
        age: form.age,
        email: form.email,
        password: form.password,
        dob: form.dob,
        course: form.course,
        gender: form.gender,
        profileurl: form.profileurl,
      });

      toast.success("Profile Updated Successfully", {
        position: "top-center",
      });

      // Go back to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Update Profile Error:", error);

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

    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-white text-lg">
          Loading Profile...
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 py-10 px-5">

      <div className="max-w-4xl mx-auto">

        {/* =========================
            CARD
        ========================= */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8 md:p-10">

          {/* =========================
              HEADING
          ========================= */}
          <div className="text-center mb-10">

            <h1 className="text-4xl font-bold text-white">
              Update
              <span className="text-blue-500">
                Account
              </span>
            </h1>

            <p className="text-gray-400 mt-3">
              Update your profile information.
            </p>

          </div>

          {/* =========================
              FORM
          ========================= */}
          <form
            onSubmit={handleForm}
            className="grid md:grid-cols-2 gap-6"
          >

            {/* =========================
                USERNAME
            ========================= */}
            <div>

              <label className="text-gray-300 mb-2 block">
                Username
              </label>

              <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">

                <FaUser className="text-gray-400 mr-3" />

                <input
                  type="text"
                  name="username"
                  value={form.username}
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

            {/* =========================
                AGE
            ========================= */}
            <div>

              <label className="text-gray-300 mb-2 block">
                Age
              </label>

              <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">

                <FaBirthdayCake className="text-gray-400 mr-3" />

                <input
                  type="number"
                  name="age"
                  value={form.age}
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

            {/* =========================
                EMAIL
            ========================= */}
            <div>

              <label className="text-gray-300 mb-2 block">
                Email
              </label>

              <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">

                <FaEnvelope className="text-gray-400 mr-3" />

                <input
                  type="email"
                  name="email"
                  value={form.email}
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

            {/* =========================
                PASSWORD
            ========================= */}
            <div>

              <label className="text-gray-300 mb-2 block">
                Password
              </label>

              <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">

                <FaLock className="text-gray-400 mr-3" />

                <input
                  name="password"
                  value={form.password}
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
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

              {errors.password && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.password}
                </p>
              )}

            </div>

            {/* =========================
                DOB
            ========================= */}
            <div>

              <label className="text-gray-300 mb-2 block">
                Date of Birth
              </label>

              <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">

                <FaCalendarAlt className="text-gray-400 mr-3" />

                <input
                  type="date"
                  name="dob"
                  value={form.dob}
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

            {/* =========================
                COURSE
            ========================= */}
            <div>

              <label className="text-gray-300 mb-2 block">
                Course
              </label>

              <select
                name="course"
                value={form.course}
                onChange={handleInput}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none"
              >

                <option value="">
                  Choose Course
                </option>

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

            {/* =========================
                GENDER
            ========================= */}
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
                    checked={form.gender === "Male"}
                    onChange={handleInput}
                  />

                  Male

                </label>

                <label className="flex items-center gap-2 text-gray-300">

                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={form.gender === "Female"}
                    onChange={handleInput}
                  />

                  Female

                </label>

                <label className="flex items-center gap-2 text-gray-300">

                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={form.gender === "Other"}
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

            {/* =========================
                PROFILE URL
            ========================= */}
            <div className="md:col-span-2">

              <label className="text-gray-300 mb-2 block">
                Profile URL
              </label>

              <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">

                <FaImage className="text-gray-400 mr-3" />

                <input
                  type="url"
                  name="profileurl"
                  value={form.profileurl}
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

            {/* =========================
                UPDATE BUTTON
            ========================= */}
            <div className="md:col-span-2 mt-4">

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold text-white transition"
              >
                Update Account
              </button>

            </div>

          </form>

        </div>

      </div>

    </main>
  );
};

export default UpdateProfile;
