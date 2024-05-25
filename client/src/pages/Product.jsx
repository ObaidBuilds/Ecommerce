import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import { useAllProductsQuery } from "../redux/api/product";
import { addToCart } from "../redux/reducers/cartSlice";
import { useDispatch } from "react-redux";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); 
  const { data } = useAllProductsQuery();
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  useEffect(() => {
    const item = products.find(
      (item) => item.title.trim().toLowerCase() === name.trim().toLowerCase()
    );

    setProductDetail(item);

    if (item && item.images.length > 0) {
      setSelectedImage(item.images[0]);
    }
  }, [name, products]);

  const handleAddCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  if (!productDetail) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <section className="details">
        <div className="detail_left">
          <div className="main_img">
            <img src={selectedImage} alt="product" />
          </div>
          <div className="side_img">
            {productDetail.images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="product"
                onClick={() => handleImageClick(item)}
              />
            ))}
          </div>
        </div>
        <div className="detail_right">
          <div className="details_right_content">
            <h1>{productDetail.title}</h1>
            <p>Per Piece</p>
            <div className="detail_prices">
              <p>Rs {productDetail.discountedPrice}</p>
              <span>Rs{productDetail.price}</span>
              <h5>
                Rs {productDetail.price - productDetail.discountedPrice}/- off
              </h5>
            </div>
            <p>
              You save Rs {productDetail.price - productDetail.discountedPrice}
              /-
            </p>
            <div className="size">
              {productDetail.quantity.map((item, index) => (
                <button key={index}>{item}</button>
              ))}
            </div>
            <div className="transaction">
              <button onClick={() => handleAddCart(productDetail)}>
                Add to cart
              </button>
              <button id="buy">Buy now</button>
            </div>

            <hr />
            <div className="details_quality">
              <div className="quality_section">
                <div>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/shopping-28/32/protection-256.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>Secure checkout</p>
                </div>
              </div>

              <div className="quality_section">
                <div>
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/miscellaneous-214-solid/128/success_quality_certificate_guarantee_award_medal_winner_warranty_ribbon-256.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>Best price</p>
                </div>
              </div>

              <div className="quality_section">
                <div>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/box-and-shipping-supplies-icons/573/Quick_Ship_Delivery-256.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>Cash on delivery</p> {/* Fixed typo in "delivery" */}
                </div>
              </div>
            </div>

            <hr />

            <div className="product_details">
              <h5>Products details</h5>
              <p>{productDetail.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
