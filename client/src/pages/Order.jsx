import React from "react";
import { useSelector } from "react-redux";
import CheckoutCard from "../components/CheckoutCard";
import Nav from "../components/Nav";

const Order = () => {
  const order = useSelector((state) => state.cart.orders);

  const calculateTotal = () => {
    return order.reduce(
      (total, cur) => total + cur.discountedPrice * cur.quantity,
      0
    );
  };
  return (
   <>
    <Nav/>
    <section className="orders">
      <h1>Orders</h1>
      <div className="checkout_details">
        {order.map((item) => (
          <CheckoutCard product={item} />
        ))}
        <div className="checkout_amount">
          <div>
            <p>Subtotal</p>
            <p>Rs 3899</p>
          </div>
          <div>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div>
            <h2>Total</h2>
            <h3>Rs {calculateTotal()}</h3>
          </div>
        </div>
      </div>
    </section>
   </>
  );
};

export default Order;
