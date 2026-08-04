import React from "react";
import {
  FaReact,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const LearnMore = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 mb-6">
            Learn More
          </span>

          <h1 className="text-5xl md:text-7xl font-bold">
            Learn Modern
            <span className="text-blue-500"> Web Development</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-400 leading-8">
            Explore modern frontend technologies, build responsive websites,
            and create beautiful web applications using React, JavaScript,
            Tailwind CSS, and more.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition">
            <FaReact className="text-5xl text-cyan-400 mb-6" />
            <h2 className="text-2xl font-bold mb-4">React.js</h2>
            <p className="text-gray-400 leading-7">
              Build interactive user interfaces using reusable components,
              hooks, routing, and state management.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition">
            <FaCode className="text-5xl text-yellow-400 mb-6" />
            <h2 className="text-2xl font-bold mb-4">JavaScript</h2>
            <p className="text-gray-400 leading-7">
              Learn variables, arrays, objects, functions, promises,
              async/await, and ES6+ features.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition">
            <FaLaptopCode className="text-5xl text-green-400 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Responsive UI</h2>
            <p className="text-gray-400 leading-7">
              Design beautiful and responsive layouts using Tailwind CSS and
              modern design principles.
            </p>
          </div>

        </div>
      </section>

      {/* Why Learn */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Why Learn With <span className="text-blue-500">ProjectS?</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Gain practical experience through real-world projects and modern
              web technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-950 rounded-3xl p-8 text-center border border-slate-800">
              <FaRocket className="text-5xl text-blue-500 mx-auto mb-5" />
              <h3 className="text-2xl font-semibold mb-3">
                Fast Learning
              </h3>
              <p className="text-gray-400">
                Learn step-by-step with simple and practical examples.
              </p>
            </div>

            <div className="bg-slate-950 rounded-3xl p-8 text-center border border-slate-800">
              <FaLightbulb className="text-5xl text-yellow-400 mx-auto mb-5" />
              <h3 className="text-2xl font-semibold mb-3">
                Creative Ideas
              </h3>
              <p className="text-gray-400">
                Build portfolio-worthy projects using modern UI designs.
              </p>
            </div>

            <div className="bg-slate-950 rounded-3xl p-8 text-center border border-slate-800">
              <FaUsers className="text-5xl text-green-400 mx-auto mb-5" />
              <h3 className="text-2xl font-semibold mb-3">
                Community
              </h3>
              <p className="text-gray-400">
                Learn, collaborate, and improve your skills through continuous
                practice.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-blue-700 to-cyan-500 rounded-3xl p-12 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Start Learning?
          </h2>

          <p className="mt-6 text-lg text-gray-100 max-w-2xl mx-auto">
            Build modern web applications, improve your coding skills, and
            create an impressive developer portfolio.
          </p>

          <button className="mt-10 bg-white text-slate-900 px-8 py-3 rounded-xl font-semibold hover:bg-slate-200 transition">
            Start Learning
          </button>

        </div>
      </section>

    </main>
  );
};

export default LearnMore;