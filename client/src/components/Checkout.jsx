import React from "react";
import { Link } from "react-router-dom";

const Checkout = ({ calculateTotal }) => {
  return (
    <>
      <div className="checkout_form">
        <span>Apply</span>
        <h3>Coupons are offers</h3>
        <p>Save more with coupons and offers</p>
      </div>

      <div className="checkout_form_two">
        <div className="checkout_form_container">
          <div className="total">
            <div>
              <p className="bold">Item total</p>
              <p className="bold">Delievery fee</p>
            </div>

            <div>
              <p>Rs {calculateTotal()} /-</p>
              <p className="green">Free</p>
            </div>
          </div>

          <div className="grand_total">
            <div>
              <p className="bold">Grand total</p>
              <p className="bold">Inclusive of all taxes</p>
            </div>
            <div>
              <p>Rs {calculateTotal()}/-</p>
            </div>
          </div>
        </div>

        <div className="time">
          <p>
            Average delivery time
            <b> 3-5 days </b>
          </p>
        </div>

        <div className="checkout_btnn check_btn">
          <div className="bord_green">$1000 is saved so far in this order</div>
          <Link to={"/checkout"}>
            <button>Continue</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Checkout;
