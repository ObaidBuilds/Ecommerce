import React from "react";
import CartCard from "../components/CartCard";
import Checkout from "../components/Checkout";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.CartProduct);
  const cartLen = useSelector((state) => state.cart.cartLength);
console.log(cartItem)
  const calculateTotal = () => {
    return cartItem.reduce((total, cur) => total + cur.discountedPrice, 0);
  };

  return (
    <>
      {/* <NewNav /> */}
      <Nav />
      <section className="cart">
        <div className="cart_left">
          <div className="cart_left_container">
            <div className="cart_heading">
              <h2>Shopping Cart ({cartLen} items)</h2>
              <h3>Total:- Rs{calculateTotal()}/-</h3>
            </div>

            <div className="cart_card_container">
              {cartItem.length > 0 ? (
                cartItem.map((item) => (
                  <CartCard key={item._id} product={item} />
                ))
              ) : (
                <div className="no_item_container">
                  <p className="no_item">No items in cart</p>
                  <Link to={"/collection/men"}>
                    <button className="no_btn">View Product</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="cart_right">
          <Checkout calculateTotal={calculateTotal} />
        </div>
      </section>
    </>
  );
};

export default Cart;
