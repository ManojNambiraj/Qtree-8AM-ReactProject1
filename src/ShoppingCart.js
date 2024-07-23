import React from "react";
import "./ShoppingCart.css";
import ProductCard from "./Components/ProductCard";
import img1 from "./assets/images/img1.webp";
import img2 from "./assets/images/img2.jpg"
import img3 from "./assets/images/img3.webp"

function ShoppingCart() {
  const Products = [
    {
      id: 1,
      productName: "Redmi",
      img: img1,
      price: 15000,
      desc: "Some quick example text to build on the card title and make",
      isStock: true,
    },
    {
      id: 2,
      productName: "Apple",
      img: img2,
      price: 30000,
      desc: "Some quick example text to build on the card title and make",
      isStock: false,
    },
    {
      id: 3,
      productName: "Sony",
      img: img3,
      price: 25000,
      desc: "Some quick example text to build on the card title and make",
      isStock: true,
    },
    {
      id: 4,
      productName: "Samsung",
      img: img2,
      price: 20000,
      desc: "Some quick example text to build on the card title and make",
      isStock: true,
    },
    {
      id: 5,
      productName: "Xiomi",
      img: img3,
      price: 10000,
      desc: "Some quick example text to build on the card title and make",
      isStock: false,
    },
    {
      id: 6,
      productName: "OnePlus",
      img: img1,
      price: 45000,
      desc: "Some quick example text to build on the card title and make",
      isStock: true,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 p-3 left">
          <div className="row">
            {Products.map((prod) => {
              return <ProductCard prod={prod}/>;
            })}
          </div>
        </div>
        <div className="col-2 right">right</div>
      </div>
    </div>
  );
}

export default ShoppingCart;
