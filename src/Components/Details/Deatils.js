import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../Context/ProductsContext";

function Details() {
  const { products } = useProducts();
  const params = useParams();
  const id = Number(params.id);
  const index = products.findIndex((product) => product.id === id);
  const product = products[index];

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12 text-center">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="img-fluid "
            />
          </div>
          <div className="col-md-12 mt-3 text-center">
            <h2>{product.title}</h2>
            <p className="text-muted">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              debitis temporibus cumque veniam dolorem vero fugiat pariatur
              quis, excepturi ratione sapiente cum iste praesentium repellendus
              voluptates a dolores? Ipsum, dolorum!
            </p>
            <p className="font-weight-bold">Price: ${product.price}</p>
            {/* Add other product details as needed */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
