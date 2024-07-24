import React from "react";

function CartItems(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{props.item.productName}</div>
        {props.item.price}
      </div>
      <span class="badge text-bg-primary rounded-pill">X</span>
    </li>
  );
}

export default CartItems;
