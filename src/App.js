import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import ProductProvider from "./Context/ProductContext";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";

   //this is the kind mistack which i made i used to render elements into the header so that the element is not show into the web pade don't do the next time 
                  //  <Header>
                  //   <Outlet />
                  // </Header> 

function App() {
  const [showCart , setShowCart] = useState(false);
  const onHideCart = ()=>{
    setShowCart(false);
  }
  const onShowCart = ()=>{
    setShowCart(true);
  }
  return (
    <ProductProvider>
      <Header onOpen={onShowCart}/> 
      {showCart && <Cart onClose ={onHideCart} />}
      <Outlet/>
      <Footer/>

    </ProductProvider>
  );
}

export default App;
