import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Context/CartContext";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import ProductsProvider from "./Context/ProductsContext";
import AuthContextProvider from "./Context/AuthContext";
import Signup from "./Components/Auth/Signup";

   //this is the kind mistack which i made i used to render elements into the header so that the element is not show into the web pade don't do the next time 
                  //  <Header>
                  //   <Outlet />
                  // </Header> 

function App() {
  const [showCart , setShowCart] = useState(false);
  // const [isLoggedIn,setIsLoggedIn ] = useState(false);
  const onHideCart = ()=>{
    setShowCart(false);
  }
  const onShowCart = ()=>{
    setShowCart(true);
  }
  return (
    <AuthContextProvider>
    <CartProvider>
      <ProductsProvider>
      <Header onOpen={onShowCart}/> 
      {showCart && <Cart onClose ={onHideCart} />}
      <Outlet/>
      <Footer/>
    </ProductsProvider>
    </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
