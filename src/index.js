import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import About from "./Components/About/About";
// import Home from "./Components/Home/Home";
// import Store from "./Components/Store/Store";
// import {  Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
// import Contact from "./Components/ContactUs/Contact";
// import Details from  './Components/Details/Deatils'
// // import AuthForm from "./Components/Auth/AuthForm";
// import ForgotPass from "./Components/Auth/ForgotPassword";
// import Login from "./Components/Auth/Login";
// import Signup from "./Components/Auth/Signup";
// import { useAuthContext } from "./Context/AuthContext";
import RoutesProvider from "./Router/RouterProvider";


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
      //         element: !userIsLoggedIn ? <Navigate to="/login" /> : <ForgotPass/> 
      //       },
      //       {
      //         path: "signup",
      //         element: <Signup/>,
      //       },
      //       {
      //         path: "about",
      //         element: <About />,
      //       },
      //       {
      //         path: "store",
      //         element: <Store />,
      //       },
      //       {
      //         path: "contact",
      //         element: <Contact />,
      //       },
      //       {
      //         path: "details/:id",
      //         element: <Details/>,
      //       },
      //       {
      //         path: "*",
      //         element: <Login/>,
      //       },
           
      //     ],
      //   },
      // ]);

    

      // const router = createBrowserRouter(
      //     createRoutesFromElements(
      //       <Route path='' element={<App/>}>
      //         <Route path='' element={<Home/>} />
      //         <Route path='about' element={<About/>} />
      //         <Route path='store' element={<Store/>} />    
      //       </Route>
      //     )
      //   )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <RoutesProvider/>
  </React.StrictMode>
);
