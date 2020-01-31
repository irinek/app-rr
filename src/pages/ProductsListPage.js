import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductListPage.css";

const products = ["car", "bike", "motorcycle"];

const ProductsListPage = () => {
  const list = products.map(product => (
    <li key={product}>
      <Link to={`/products/${product}`}>{product}</Link>
    </li>
  ));

  return (
    <div className="products">
      <ul>{list}</ul>
    </div>
  );
};

export default ProductsListPage;
