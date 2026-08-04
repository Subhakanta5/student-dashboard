import React from "react";
import {
  FaBookOpen,
  FaChartLine,
  FaClipboardList,
  FaProjectDiagram,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-white">
          Welcome to
        </h1>

        <h2 className="text-7xl md:text-8xl font-extrabold">
          <span className="text-orange-500 font-serif">D</span>
          <span className="text-orange-500">a</span>
          <span className="text-orange-500">s</span>
          <span className="text-white">h</span>
          <span className="text-blue-800">b</span>
          <span className="text-white">o</span>
          <span className="text-green-500">a</span>
          <span className="text-green-500">r</span>
          <span className="text-green-500 font-serif">d</span>
        </h2>

        <p className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto leading-8">
          Manage your profile, explore courses, complete assignments, and
          monitor your progress through one modern dashboard.
        </p>

        {/* Dashboard Features */}
        <section className="">
          <h2 className="text-4xl font-bold text-white mb-4 ml-5">
            Feature
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Profile */}
            <Link
              to="/dashboard/profile"
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              <FaUserCircle className="text-6xl text-blue-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3 text-white">
                My Profile
              </h3>
              <p className="text-gray-400">
                View and update your profile information anytime.
              </p>
            </Link>

            {/* Courses */}
            <Link
              to="/dashboard/mycourses"
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-green-500 hover:-translate-y-2 transition duration-300"
            >
              <FaBookOpen className="text-6xl text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3 text-white">
                My Courses
              </h3>
              <p className="text-gray-400">
                Continue learning with your enrolled courses.
              </p>
            </Link>

            <Link
              to="/dashboard/projects"
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <FaProjectDiagram className="text-6xl text-cyan-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3 text-white">
                Projects
              </h3>
              <p className="text-gray-400">
                 Explore your completed and ongoing projects in one organized workspace.
              </p>
            </Link>

          </div>
        </section>

      </div>
    </section>
  );
};

export default DashboardHome;