import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncCreateProduct } from "../store/actions/productActions"; // ✅ Redux action
import { Toaster } from "react-hot-toast";

const CreateProduct = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    rating: "",
    image: "",
    description: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncCreateProduct(data)); // ✅ Dispatch Redux action
    setData({
      name: "",
      price: "",
      category: "",
      stock: "",
      rating: "",
      image: "",
      description: "",
    });
  };

  const fields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Price (₹)", name: "price", type: "number" },
    { label: "Category", name: "category", type: "text" },
    { label: "Stock", name: "stock", type: "number" },
    { label: "Rating", name: "rating", type: "number", step: 0.1 },
    { label: "Image URL", name: "image", type: "text" },
  ];

  return (
    <div className="max-w-md mx-auto p-5 bg-white shadow-lg rounded-xl mt-12">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-5">
        Create Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        {fields.map((f) => (
          <input
            key={f.name}
            {...f}
            value={data[f.name]}
            onChange={handleChange}
            placeholder={f.label}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ))}
        <textarea
          name="description"
          value={data.description}
          onChange={handleChange}
          placeholder="Description"
          rows={2}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded-md text-sm hover:bg-blue-600 transition">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
