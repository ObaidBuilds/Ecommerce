import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import CategoryCard from "../components/CategoryCard";
import MyCarousel from "../components/Carousel";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { useFeaturedProductsQuery } from "../redux/api/product";

const Home = () => {
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);

  const { data: menData } = useFeaturedProductsQuery("men");
  const { data: womenData } = useFeaturedProductsQuery("women");
  
  useEffect(() => {
    if (menData) {
      setMenProducts(menData.product);
    }

    if (womenData) {
      setWomenProducts(womenData.product);
    }
  }, [menData, womenData]);

  return (
    <>
      <Nav />
      <main id="home">
        {/* <MyCarousel /> */}
        <img
          src="https://img.freepik.com/free-photo/front-view-expensive-perfume-bright-table-fragnance-branch_140725-148383.jpg?t=st=1709870870~exp=1709874470~hmac=85c77a60780e3225dbe34e00aae1d5841729a9a671e1fab15a9d918548cc1a3a&w=740"
          alt=""
        />
      </main>
      <section className="categories">
        <div className="category_left">
          <h1>Categories</h1>
        </div>
        <div className="category_right">
          <CategoryCard
            link="/collection/men"
            title="Men's Fragrances"
            image="https://img.freepik.com/free-photo/front-view-expensive-perfume-bright-table-fragnance-branch_140725-148383.jpg?t=st=1709870870~exp=1709874470~hmac=85c77a60780e3225dbe34e00aae1d5841729a9a671e1fab15a9d918548cc1a3a&w=740"
          />
          <CategoryCard
            link="/collection/women"
            title="Women's Fragrances"
            image="https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcmZ1bWVzfGVufDB8fDB8fHww"
          />
        </div>
      </section>

      <section className="feature men_feature">
        <h1>Men's Fragrances</h1>
        <div className="feature_container">
          {menProducts &&
            menProducts.map((item) => <Card key={item._id} product={item} />)}
        </div>
        <div className="btn_div">
          <Link to={"/collection/men"}>
            <button className="btn">View all</button>
          </Link>
        </div>
      </section>

      <section className="feature">
        <h1>Women's Fragrances</h1>
        <div className="feature_container">
          {womenProducts &&
            womenProducts.map((item) => <Card key={item._id} product={item} />)}
        </div>
        <div className="btn_div">
          <Link to={"/collection/women"}>
            <button className="btn">View all</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
