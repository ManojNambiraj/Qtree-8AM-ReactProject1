import React, { useReducer, useState } from "react";
import "./ShoppingCart.css";
import ProductCard from "./Components/ProductCard";
import img1 from "./assets/images/img1.webp";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.webp";
import CartItems from "./Components/CartItems";

function ShoppingCart() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "AddToCart":
        return {
          ...state,
          cartItems: [...state.cartItems, action.product],
          total: state.total + action.product.price,
        };
      case "RemoveFromCart":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id != action.product.id
          ),
          total: state.total - action.product.price,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    Products: [
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
    ],
    cartItems: [],
    total: 0,
  });

  const handleAddToCart = (product) => {
    dispatch({ type: "AddToCart", product });
  };

  const handleRemoveFromCart = (product) => {
    dispatch({ type: "RemoveFromCart", product });
  };

  // const Products = [
  //   {
  //     id: 1,
  //     productName: "Redmi",
  //     img: img1,
  //     price: 15000,
  //     desc: "Some quick example text to build on the card title and make",
  //     isStock: true,
  //   },
  //   {
  //     id: 2,
  //     productName: "Apple",
  //     img: img2,
  //     price: 30000,
  //     desc: "Some quick example text to build on the card title and make",
  //     isStock: false,
  //   },
  //   {
  //     id: 3,
  //     productName: "Sony",
  //     img: img3,
  //     price: 25000,
  //     desc: "Some quick example text to build on the card title and make",
  //     isStock: true,
  //   },
  //   {
  //     id: 4,
  //     productName: "Samsung",
  //     img: img2,
  //     price: 20000,
  //     desc: "Some quick example text to build on the card title and make",
  //     isStock: true,
  //   },
  //   {
  //     id: 5,
  //     productName: "Xiomi",
  //     img: img3,
  //     price: 10000,
  //     desc: "Some quick example text to build on the card title and make",
  //     isStock: false,
  //   },
  //   {
  //     id: 6,
  //     productName: "OnePlus",
  //     img: img1,
  //     price: 45000,
  //     desc: "Some quick example text to build on the card title and make",
  //     isStock: true,
  //   },
  // ];

  // const [cartItems, setCartItems] = useState([]);
  // const [total, setTotal] = useState(0);

  // const handleAddToCart = (data) => {
  //   setCartItems([...cartItems, data]);
  //   setTotal(total + data.price);
  // };

  // const handleRemoveFromCart = (item) => {
  //   const index = cartItems.findIndex((cItem) => cItem.id == item.id);

  //   cartItems.splice(index, 1);
  //   setCartItems([...cartItems]);
  //   setTotal(total - item.price);
  // };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 p-3 left">
          <div className="row">
            {state.Products.map((prod) => {
              return (
                <ProductCard prod={prod} handleAddToCart={handleAddToCart} />
              );
            })}
          </div>
        </div>
        <div className="col-2 right">
          <h3>Count: {state.cartItems.length}</h3>
          <ol class="list-group list-group-numbered">
            {state.cartItems.map((item) => {
              return (
                <CartItems
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              );
            })}
          </ol>
          <h3>Total: {state.total}</h3>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
