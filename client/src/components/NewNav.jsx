import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const NewNav = () => {
  return (
    <nav className="new_nav">
      <div className="logo">
        <img
          src="https://dukaan.b-cdn.net/420x280/webp/media/e6519c02-184a-406a-8059-cb659817f6ca.png"
          alt="logo"
        />
      </div>
      <div className="tracking">
        <div className="one">
          <span>1</span>
          <p>Cart</p>
          <div></div>
        </div>
        <div className="two">
          <span>2</span>
          <p>Address</p>
          <div></div>
        </div>
        <div className="three">
          <span>3</span>
          <p>Shipping</p>
        </div>
      </div>

      <div className="cart_icon">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/categories"}>
          <p>Shop</p>
        </Link>
        <Link to={"/cart"}>
          <p>
            <FaShoppingBag />
            Cart
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default NewNav;
