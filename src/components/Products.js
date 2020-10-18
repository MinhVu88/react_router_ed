import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums?_limit=25"),
        data = await response.json();

      console.log(data);

      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <div>
      {items.map(item => {
        return (
          <h3 key={item.id}>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </h3>
        );
      })}
      <Link to="/">
        <span>Home</span>
      </Link>
    </div>
  );
};

export default Products;
