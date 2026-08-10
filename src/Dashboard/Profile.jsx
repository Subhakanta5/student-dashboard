
import React, { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaUser,
  FaBirthdayCake,
  FaEnvelope,
  FaGraduationCap,
  FaVenusMars,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Firebase
import { db } from "../firebase";
import {
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // =========================
  // FETCH USER
  // =========================
  const fetchUser = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      // Check login
      if (!token) {
        toast.error("Please Login First", {
          position: "top-center",
        });

        navigate("/login");
        return;
      }

      // token = Firestore document ID
      const userRef = doc(db, "users", token);

      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUser({
          id: userSnap.id,
          ...userSnap.data(),
        });
      } else {
        toast.error("User not found", {
          position: "top-center",
        });

        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      console.error("Fetch Profile Error:", error);

      toast.error("Something went wrong", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOAD PROFILE
  // =========================
  useEffect(() => {
    fetchUser();
  }, []);

  // =========================
  // DELETE PROFILE
  // =========================
  const deleteProfile = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      if (!token) {
        toast.error("Please Login First", {
          position: "top-center",
        });

        navigate("/login");
        return;
      }

      // Firestore user document
      const userRef = doc(db, "users", token);

      // Delete user
      await deleteDoc(userRef);

      // Remove login token
      localStorage.removeItem("token");

      toast.success("Profile Deleted", {
        position: "top-center",
      });

      navigate("/");
    } catch (error) {
      console.error("Delete Profile Error:", error);

      toast.error("Failed to delete profile", {
        position: "top-center",
      });
    }
  };

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <p className="text-white text-lg">
          Loading Profile...
        </p>
      </div>
    );
  }

  // =========================
  // NO USER
  // =========================
  if (!user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-950 py-10 px-5">

      <div className="max-w-5xl mx-auto">

        {/* =========================
            PROFILE CARD
        ========================= */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden">

          {/* =========================
              TOP BANNER
          ========================= */}
          <div className="h-32 bg-gradient-to-r from-blue-700 to-cyan-500"></div>

          {/* =========================
              PROFILE IMAGE
          ========================= */}
          <div className="flex justify-center -mt-14">

            <div className="w-32 h-32 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center shadow-lg overflow-hidden">

              {user?.profileurl ? (
                <img
                  src={user.profileurl}
                  alt="Profile"
                  className="object-cover rounded-full w-full h-full"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              ) : (
                <FaUserCircle className="text-8xl text-blue-500" />
              )}

            </div>

          </div>

          {/* =========================
              NAME
          ========================= */}
          <div className="text-center mt-4">

            <h1 className="text-3xl font-bold text-white">
              {user?.username}
            </h1>

            <p className="text-gray-400 mt-1">
              {user?.email}
            </p>

          </div>

          {/* =========================
              DETAILS
          ========================= */}
          <div className="grid md:grid-cols-2 gap-6 p-8">

            {/* Username */}
            <div className="flex items-center gap-4 bg-slate-800 rounded-2xl p-5">

              <FaUser className="text-blue-500 text-2xl" />

              <div>
                <p className="text-gray-400 text-sm">
                  Username
                </p>

                <h3 className="text-white font-semibold">
                  {user?.username}
                </h3>
              </div>

            </div>

            {/* Age */}
            <div className="flex items-center gap-4 bg-slate-800 rounded-2xl p-5">

              <FaBirthdayCake className="text-blue-500 text-2xl" />

              <div>
                <p className="text-gray-400 text-sm">
                  Age
                </p>

                <h3 className="text-white font-semibold">
                  {user?.age}
                </h3>
              </div>

            </div>

            {/* Email */}
            <div className="flex items-center gap-4 bg-slate-800 rounded-2xl p-5">

              <FaEnvelope className="text-blue-500 text-2xl" />

              <div className="min-w-0">

                <p className="text-gray-400 text-sm">
                  Email
                </p>

                <h3 className="text-white font-semibold break-all">
                  {user?.email}
                </h3>

              </div>

            </div>

            {/* Gender */}
            <div className="flex items-center gap-4 bg-slate-800 rounded-2xl p-5">

              <FaVenusMars className="text-blue-500 text-2xl" />

              <div>

                <p className="text-gray-400 text-sm">
                  Gender
                </p>

                <h3 className="text-white font-semibold">
                  {user?.gender}
                </h3>

              </div>

            </div>

            {/* Course */}
            <div className="md:col-span-2 flex items-center gap-4 bg-slate-800 rounded-2xl p-5">

              <FaGraduationCap className="text-blue-500 text-2xl" />

              <div>

                <p className="text-gray-400 text-sm">
                  Course
                </p>

                <h3 className="text-white font-semibold">
                  {user?.course}
                </h3>

              </div>

            </div>

          </div>

          {/* =========================
              BUTTONS
          ========================= */}
          <div className="flex justify-center gap-5 px-8 pb-8 flex-wrap">

            {/* Update Profile */}
            <Link
              to={`/dashboard/updateprofile/${user.id}`}
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold transition"
            >
              <FaEdit />

              Update Profile
            </Link>

            {/* Delete Profile */}
            <button
              onClick={deleteProfile}
              className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-xl font-semibold transition"
            >
              <FaTrashAlt />

              Delete Profile
            </button>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Profile;
