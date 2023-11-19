
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

function SignUpModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {logginHandler} = useAuthContext();

  const closeOverlay = (e) => {
    navigate("/");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    async function sendRequest() {
      try {
        const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
          user
        );
        console.log(response);
        console.log("signu",response.data.idToken)
        logginHandler(response.data.idToken)
        navigate('/login');
      } catch (err) {
        console.log("err",err);
      }
    }
    sendRequest();
  };

  return (
    <>
      <div
       
        className="w-100 vh-100  d-flex justify-content-center align-items-center bg-dark bg-opacity-50 z-1"
      >
        <div className="w-50">
          <form
            onSubmit={onSubmitHandler}
            className="border border-success w-50 m-auto p-3 rounded z-3 bg-light position-relative"
          >
            <button
              onClick={ closeOverlay}
              className="btn-close z-1 position-absolute top-0 end-0 fs-3 m-3 "
            ></button>
            <div className="text-center">
              <h1>Signup</h1>
            </div>
            <div className="d-flex flex-column">
              <label className="fs-3 fw-bold mt-4" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="p-2 fs-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
      
              />
            </div>
            <div className="d-flex flex-column">
              <label className="fs-3 fw-bold mt-4" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="p-2 fs-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary mt-4 w-50 border rounded-pill p-3">
                Signup
              </button>
            </div>
            <div className="text-center my-3 fs-4">
              <p className="d-inline">Already Have an account?</p>{" "}
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignUpModal;
