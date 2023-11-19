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
  const [token ,setToken] = useState(null);
  const [userIsLoggedIn ,setUserIsLoggedIn] = useState(false);

 


  const logginHandler = (token)=>{
    console.log("setting  the tocke" , token)
    setToken(token);
    
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