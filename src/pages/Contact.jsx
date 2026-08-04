import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-36 pb-20">
        <div className="text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 mb-6">
            Contact Us
          </span>

          <h1 className="text-5xl md:text-6xl font-bold">
            Let's Build Something
            <span className="text-blue-500"> Amazing Together</span>
          </h1>

          <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-8">
            We'd love to hear from you. Whether you have a project idea,
            collaboration opportunity, or simply want to say hello, feel free
            to reach out.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition">
              <FaEnvelope className="text-4xl text-blue-500 mb-5" />
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">
                projects@example.com
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition">
              <FaPhoneAlt className="text-4xl text-blue-500 mb-5" />
              <h3 className="text-2xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition">
              <FaMapMarkerAlt className="text-4xl text-blue-500 mb-5" />
              <h3 className="text-2xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400">
                India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 resize-none"
              ></textarea>

              <button
                type="button"
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition w-full"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Contact;