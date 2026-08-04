import React from "react";
import { FaCode, FaLaptop, FaLaptopCode, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 mb-6">
              About ProjectS
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Building Beautiful &
              <span className="text-blue-500"> Modern Web Experiences</span>
            </h1>

            <p className="text-gray-400 text-lg leading-8 mt-8">
              ProjectS is a modern portfolio platform that showcases creative
              web applications, responsive UI designs, and innovative frontend
              projects. Our goal is to create visually appealing and
              user-friendly experiences using the latest web technologies.
            </p>

            <button className="mt-10 px-7 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
              Explore Projects
            </button>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="w-[420px] h-[420px] rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl shadow-blue-600/30 flex items-center justify-center">
              <FaLaptop className="text-white text-9xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            We aim to inspire developers by building clean, responsive, and
            interactive web applications that combine creativity with modern
            frontend development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition">
            <FaCode className="text-5xl text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Clean Code</h3>
            <p className="text-gray-400">
              Writing maintainable, scalable, and reusable code using modern
              development practices.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition">
            <FaLaptopCode className="text-5xl text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">
              Responsive Design
            </h3>
            <p className="text-gray-400">
              Creating interfaces that provide a seamless experience across all
              devices and screen sizes.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition">
            <FaRocket className="text-5xl text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-400">
              Constantly exploring new technologies to deliver fast, modern,
              and engaging digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-5xl font-bold text-blue-500">25+</h2>
            <p className="text-gray-400 mt-2">Projects</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-blue-500">10+</h2>
            <p className="text-gray-400 mt-2">Technologies</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-blue-500">100%</h2>
            <p className="text-gray-400 mt-2">Responsive</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-blue-500">24/7</h2>
            <p className="text-gray-400 mt-2">Learning</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;