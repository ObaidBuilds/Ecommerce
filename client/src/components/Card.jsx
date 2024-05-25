import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/reducers/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="feature_card">
      <Link to={`/product/${product.title}`}>
        <img src={product.thumbnail} alt="product" />
        <p>{product.title}</p>
      </Link>
      <Link to={`/product/${product.title}`}>
        <div className="prices">
          <p>Rs {product.discountedPrice}</p>
          <span>Rs {product.price}</span>
          <h5> Rs {product.price - product.discountedPrice}/- off</h5>
        </div>
      </Link>
      <button onClick={() => handleAddToCart(product)} className="card_btn">
        Add to cart
      </button>
    </div>
  );
};

export default Card;
