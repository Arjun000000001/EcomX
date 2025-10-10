// src/store/actions/productActions.js
import axios from "../../api/axiosconfig.jsx";
import { loadProducts } from "../reducers/productSlice";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

// ✅ Load All Products
export const asyncLoadProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("/products");
    dispatch(loadProducts(response.data));
    console.log("Products loaded:", response.data);
  } catch (error) {
    console.error("Load Products Error:", error);
    toast.error("❌ Failed to load products");
  }
};

// ✅ Create New Product & Reload Products
export const asyncCreateProduct = (product) => async (dispatch) => {
  try {
    const newProduct = { ...product, id: nanoid() }; // unique ID
    const response = await axios.post("/products", newProduct);

    if (response.status === 201 || response.status === 200) {
      toast.success(" Product added successfully!");
      console.log("Product created:", response.data);

      // ✅ Minimal change: Reload all products after creation
      dispatch(asyncLoadProducts());
    } else {
      toast.error("❌ Failed to create product");
    }
  } catch (error) {
    console.error("Create Product Error:", error);
    toast.error("❌ Something went wrong!");
  }
};
