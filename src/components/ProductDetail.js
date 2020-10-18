import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = ({ match }) => {
  const [item, setItem] = useState({});

  console.log(match);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${match.params.id}`),
        data = await response.json();

      console.log(data);

      setItem(data);
    };

    fetchItem();
  }, [match.params.id]);

  return (
    <div>
      <h1>Product: {item.title}</h1>
      <Link to="/">
        <span>Home</span>
      </Link>
      {" | "}
      <Link to="/products">
        <span>Products</span>
      </Link>
    </div>
  );
};

export default Product;
