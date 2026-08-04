import React from "react";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaDatabase,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MyCourses = () => {
  return (
    <main className="bg-slate-950 text-white py-10 px-6 mt-2">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mt-6">
            My <span className="text-blue-500">Courses</span>
          </h1>

          <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
            Java Full Stack • SQL Database • Web Development • React JS
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Java */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-yellow-400 hover:-translate-y-2 transition duration-300">
            <div className="bg-yellow-500 p-8 flex justify-center">
              <FaJava className="text-7xl text-white" />
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold">
                Java Full Stack
              </h2>

              <p className="text-gray-400 mt-4 leading-7">
                Learn Core Java, Advanced Java, Spring Boot, Hibernate,
                MySQL, REST APIs, and build complete full stack applications.
              </p>
            </div>
          </div>

          {/* SQL */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition duration-300">
            <div className="bg-blue-600 p-8 flex justify-center">
              <FaDatabase className="text-7xl text-white" />
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold">
                SQL Database
              </h2>

              <p className="text-gray-400 mt-4 leading-7">
                Learn database design, SQL queries, joins, indexing,
                stored procedures, and database management.
              </p>
            </div>
          </div>

          {/* Web Development */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-orange-500 hover:-translate-y-2 transition duration-300">
            <div className="bg-orange-500 p-8 flex justify-center">
              <FaHtml5 className="text-7xl text-white" />
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold">
                Web Development
              </h2>

              <p className="text-gray-400 mt-4 leading-7">
                Master HTML5, CSS3, JavaScript, Bootstrap,
                Tailwind CSS, and responsive web design.
              </p>
            </div>
          </div>

          {/* React */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition duration-300">
            <div className="bg-cyan-500 p-8 flex justify-center">
              <FaReact className="text-7xl text-white" />
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold">
                React JS
              </h2>

              <p className="text-gray-400 mt-4 leading-7">
                Build modern user interfaces using React Hooks,
                React Router, API integration, and reusable components.
              </p>
            </div>
          </div>

        </div>

      </div>

      <div className="flex justify-center items-center mt-6">
        <Link to={"/dashboard"} className="p-2 bg-slate-900 rounded-lg hover:bg-blue-800 ">
        Back to Dashboard
      </Link>
      </div>
    </main>
  );
};

export default MyCourses;