import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaBirthdayCake, FaCalendarAlt, FaEnvelope, FaEye, FaEyeSlash, FaImage, FaLock, FaUser } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
 
    const [form, setForm] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    dob: "",
    course:"",
    gender: "",
    profileurl: "",
  });

   const { id } = useParams();
  console.log(id);

  const fetchdata = async () => {
    const { data } = await axios.get(`http://localhost:3000/users/${id}`);
    setForm(data);
  };
  useEffect(() => {
    fetchdata();
  }, []);


  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validation = () => {
    let err = {};
    const { username, age, email, password, dob, course , gender, profileurl } =
      form;
    if (!username) {
      err.username = "username is required";
    }
    if (!age) {
      err.age = "age is required";
    }
    if (!email) {
      err.email = "Email is required";
    }
    if (!password) {
      err.password = "Password is required";
    }
    if (!dob) {
      err.dob = "Date Of Birth is Required";
    }
    if(!course){
        err.course="Course is Required"
    }
    if (!gender) {
      err.gender = "Gender is required";
    }
    if (!profileurl) {
      err.profileurl = "profileurl is required";
    }
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return true;
    }
    return false;
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (validation()) {
      toast.error("failed to Register", { position: "top-center" });
      return;
    }
    try {
      await axios.put(`http://localhost:3000/users/${id}`,form)
      toast.success("Profile Update Successfully", { position : "top-center"})
      navigate("/dashboard")
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { position: "top-center" });
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
         <main className=" bg-slate-950 flex items-center justify-center px-[45vh] py-20">
              <div className=" bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl">
        
                {/* Heading */}
                <div className="text-center mb-10">
                  <h1 className="text-4xl font-bold text-white">
                    Update<span className="text-blue-500">Account</span>
                  </h1>
                  <p className="text-gray-400 mt-3">
                    update your Profile.
                  </p>
                </div>
        
                <form onSubmit={handleForm} className="grid md:grid-cols-2 gap-6">
        
                  {/* Username */}
                  <div>
                    <label className="text-gray-300 mb-2 block">Username</label>
                    <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
                      <FaUser className="text-gray-400 mr-3" />
                      <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleInput}
                        placeholder="Enter username"
                        className="bg-transparent outline-none w-full text-white"
                      />
                    </div>
                  </div>
        
                  {/* Age */}
                  <div>
                    <label className="text-gray-300 mb-2 block">Age</label>
                    <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
                      <FaBirthdayCake className="text-gray-400 mr-3" />
                      <input
                        type="number"
                        name="age"
                        value={form.age}
                        onChange={handleInput}
                        placeholder="Enter age"
                        className="bg-transparent outline-none w-full text-white"
                      />
                    </div>
                  </div>
        
                  {/* Email */}
                  <div>
                    <label className="text-gray-300 mb-2 block">Email</label>
                    <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
                      <FaEnvelope className="text-gray-400 mr-3" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInput}
                        placeholder="Enter email"
                        className="bg-transparent outline-none w-full text-white"
                      />
                    </div>
                  </div>
        
                  {/* Password */}
                  <div>
                    <label className="text-gray-300 mb-2 block">Password</label>
                    <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
                      <FaLock className="text-gray-400 mr-3" />
                      <input
                        name="password"
                        value={form.password}
                        onChange={handleInput}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        className="bg-transparent outline-none w-full text-white"
                      />
        
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-blue-500"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
        
                    {/* DOB */}
                  <div>
                    <label className="text-gray-300 mb-2 block">Date of Birth</label>
                    <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
                      <FaCalendarAlt className="text-gray-400 mr-3" />
                      <input
                        type="date"
                        name="dob"
                        value={form.dob}
                        onChange={handleInput}
                        className="bg-transparent outline-none w-full text-white"
                      />
                    </div>
                  </div>
        
                  {/* Course */}
                  <div>
                    <label className="text-gray-300 mb-2 block">Course</label>
        
                    <select
                    name="course"
                    value={form.course}
                    onChange={handleInput}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none">
                      <option>Choose Course</option>
                      <option>Java Full Stack</option>
                      <option>Python Full Stack</option>
                      <option>Web Technology</option>
                      <option>React Developer</option>
                      <option>MERN Stack</option>
                      <option>Node.js</option>
                      <option>Frontend Development</option>
                      <option>Backend Development</option>
                      <option>UI/UX Design</option>
                    </select>
                  </div>
        
                  {/* Gender */}
                  <div className="md:col-span-2">
                    <label className="text-gray-300 mb-3 block">Gender</label>
        
                    <div className="flex gap-8">
                      <label className="flex items-center gap-2 text-gray-300">
                        <input
                         type="radio"
                         name="gender"
                         value={"Male"}
                         checked={form.gender === "Male"}
                         onChange={handleInput}
                         />
                        Male
                      </label>
        
                      <label className="flex items-center gap-2 text-gray-300">
                        <input
                         type="radio"
                          name="gender"
                          value={"Female"}
                          checked={form.gender === "Female"}
                          onChange={handleInput}
                          />
                        Female
                      </label>
        
                      <label className="flex items-center gap-2 text-gray-300">
                        <input
                         type="radio"
                          name="gender"
                          value={"Other"}
                          checked={form.gender === "Other"}
                          onChange={handleInput}
                          />
                        Other
                      </label>
                    </div>
                  </div>
        
                  {/* Profile URL */}
                  <div className="md:col-span-2">
                    <label className="text-gray-300 mb-2 block">Profile URL</label>
        
                    <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
                      <FaImage className="text-gray-400 mr-3" />
                      <input
                        type="url"
                        name="profileurl"
                        value={form.profileurl}
                        onChange={handleInput}
                        placeholder="https://example.com/profile.jpg"
                        className="bg-transparent outline-none w-full text-white"
                      />
                    </div>
                  </div>
        
                  {/* Button */}
                  <div className="md:col-span-2 mt-4">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold text-white transition"
                    >
                      Update Account
                    </button>
                  </div>
        
                </form>
              </div>
            </main>
    </div>
  )
}

export default UpdateProfile