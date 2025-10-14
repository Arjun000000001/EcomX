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
    const newProduct = { ...product, id: nanoid() };
    const response = await axios.post("/products", newProduct);

    if (response.status === 201 || response.status === 200) {
      toast.success("✅ Product added successfully!");
      console.log("Product created:", response.data);
      dispatch(asyncLoadProducts());
    } else {
      toast.error("❌ Failed to create product");
    }
  } catch (error) {
    console.error("Create Product Error:", error);
    toast.error("❌ Something went wrong!");
  }
};

// ✅ Update Existing Product (PATCH)
export const asyncUpdateProduct = (id, updatedData) => async (dispatch) => {
  try {
    const response = await axios.patch(`/products/${id}`, updatedData);

    if (response.status === 200) {
      toast.success("✅ Product updated successfully!");
      console.log("Product updated:", response.data);

      // Reload products so UI updates
      dispatch(asyncLoadProducts());
    } else {
      toast.error("❌ Failed to update product");
    }
  } catch (error) {
    console.error("Update Product Error:", error);
    toast.error("❌ Something went wrong while updating!");
  }
};
// ✅ Delete Product
export const asyncDeleteProduct = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/products/${id}`);

    if (response.status === 200 || response.status === 204) {
      toast.success("✅ Product deleted successfully!");
      console.log("Product deleted:", id);

      // Reload products to update UI
      dispatch(asyncLoadProducts());
    } else {
      toast.error("❌ Failed to delete product");
    }
  } catch (error) {
    console.error("Delete Product Error:", error);
    toast.error("❌ Something went wrong while deleting!");
  }
};
