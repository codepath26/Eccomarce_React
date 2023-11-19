import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  token : '',
  userIsLoggedIn : false,
  logginHandler : (token)=>{},
  logoutHandler : ()=>{}
});



export const useAuthContext = ()=>{
  return useContext(AuthContext);
}

const AuthContextProvider = (props)=>{
  const [token ,setToken] = useState(null);

  const userIsLoggedIn = !!token;


  const logginHandler = (token)=>{
    setToken(token);
  }
  const logoutHandler = ()=>{
    // userIsLoggedIn 
    setToken(null);
  }



  return (
    <AuthContext.Provider value={{token , userIsLoggedIn , logginHandler , logoutHandler}}>
      {
        props.children
      }
    </AuthContext.Provider>
  )
}
export default AuthContextProvider;