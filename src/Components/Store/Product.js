import React from "react";
import { useProduct } from "../../Context/ProductContext";

function Product({ product }) {
  const { title, price, imageUrl } = product;
  const { addProduct } = useProduct();
  const addToCart = (item) => {
  const product = {...item , quantity : 1}
  console.log(product)
    addProduct(product);
  };

  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-4 col-12 d-flex flex-column align-item-center mt-4 ">
        <div className="fs-4">{title}</div>
        <div className=" my-1">
          <img className="img-fluid" src={imageUrl} alt="product" />
        </div>
        <div>
          <span className="fw-bolder mx-2">₹{price}</span>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
