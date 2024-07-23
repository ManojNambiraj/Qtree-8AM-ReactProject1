import React from "react";
import img1 from "../assets/images/img1.webp";

function ProductCard(props) {
  return (
    <div className="card col-3 me-4 mb-2" style={{ width: "18rem" }}>
      <img
        src={props.prod.img}
        className="card-img-top"
        alt="..."
        style={{ height: "250px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.prod.productName}</h5>
        <h6 className="card-title">Rs: {props.prod.price}</h6>
        <p className="card-text">{props.prod.desc}</p>
        <p>{props.prod.isStock == true ? "-in stock" : "-out of stock"}</p>
        <button className="btn btn-primary" disabled={!props.prod.isStock}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
