import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
  updateCartItemSize,
} from "../redux/reducers/cartSlice";

const CartCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("15ml");
  const [selectedQuantity, setSelectedQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    dispatch(updateCartItemSize({productId : product._id, size: e.target.value}));
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setSelectedQuantity(newQuantity);
    dispatch(
      updateCartItemQuantity({ productId: product._id, quantity: newQuantity })
    );
  };

  const quantityOptions = [];
  for (let i = 1; i <= product.stock; i++) {
    quantityOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const handleRemoveCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart_card">
      <div className="cart_card_img">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="cart_card_content">
        <button
          className="remove_btn"
          onClick={() => handleRemoveCart(product._id)}
        >
          Remove
        </button>
        <h1>{product.title}</h1>
        <div className="prices">
          <p>Rs {product.discountedPrice}</p>
          <span>Rs {product.price}</span>
          <h5>( Rs {product.price - product.discountedPrice} /- off )</h5>
        </div>
        <p className="greenn">
          You saved Rs {product.price - product.discountedPrice} so far
        </p>
        <div className="select">
          <select value={selectedSize} onChange={handleSizeChange} required>
            <option value="">Size</option>
            <option value="15ml">15ml</option>
            <option value="20ml">20ml</option>
          </select>

          <select value={selectedQuantity} onChange={handleQuantityChange}>
            <option value="">Qty</option>
            {quantityOptions}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
