import React, { useEffect } from "react";
import Product from "./Product";
import { useProducts } from "../../Context/ProductsContext";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";


function Store() {
  const { products } = useProducts();
  const navigate = useNavigate();
  const {userIsLoggedIn} = useAuthContext();
   useEffect(()=>{
     console.log(userIsLoggedIn);
     if(!userIsLoggedIn){
      navigate('/login')
     }
   })
  return (
    <div className="container text-center my-5">
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Store;
