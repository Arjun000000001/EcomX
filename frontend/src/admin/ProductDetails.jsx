import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { asyncUpdateProduct, asyncLoadProducts } from "../store/actions/productActions"; // ✅ Import update action
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);

  const product = products.find((p) => p.id === id);

  const [editData, setEditData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    rating: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    if (product) setEditData(product);
  }, [product]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-gray-600 text-lg">
        Product not found 😕
      </div>
    );
  }

  const handleChange = (e) =>
    setEditData({ ...editData, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await dispatch(asyncUpdateProduct(id, editData)); // Dispatch update
      await dispatch(asyncLoadProducts()); // Refresh product list
      toast.success("✅ Product updated successfully!");
      navigate("/products"); // Optional: redirect back to products page
    } catch (err) {
      toast.error("❌ Failed to update product");
      console.error(err);
    }
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 flex flex-col items-center">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 px-4 md:px-0">
        {/* Product Preview */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center transform hover:scale-[1.03] transition-all duration-300">
          <img
            src={editData.image || "https://via.placeholder.com/300"}
            alt={editData.name}
            className="w-80 h-80 object-cover rounded-xl shadow-md border border-gray-200 mb-5"
          />
          <h2 className="text-3xl font-semibold text-gray-800">{editData.name}</h2>
          <p className="text-gray-600 mt-2 text-center">{editData.description}</p>
          <div className="mt-4 space-y-1 text-center">
            <p className="text-2xl font-bold text-blue-600">₹{editData.price}</p>
            <p className="text-yellow-500">⭐ {editData.rating}</p>
            <p className="text-gray-700">
              Category: <span className="font-medium">{editData.category}</span>
            </p>
            <p
              className={`${
                editData.stock > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {editData.stock > 0
                ? `In Stock (${editData.stock})`
                : "Out of Stock"}
            </p>
          </div>
        </div>

        {/* Pre-Filled Form (With Update) */}
        <div className="flex-1 bg-white shadow-2xl rounded-2xl p-8 border border-gray-100 overflow-y-auto max-h-[90vh] relative">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">
            ✏️ Edit Product
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Make changes and update product info in <span className="text-blue-600 font-semibold">EcomX</span>
          </p>

          <form onSubmit={handleUpdate} className="space-y-4">
            {fields.map((f) => (
              <div key={f.name} className="flex flex-col">
                <label className="text-gray-700 text-sm font-medium mb-1">{f.label}</label>
                <input
                  {...f}
                  value={editData[f.name]}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm"
                />
              </div>
            ))}

            <div className="flex flex-col">
              <label className="text-gray-700 text-sm font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={editData.description}
                onChange={handleChange}
                rows={4}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 shadow-md"
            >
              🔄 Update Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
