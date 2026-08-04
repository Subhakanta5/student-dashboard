import React from "react";
import { FaArrowRight, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Gi3dHammer, GiThorHammer } from "react-icons/gi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main id="homee" className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 mb-6">
              Welcome to ProjectS
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Build Modern
              <span className="text-blue-500"> Web Projects</span>
            </h1>

            <p className="text-gray-400 text-lg mt-8 leading-8 max-w-xl">
              Showcase your creativity through beautiful and responsive web
              applications. Explore modern UI designs, interactive layouts, and
              innovative projects built with React and Tailwind CSS.
            </p>

            <div className="flex gap-5 mt-10">
              <Link to={"/dashboard"} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-full font-semibold transition">
                Explore Dashboard
                <FaArrowRight />
              </Link>

              <Link to={"/learnmore"} className="border border-slate-700 hover:border-blue-500 hover:bg-slate-900 px-7 py-3 rounded-full transition">
                Learn More
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="w-[420px] h-[420px] rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-600/30">
              <FaLaptopCode className="text-white text-9xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Why Choose ProjectS?</h2>
          <p className="text-gray-400 mt-4">
            Clean UI, modern design, and responsive layouts for every project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition">
            <FaCode className="text-blue-500 text-5xl mb-6" />
            <h3 className="text-2xl font-semibold mb-4">
              Clean Code
            </h3>
            <p className="text-gray-400">
              Well-structured and reusable components built with modern React
              practices.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition">
            <FaLaptopCode className="text-blue-500 text-5xl mb-6" />
            <h3 className="text-2xl font-semibold mb-4">
              Responsive Design
            </h3>
            <p className="text-gray-400">
              Optimized layouts that look beautiful on desktops, tablets, and
              mobile devices.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition">
            <FaRocket className="text-blue-500 text-5xl mb-6" />
            <h3 className="text-2xl font-semibold mb-4">
              Fast Performance
            </h3>
            <p className="text-gray-400">
              Lightweight interfaces designed for speed and a smooth user
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
<footer className="border-t border-slate-800 bg-slate-950">
  <div className="max-w-7xl mx-auto px-8 py-10">

    <div className="grid md:grid-cols-3 gap-10">

      {/* Logo */}
      <div>
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <GiThorHammer size={35}/>
          Project<span className="text-blue-500">S</span> 
        </h2>

        <p className="text-gray-400 mt-5 leading-7">
          Build modern, responsive, and interactive web applications using
          React, Tailwind CSS, and JavaScript. Explore projects and improve
          your development skills.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

        <ul className="space-y-3 text-gray-400">
          <li>
            <a href="#homee" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>

          <li>
            <Link to="/dashboard" className="hover:text-blue-400 transition">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/learnmore" className="hover:text-blue-400 transition">
              Learn More
            </Link>
          </li>
        </ul>
      </div>

      {/* Connect */}
      <div>
        <h3 className="text-xl font-semibold mb-5">Connect</h3>

        <div className="flex gap-5 text-2xl">
          <a href="https://github.com/" target="_blank" className="hover:text-blue-500 transition">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/" target="_blank" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/"target="_blank" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
        </div>

        <p className="text-gray-400 mt-6">
          Email: your@email.com
        </p>
      </div>

    </div>

    <div className="border-t border-slate-800 mt-12 pt-6 text-center text-gray-500">
      © {new Date().getFullYear()} <span className="text-blue-500">ProjectS</span>. All Rights Reserved.
    </div>

  </div>
</footer>
    </main>
  );
};

export default Home;