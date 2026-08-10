
import React, { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaHome,
  FaUser,
  FaCog,
} from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Firebase
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // =========================
  // FETCH USER FROM FIRESTORE
  // =========================
  const fetchUser = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      if (!token) {
        toast.error("Please Login First", {
          position: "top-center",
        });

        navigate("/login");
        return;
      }

      // token should contain the Firestore document ID
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
      console.error("Fetch User Error:", error);

      toast.error("Something went wrong", {
        position: "top-center",
      });
    }
  };

  // =========================
  // USE EFFECT
  // =========================
  useEffect(() => {
    fetchUser();
  }, []);

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logout Successfully", {
      position: "top-center",
    });

    navigate("/");
  };

  return (
    <main className="min-h-screen bg-slate-900 flex">

      {/* =========================
          SIDEBAR
      ========================= */}
      <aside className="w-64 min-h-screen bg-slate-950 border-r border-slate-800 fixed left-0 top-0">

        {/* Profile Section */}
        <div className="text-center pt-8 px-4">

          <FaUserCircle className="text-blue-500 text-7xl mx-auto" />

          <h2 className="text-white text-xl font-bold mt-4">
            {user?.username}
          </h2>

          <p className="text-gray-400 text-sm mt-1 break-all">
            {user?.email}
          </p>

        </div>

        {/* =========================
            MENU
        ========================= */}
        <div className="p-5 space-y-3 mt-8">

          {/* Dashboard */}
          <Link
            to="/dashboard"
            className="flex items-center gap-4 px-5 py-3 rounded-xl text-gray-300 hover:bg-slate-800 hover:text-white transition"
          >
            <FaHome />
            Dashboard
          </Link>

          {/* Profile */}
          <Link
            to="/dashboard/profile"
            className="flex items-center gap-4 px-5 py-3 rounded-xl text-gray-300 hover:bg-slate-800 hover:text-white transition"
          >
            <FaUser />
            Profile
          </Link>

          {/* Settings */}
          <Link
            to="/dashboard/settings"
            className="flex items-center gap-4 px-5 py-3 rounded-xl text-gray-300 hover:bg-slate-800 hover:text-white transition"
          >
            <FaCog />
            Settings
          </Link>

        </div>

        {/* =========================
            LOGOUT
        ========================= */}
        <div className="absolute bottom-8 left-0 w-full px-5">

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-5 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-500 transition"
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </aside>

      {/* =========================
          MAIN CONTENT
      ========================= */}
      <section className="ml-64 w-full min-h-screen p-8">

        <Outlet />

      </section>

    </main>
  );
};

export default Dashboard;
