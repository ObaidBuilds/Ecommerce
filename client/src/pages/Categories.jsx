import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import { useCategoriesQuery } from "../redux/api/product";

const Categories = () => {
  const { category } = useParams();

  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const { data: menData } = useCategoriesQuery("men");
  const { data: womenData } = useCategoriesQuery("women");

  useEffect(() => {
    if (menData) {
      setMenProducts(menData.product);
    }

    if (womenData) {
      setWomenProducts(womenData.product);
    }
  }, [menData, womenData]);

  const handleSortChange = () => {};

  return (
    <>
      <Nav />
      <section className="category">
        <div className="category_container">
          <div className="category_heading">
            <h1>Best of {category}'s Frangrances</h1>
            <div>
              <h4>Sort :</h4>
              <select value={sortOption} onChange={handleSortChange}>
                <option value="featured">Featured</option>
                <option value="des">Price high to low</option>
                <option value="asc">Price low to high</option>
              </select>
            </div>
          </div>

          <div className="category_inner_container">
            <div className="categorie_left">
              <h1>Filters</h1>
              <hr />
            </div>

            <div className="categorie_right">
              {category === "men"
                ? menProducts.map((item) => (
                    <Card key={item.id} product={item} />
                  ))
                : womenProducts.map((item) => (
                    <Card key={item.id} product={item} />
                  ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
