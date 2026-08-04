import axios from "axios";
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

const Profile = () => {

    const token=JSON.parse(localStorage.getItem("token"))
    const id=token.split(".")[2]
    const navigate=useNavigate()
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

    const deletestudent=async()=>{
        try {
           const result=await axios.delete(`http://localhost:3000/users/${id}`) 
           toast.success("Profile Deleted",{position:"top-center"})
           localStorage.removeItem("token")
           navigate("/")
        } catch (error) {
            console.log(error)
            toast.error("Failed to delete Profile",{position:"top-center"})
        }
    }

    const deleteProfile = async () => {
        try {
            const res=await axios.delete(`http://localhost:3000/users/${id}`)
            toast.success("Profile Deleted", { position : "top-center"})
            localStorage.removeItem("token")
            navigate("/")
        } catch (error) {
            console.log(error)
            toast.error("failed to delete profile", { position : "top-center"})
        }
    }
    
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-[45vh] py-4">
      <div>

        {/* Profile Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden">

          {/* Top Banner */}
          <div className="h-32 bg-gradient-to-r from-blue-700 to-cyan-500"></div>

          {/* Profile Image */}
          <div className="flex justify-center -mt-14">
            <div className="w-32 h-32 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center shadow-lg">
              <FaUserCircle className="text-8xl text-blue-500" />
              <img src={user?.profileurl} alt="" className="object-cover rounded-full w-full h-full" />
            </div>
          </div>

          {/* Name */}
          <div className="text-center mt-4">
            <h1 className="text-3xl font-bold text-white">
              {user?.username}
            </h1>
          </div>

          {/* Details */}
          <div className="grid md:grid-cols-2 gap-6 p-8">

            <div className="flex items-center gap-4 bg-slate-800 rounded-2xl p-5">
              <FaUser className="text-blue-500 text-2xl" />
              <div>
                <p className="text-gray-400 text-sm">Username</p>
                <h3 className="text-white font-semibold">{user?.username}</h3>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-800 rounded-2xl p-5">
              <FaBirthdayCake className="text-blue-500 text-2xl" />
              <div>
                <p className="text-gray-400 text-sm">Age</p>
                <h3 className="text-white font-semibold">{user?.age}</h3>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-800 rounded-2xl p-5">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <h3 className="text-white font-semibold">
                  {user?.email}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-800 rounded-2xl p-5">
              <FaVenusMars className="text-blue-500 text-2xl" />
              <div>
                <p className="text-gray-400 text-sm">Gender</p>
                <h3 className="text-white font-semibold">{user?.gender}</h3>
              </div>
            </div>

            <div className="md:col-span-2 flex items-center gap-4 bg-slate-800 rounded-2xl p-5">
              <FaGraduationCap className="text-blue-500 text-2xl" />
              <div>
                <p className="text-gray-400 text-sm">Course</p>
                <h3 className="text-white font-semibold">
                  {user?.course}
                </h3>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-5 px-8 pb-8">

            <Link to={`/dashboard/updateprofile/${user?.id}`} className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold transition">
              <FaEdit />
              Update Profile
            </Link>

            <button onClick={deleteProfile} className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-xl font-semibold transition">
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