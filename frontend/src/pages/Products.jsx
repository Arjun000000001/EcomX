
import React from "react";

const Products = () => {
  // Sample product data (later you can fetch from API)
  const productList = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Smartphone", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products Page</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            {product.name} — ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
