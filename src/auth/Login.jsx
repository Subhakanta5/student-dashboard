import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {

    const [loginForm,setLoginForm]=useState({
    email:"",
    password:""
  }) 

  const navigate=useNavigate()

  const [allUsers,setAllUsers]=useState([])

  const fetchAllUser=async()=>{
    try {
      const {data}=await axios.get("http://localhost:3000/users")
      setAllUsers(data)
    } catch (error) {
      toast.error("Something wrong. please try again later",{position:"top-center"})
    }
  }

  const validation=()=>{
    const {email,password}=loginForm
    let err={}
    if(!email){
      err.email="Email is required"
    }
    if(!password){
      err.password="Password is required"
    }
    if(Object.keys(err).length>0){
      return true
    }
    return false
  }
  useEffect(()=>{
    fetchAllUser()
  },[])

  const handleForm=(e)=>{
    e.preventDefault()
    if(validation()){
      toast.error("You are missing some field",{position:"top-center"})
      return 
    }
    const user=allUsers.find((ele)=>(ele.email===loginForm.email))
    if(!user){
      toast.error("Mail id not registered",{position:"top-center"})
      return 
    }
    if(user.password!==loginForm.password){
      toast.error("Password incorrect",{position:"top-center"})
      return 
    }
    setLoginForm({
      email:"",
      password:""
    })
    const token="hbgfoqbqi."+"vkgjrhgglkr."+user.id
    localStorage.setItem("token",JSON.stringify(token))
    toast.success("Well Done You Successfully Log-in",{position:"top-center"})
    navigate("/dashboard")
  }

  const handleInput=(e)=>{
    const {name,value}=e.target
    setLoginForm({...loginForm,[name]:value})
  }



  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">
            Welcome <span className="text-blue-500">Back</span>
          </h1>
          <p className="text-gray-400 mt-3">
            Sign in to continue to your account.
          </p>
        </div>

        <form onSubmit={handleForm} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Email
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus-within:border-blue-500">
              <FaEnvelope className="text-gray-400 mr-3" />

              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={handleInput}
                placeholder="Enter your email"
                className="bg-transparent outline-none w-full text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Password
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus-within:border-blue-500">
              <FaLock className="text-gray-400 mr-3" />

              <input
              name="password"
              value={loginForm.password}
              onChange={handleInput}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="bg-transparent outline-none w-full text-white placeholder:text-gray-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-blue-500 transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-blue-500 hover:text-blue-400 text-sm"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold text-white transition"
          >
            Login
          </button>

          {/* Register */}
          <p className="text-center text-gray-400">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-blue-500 cursor-pointer hover:underline">
              Register
            </Link>
          </p>

        </form>
      </div>
    </main>
  );
};

export default Login;