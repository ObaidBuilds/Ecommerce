import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/search/:query" element={<Search />} />
        <Route exact path="/collection/:category" element={<Categories />} />
        <Route exact path="/product/:name" element={<Product />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/checkout/success" element={<Order />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
