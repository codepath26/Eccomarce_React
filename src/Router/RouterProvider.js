// import React, { useEffect, useState } from 'react'
import App from "../App";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Store from "../Components/Store/Store";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "../Components/ContactUs/Contact";
import Details from "../Components/Details/Deatils";
// import AuthForm from "./Components/Auth/AuthForm";
import ForgotPass from "../Components/Auth/ForgotPassword";
import Login from "../Components/Auth/Login";
import Signup from "../Components/Auth/Signup";

function RoutesProvider() {
  const localToken = localStorage.getItem('token')
     console.log(localToken);

  // const router = createBrowserRouter([
  //   {
  //     path: "",
  //     element:<App />,
  //     children: [
  //       {
  //         path: "",
  //         element: <Home/>,
  //       },
  //       {
  //         path: "login",
  //         element: <Login/>,
  //       },
  //       {
  //         path: "resetpassword",
  //         element: userIsLoggedIn ? <Navigate to="/login" /> : <ForgotPass/>
  //       },
  //       {
  //         path: "signup",
  //         element: <Signup/>,
  //       },
  //       {
  //         path: "about",
  //         element: userIsLoggedIn ?  <About />:<Navigate to="/login" />,
  //       },
  //       {
  //         path: "store",
  //         element: userIsLoggedIn ?  <Navigate to="/login" /> :<Store />,
  //       },
  //       {
  //         path: "contact",
  //         element:userIsLoggedIn ?   <Contact />:<Navigate to="/login" />,
  //       },
  //       {
  //         path: "details/:id",
  //         element: userIsLoggedIn ?  <Details/>:<Navigate to="/login" />,
  //       },
  //       {
  //         path: "*",
  //         element: <Login/>,
  //       },

  //     ],
  //   },
  // ]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="resetpassword"
          element={localToken ? <ForgotPass /> : <Navigate to="/login" />}
        />
        <Route
          path="about"
          element={localToken ? <About /> : <Navigate to="/login" />}
        />
        <Route
          path="store"
          element={localToken ? <Store /> : <Navigate to="/login"  />}
        />
        <Route
          path="contact"
          element={localToken ? <Contact /> : <Navigate to="/login" />}
        />
        <Route
          path="details/:id"
          element={localToken ? <Details /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default RoutesProvider;
