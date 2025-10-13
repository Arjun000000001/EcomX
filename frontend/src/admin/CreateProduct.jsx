import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncCreateProduct } from "../store/actions/productActions";
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
    dispatch(asyncCreateProduct(data));
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
    { label: "Product Name", name: "name", type: "text" },
    { label: "Price (₹)", name: "price", type: "number" },
    { label: "Category", name: "category", type: "text" },
    { label: "Stock", name: "stock", type: "number" },
    { label: "Rating", name: "rating", type: "number", step: 0.1 },
    { label: "Image URL", name: "image", type: "text" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-12">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 border border-gray-100 relative overflow-hidden">
        {/* Light glow effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-28 h-28 bg-blue-100 opacity-40 rounded-full blur-2xl"></div>

        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          🛍️ Add New Product
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          Manage your store effortlessly with <span className="text-blue-600 font-semibold">EcomX</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          {fields.map((f) => (
            <div key={f.name} className="flex flex-col">
              <label className="text-gray-700 text-sm font-medium mb-1">
                {f.label}
              </label>
              <input
                {...f}
                value={data[f.name]}
                onChange={handleChange}
                placeholder={f.label}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm"
              />
            </div>
          ))}

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
              placeholder="Write a short description..."
              rows={3}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm"
            />
          </div>

          {/* Preview Image */}
          {data.image && (
            <div className="flex justify-center my-3">
              <img
                src={data.image}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg shadow-md border border-gray-200"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 shadow-md"
          >
           Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
