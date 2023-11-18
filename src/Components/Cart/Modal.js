import React from "react";
import { useProduct } from "../../Context/ProductContext";

function Modal(props) {
  const { productsDetails,removeProduct } = useProduct();
  console.log(productsDetails);
  return (
    <>
      <div className="w-50 position-absolute top-50 start-50 translate-middle bg-light border rounded z-3 p-2 table-responsive">
        <table className="table  text-center ">
          <thead>
            <tr className="border border-success">
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {productsDetails.products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td><span>{product.quantity}</span></td>
                <td> <button className="btn btn-sm btn-danger" onClick={()=>{removeProduct(product.id)}}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <div className=" d-flex justify-content-between fs-3 fw-bolder">
          <span>Total Price</span>{console.log(productsDetails.totalPrice)}
          <span>₹{productsDetails.totalPrice}</span>
        </div>
        <div className="p-2 float-end my-2">
          <button
            onClick={() => props.onClose()}
            className="btn btn btn-success mx-1"
          >
            close
          </button>
          <button className="btn btn btn-outline-success">order</button>
        </div>
      </div>
    </>
  );
}

export default Modal;
