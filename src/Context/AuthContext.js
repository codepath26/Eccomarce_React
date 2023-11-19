import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  token : '',
  userIsLoggedIn : false,
  logginHandler : (token)=>{},
  logoutHandler : ()=>{},
  onUserLogin : ()=>{}
});



export const useAuthContext = ()=>{
  return useContext(AuthContext);
}

const AuthContextProvider = (props)=>{
  const localToken = localStorage.getItem("token");

  const [token ,setToken] = useState(null);
  const [userIsLoggedIn ,setUserIsLoggedIn] = useState(localToken); // this is not reinitialzed so that we don't need worry about that // this is help full i don't idea onthis bro but remember this bro

 


  const logginHandler = (token)=>{
    console.log("setting  the tocke" , token)
    setToken(token);
    localStorage.setItem('token' , token);
    
  }
  const logoutHandler = ()=>{
    // userIsLoggedIn 
    setToken(null);
    setUserIsLoggedIn(false);
  }
  const onUserLogin = ()=>{
    setUserIsLoggedIn(true);
  }



  return (
    <AuthContext.Provider value={{token , userIsLoggedIn , logginHandler , logoutHandler , onUserLogin}}>
      {
        props.children
      }
    </AuthContext.Provider>
  )
}
export default AuthContextProvider;