import React, { useState } from "react";
import CheckoutCard from "../components/CheckoutCard";
import Nav from "../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { useCreateOrderMutation } from "../redux/api/order";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { checkout, emptyCart } from "../redux/reducers/cartSlice";

const Checkout = () => {
  const [checkoutDetails, setCheckoutDetails] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart.CartProduct);
  const [createOrder] = useCreateOrderMutation();

  const calculateTotal = () => {
    return cartItem.reduce(
      (total, cur) => total + cur.discountedPrice * cur.quantity,
      0
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCheckoutDetails({
      ...checkoutDetails,
      [name]: value,
      order: cartItem,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createOrder(checkoutDetails);
      toast.success("Order placed successfully");
      dispatch(checkout());
      dispatch(emptyCart());
      navigate("/checkout/success");
      setCheckoutDetails({});
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Nav />
      <section className="checkout">
        <div className="checkout_container">
          <form onSubmit={handleSubmit} className="checkout_left">
            <h1>Conatct</h1>
            <input
              className="long"
              type="text"
              placeholder="Active Mobile Number *"
              name="contact"
              value={checkoutDetails.contact}
              onChange={handleChange}
              required
            />
            <h1>Delivery</h1>
            <input className="long" type="text" value="Pakistan" readonly />
            <div>
              <input
                className="short"
                type="text"
                placeholder="First Name *"
                name="firstName"
                value={checkoutDetails.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="short"
                type="text"
                placeholder="Last Name* "
                name="lastName"
                value={checkoutDetails.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              className="long"
              type="text"
              placeholder="Address *"
              name="address"
              value={checkoutDetails.address}
              onChange={handleChange}
              required
            />
            <input
              className="long"
              type="text"
              placeholder="Famous Place Near House"
              name="famousPlace"
              value={checkoutDetails.famousPlace}
              onChange={handleChange}
            />
            <div>
              <input
                className="short"
                type="text"
                placeholder="City name *"
                name="cityName"
                value={checkoutDetails.cityName}
                onChange={handleChange}
                required
              />
              <input
                className="short"
                type="text"
                placeholder="2 mobile Number"
                name="secondContact"
                value={checkoutDetails.secondContact}
                onChange={handleChange}
              />
            </div>
            <h1>Shipping Method</h1>
            <input className="long" type="text" value="TCS  (Free)" readonly />
            <h1>Payement</h1>
            <p>All transactions are secure and encrypted.</p>
            <input
              className="long"
              type="text"
              value="Cash on Delivery (COD)"
              readonly
            />
            <button type="submit" className="long checkout_btn">
              Complete Order
            </button>
          </form>
          <div className="checkout_right">
            <div className="checkout_details">
              {cartItem.map((item) => (
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
