import React from "react";
import Product from "./Product";
import { useProducts } from "../../Context/ProductsContext";




function Store() {
  const {products} = useProducts();

  return   <div className="container text-center my-5">
          <div className="row">

      {
        products.map((product)=>(
          <Product key={product.id} product ={product}/>
          ))
        }
        </div>
  </div>
}

export default Store;
