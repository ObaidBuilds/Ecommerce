import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = () => {
  const { query } = useParams();

  const searchedProduct = useSelector((state) => state.cart.searchedProduct);
  
  return (
    <>
      <Nav />
      <section className="search_container">
        <h1>
          Search Result for <span>"{query}"</span>
        </h1>
        <div className="search_inner_container">
          {searchedProduct.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Search;
