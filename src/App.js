import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
   //this is the kind mistack which i made i used to render elements into the header so that the element is not show into the web pade don't do the next time 
                  //  <Header>
                  //   <Outlet />
                  // </Header> 

function App() {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}

export default App;
