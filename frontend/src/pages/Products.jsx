import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadProducts } from "../store/actions/productActions";

const Products = () => {
  const dispatch = useDispatch();

  // ✅ Redux store se products fetch
  const products = useSelector((state) => state.product.products);

  // ✅ App load ke baad products reload karna optional
  useEffect(() => {
    if (products.length === 0) {
      dispatch(asyncLoadProducts());
    }
  }, [dispatch, products.length]);

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.length === 0 ? (
        <p className="text-center col-span-full">Loading products...</p>
      ) : (
        products.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded" />
            <h3 className="font-semibold text-lg mt-2">{p.name}</h3>
            <p className="text-gray-600">₹{p.price}</p>
            <p className="text-gray-500 text-sm">{p.category}</p>
            <p className="text-yellow-500">⭐ {p.rating}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
