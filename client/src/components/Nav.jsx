import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearchProductsQuery } from "../redux/api/product";
import { search } from "../redux/reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useSearchProductsQuery(searchTerm);
  const cartLen = useSelector((state) => state.cart.cartLength);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data && data.products.length > 0) {
      dispatch(search(data.products));
      navigate(`/search/${searchTerm}`);
    }

    setSearchTerm("");
  };

  return (
    <>
      <div className={toggle ? "search active" : "search"}>
        <h1>Search Products</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      <nav className="navbar">
        <ul className="policy">
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
          <li>Terms & Condition</li>
        </ul>
        <div className="logo">
          <img
            src="https://dukaan.b-cdn.net/300x300/webp/media/e6519c02-184a-406a-8059-cb659817f6ca.png"
            alt="logo"
          />
        </div>
        <ul className="links">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li onClick={handleToggle}>Search</li>
          <Link to={"/interest"}>
            <li>Interest</li>
          </Link>
          <Link to={"/chatbot"}>
            <li>Chatbot</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart ({cartLen})</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
