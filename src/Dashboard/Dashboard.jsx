import axios from "axios";
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

const Dashboard = () => {

     const token=JSON.parse(localStorage.getItem("token"))
        const id=token.split(".")[2]
         const [user,setUser]=useState(null)
         
        const fetchUser=async()=>{
            try {
                const {data}=await axios.get(`http://localhost:3000/users/${id}`)
                    setUser(data)
            } catch (error) {
                toast.error("Something went wrong",{position:"top-center"})
            }
        }
        useEffect(()=>{
            fetchUser()
        },[])

    const navigate=useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        toast.success("Logout Successfully", { position : "top-center"})
        navigate("/")
    }
  return (
    <main className="min-h-screen bg-slate-950 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col justify-between">

  {/* Top Section */}
  <div>
    {/* User Info */}
    {/* <div className="flex flex-col items-center py-10 border-b border-slate-800">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500">
        <img
          src={user?.profileurl}
          alt={user?.username}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-white text-xl font-bold mt-4">
        {user?.username}
      </h2>

      <p className="text-gray-400 text-sm mt-1">
        {user?.email}
      </p>
    </div> */}

    {/* Menu */}
    <div className="p-5 space-y-3 mt-16">
      <Link
        to="/dashboard"
        className="flex items-center gap-4 px-5 py-3 rounded-xl text-gray-300 hover:bg-slate-800 hover:text-white transition"
      >
        <FaHome />
        Dashboard
      </Link>

      <Link
        to="/dashboard/profile"
        className="flex items-center gap-4 px-5 py-3 rounded-xl text-gray-300 hover:bg-slate-800 hover:text-white transition"
      >
        <FaUser />
        Profile
      </Link>

      <Link
        to="#"
        className="flex items-center gap-4 px-5 py-3 rounded-xl text-gray-300 hover:bg-slate-800 hover:text-white transition"
      >
        <FaCog />
        Settings
      </Link>
    </div>
  </div>

  {/* Logout */}
  <div className="p-5 border-t border-slate-800">
    <button
      onClick={handleLogout}
      className="w-full flex items-center justify-center gap-3 bg-slate-800 border-y-2 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
    >
      <FaSignOutAlt />
      Logout
    </button>
  </div>

</aside>

      <Outlet/>
    </main>
  );
};

export default Dashboard;