import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ link, title ,image}) => {
  return (
    <Link to={link}>
      <div className="category_card">
        <img
          src={image}
          alt={title}
        />
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
