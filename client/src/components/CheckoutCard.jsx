import React from "react";

const CheckoutCard = ({ product }) => {
  const renderQuantity = () => {
    if (product.quantity > 1) {
      return <span>X {product.quantity}</span>;
    }
    return null;
  };
  return (
    <div className="checkout_card">
      <div className="checkout_card_inner">
        <img src={product.thumbnail} alt={product.title} />
        <p>
          {product.title} {renderQuantity()}
        </p>
      </div>
      <h4>Rs {product.discountedPrice}</h4>
    </div>
  );
};

export default CheckoutCard;
