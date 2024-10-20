import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
const Chatbot = lazy(() => import("./pages/Chatbot"));
const Interest = lazy(() => import("./pages/Interest"));
const Order = lazy(() => import("./pages/Order"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Categories = lazy(() => import("./pages/Categories"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Router>
      <ToastContainer />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/interest" element={<Interest />} />
          <Route exact path="/chatbot" element={<Chatbot />} />
          <Route exact path="/search/:query" element={<Search />} />
          <Route exact path="/collection/:category" element={<Categories />} />
          <Route exact path="/product/:name" element={<Product />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/checkout/success" element={<Order />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
