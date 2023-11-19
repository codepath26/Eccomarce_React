import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";
import { useAuthContext } from "../../Context/AuthContext";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [showMessage, setShowMessage] = useState('');
  const [isLoading ,setIsLoading] = useState(false);
  const{logginHandler} = useAuthContext();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (enteredPassword.length < 6) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
      let url;
      if (isLogin) {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
      } else {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
      }
      const signUpUser = async () => {
        try {
          const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              retrunSecureToken: true,
            }),
            headers: {
              "Content-Type": "apllication/json",
            },
          });
          setIsLoading(false);
          if (response.ok) {
            const data = await response.json();
            console.log(data.idToken)
            logginHandler(data.idToken)

          } else {
            const data = await response.json();
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw Error(errorMessage);
          }
        } catch (err) {
          setShowMessage(err.message);
        }
      };
      signUpUser();
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {showMessage ? <p className="text-white">{showMessage}</p>:("")}
         {isLoading ? <p className="text-white">Sending Request...</p>  : <button>{isLogin ? "Login" : "Create Account"}</button>}
         <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
