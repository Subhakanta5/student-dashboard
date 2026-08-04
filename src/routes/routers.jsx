import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRouting from "./PrivateRouting";
import DashboardHome from "../Dashboard/DashboardHome";
import Profile from "../Dashboard/Profile";
import UpdateProfile from "../Dashboard/UpdateProfile";
import LearnMore from "../pages/LearnMore";
import MyCourses from "../Dashboard/MyCourses";
import Projects from "../Dashboard/Projects";


export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/learnmore",
                element:<LearnMore/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/dashboard",
                element:<PrivateRouting>
                         <Dashboard/>
                        </PrivateRouting>,
                    children:[
                        {
                            index:true,
                            element:<DashboardHome/>
                        },
                        {
                            path:"/dashboard/profile",
                            element:<Profile/>
                        },
                        {
                            path:"/dashboard/updateprofile/:id",
                            element:<UpdateProfile/>
                        },
                        {
                            path:"/dashboard/mycourses",
                            element:<MyCourses/>
                        },
                        {
                            path:"/dashboard/projects",
                            element:<Projects/>
                        },
                    ]
            }
        ]
    }
])