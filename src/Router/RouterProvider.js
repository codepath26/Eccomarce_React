import React from 'react'
import App from "../App";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Store from "../Components/Store/Store";
import {  Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "../Components/ContactUs/Contact";
import Details from  '../Components/Details/Deatils'
// import AuthForm from "./Components/Auth/AuthForm";
import ForgotPass from "../Components/Auth/ForgotPassword";
import Login from "../Components/Auth/Login";
import Signup from "../Components/Auth/Signup";
import { useAuthContext } from "../Context/AuthContext";
function RoutesProvider() {
  const {userIsLoggedIn} = useAuthContext();
  const router = createBrowserRouter([
    {
      path: "",
      element:<App />,
      children: [
        {
          path: "",
          element: <Home/>,
        },
        {
          path: "login",
          element: <Login/>,
        },
        {
          path: "resetpassword",
          element: !userIsLoggedIn ? <Navigate to="/login" /> : <ForgotPass/> 
        },
        {
          path: "signup",
          element: <Signup/>,
        },
        {
          path: "about",
          element: !userIsLoggedIn ? <Navigate to="/login" /> : <About />,
        },
        {
          path: "store",
          element:!userIsLoggedIn ? <Navigate to="/login" /> :  <Store />,
        },
        {
          path: "contact",
          element:!userIsLoggedIn ? <Navigate to="/login" /> :  <Contact />,
        },
        {
          path: "details/:id",
          element: !userIsLoggedIn ? <Navigate to="/login" /> :  <Details/>,
        },
        {
          path: "*",
          element: <Login/>,
        },
       
      ],
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default RoutesProvider;
