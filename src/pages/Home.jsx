
import React from "react";
import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCheckCircle,
} from "react-icons/fa";
import { GiThorHammer } from "react-icons/gi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      id="homee"
      className="min-h-screen bg-[#020617] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
              {/* Small Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium mb-7">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                Welcome to ProjectS
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                Build
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                  Modern Web
                </span>
                Projects
              </h1>

              <p className="mt-7 text-gray-400 text-lg leading-8 max-w-xl">
                Turn your ideas into beautiful, responsive and interactive
                web applications. Explore modern interfaces built with
                React, Tailwind CSS and JavaScript.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-9">
                <Link
                  to="/dashboard"
                  className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1"
                >
                  Explore Dashboard
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/learnmore"
                  className="px-7 py-3.5 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800 hover:border-blue-500/50 font-semibold transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>

              {/* Small Features */}
              <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-500" />
                  Modern UI
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-500" />
                  Responsive
                </div>

                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-500" />
                  React Powered
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex justify-center lg:justify-end">

              {/* Glow */}
              <div className="absolute w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />

              {/* Main Card */}
              <div className="relative w-full max-w-md">

                <div className="rounded-3xl border border-slate-700/60 bg-slate-900/70 backdrop-blur-xl p-4 shadow-2xl shadow-blue-900/20">

                  {/* Browser Header */}
                  <div className="flex items-center gap-2 px-3 py-3 border-b border-slate-800">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />

                    <div className="ml-4 flex-1 h-7 rounded-lg bg-slate-800/80" />
                  </div>

                  {/* Code Area */}
                  <div className="p-7">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <FaLaptopCode className="text-3xl text-white" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold">
                          ProjectS
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Modern Web Development
                        </p>
                      </div>
                    </div>

                    {/* Fake Code */}
                    <div className="space-y-4 font-mono text-sm">
                      <div className="flex gap-3">
                        <span className="text-purple-400">
                          const
                        </span>
                        <span className="text-cyan-400">
                          project
                        </span>
                        <span className="text-gray-500">=</span>
                        <span className="text-green-400">
                          "Amazing"
                        </span>
                      </div>

                      <div className="h-2 bg-slate-800 rounded-full w-4/5" />
                      <div className="h-2 bg-slate-800 rounded-full w-3/5" />
                      <div className="h-2 bg-slate-800 rounded-full w-2/3" />
                      <div className="h-2 bg-slate-800 rounded-full w-1/2" />
                    </div>

                    {/* Bottom Cards */}
                    <div className="grid grid-cols-3 gap-3 mt-9">
                      <div className="h-16 rounded-xl bg-blue-500/10 border border-blue-500/20" />
                      <div className="h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/20" />
                      <div className="h-16 rounded-xl bg-indigo-500/10 border border-indigo-500/20" />
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 px-5 py-4 rounded-2xl bg-slate-900 border border-slate-700 shadow-xl">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <FaRocket className="text-green-400" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Performance
                    </p>
                    <p className="font-bold text-green-400">
                      Excellent
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm">
            Why ProjectS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Everything You Need
            <span className="text-blue-500"> to Build</span>
          </h2>

          <p className="text-gray-400 mt-5 leading-7">
            Build modern web experiences with clean architecture,
            beautiful interfaces and powerful development practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">

          {/* Card 1 */}
          <div className="group relative p-8 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300">

            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-7 group-hover:bg-blue-500/20 transition">
              <FaCode className="text-blue-400 text-2xl" />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Clean Code
            </h3>

            <p className="text-gray-400 leading-7">
              Well-structured and reusable components following
              modern React development practices.
            </p>

            <div className="mt-7 text-blue-400 text-sm font-semibold flex items-center gap-2">
              Learn More
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative p-8 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300">

            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-7">
              <FaLaptopCode className="text-cyan-400 text-2xl" />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Responsive Design
            </h3>

            <p className="text-gray-400 leading-7">
              Beautiful layouts that adapt perfectly across
              desktops, tablets and mobile devices.
            </p>

            <div className="mt-7 text-cyan-400 text-sm font-semibold flex items-center gap-2">
              Explore Design
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative p-8 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300">

            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-7">
              <FaRocket className="text-indigo-400 text-2xl" />
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Fast Performance
            </h3>

            <p className="text-gray-400 leading-7">
              Lightweight and optimized interfaces designed for
              speed and a smooth user experience.
            </p>

            <div className="mt-7 text-indigo-400 text-sm font-semibold flex items-center gap-2">
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 via-slate-900 to-cyan-500/10 p-10 md:p-16 text-center">

          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Build Something Amazing?
            </h2>

            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Explore projects, learn modern technologies and
              start building your next web experience.
            </p>

            <Link
              to="/dashboard"
              className="inline-flex items-center gap-3 mt-8 bg-blue-600 hover:bg-blue-500 px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-1 shadow-lg shadow-blue-600/20"
            >
              Get Started
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-slate-800 bg-slate-950/70">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

          <div className="grid md:grid-cols-3 gap-12">

            {/* Logo */}
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
                  <GiThorHammer size={25} />
                </span>

                Project
                <span className="text-blue-500">S</span>
              </h2>

              <p className="text-gray-500 mt-6 leading-7 max-w-md">
                Build modern, responsive and interactive web
                applications using React, Tailwind CSS and
                JavaScript.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">
                Quick Links
              </h3>

              <ul className="space-y-4 text-gray-500">

                <li>
                  <a
                    href="#homee"
                    className="hover:text-blue-400 transition"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-blue-400 transition"
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    to="/learnmore"
                    className="hover:text-blue-400 transition"
                  >
                    Learn More
                  </Link>
                </li>

              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-6">
                Connect With Me
              </h3>

              <div className="flex gap-3">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-500 transition"
                >
                  <FaInstagram />
                </a>

              </div>

              <p className="text-gray-500 mt-6 text-sm">
                Email: your@email.com
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 mt-14 pt-7 text-center text-gray-600 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-blue-500 font-semibold">
              ProjectS
            </span>
            . All Rights Reserved.
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Home;

