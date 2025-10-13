import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadProducts } from "../store/actions/productActions";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(asyncLoadProducts());
    }
  }, [dispatch, products.length]);

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.length === 0 ? (
        <p className="text-center col-span-full text-gray-500 text-lg">
          Loading products...
        </p>
      ) : (
        products.map((p) => (
          <div
            key={p.id}
            className="border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 bg-white"
          >
            {/* Product Image */}
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-56 object-cover"
            />

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">{p.name}</h3>
              <p className="text-gray-600 mt-1 text-sm">{p.description}</p>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-blue-600 font-bold text-lg">
                  ₹{p.price}
                </span>
                <span className="text-yellow-500 text-sm">⭐ {p.rating}</span>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Category: <span className="font-medium">{p.category}</span>
              </p>
              <p
                className={`mt-1 text-sm ${
                  p.stock > 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {p.stock > 0 ? `In Stock (${p.stock})` : "Out of Stock"}
              </p>

              {/* UI Add to Cart */}
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
