import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncUpdateUser, getCurrentUser } from "../store/actions/userActions";
import { loadUsers } from "../store/reducers/userSlice"; // ✅ slice se import
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user); // logged-in user

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  // Load user on mount
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  // Populate form when user loads
  useEffect(() => {
    if (user) {
      setFormData({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        phone: user.phone,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const result = await dispatch(asyncUpdateUser(formData));
    if (result.success) {
      toast.success(" Profile updated successfully!");
    } else {
      toast.error("❌ Failed to update profile");
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      localStorage.removeItem("loggedInUser"); // remove from localStorage
      dispatch(loadUsers(null)); // Redux state clear
      toast.success("🗑️ Profile deleted successfully!");
      navigate("/"); // redirect home
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-gray-600 text-lg">
        Please login to view your profile.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">👤 Your Profile</h2>

        <div className="flex flex-col gap-4">
          {["firstname", "lastname", "email", "password", "phone"].map((field) => (
            <div key={field}>
              <label className="text-gray-700 font-medium">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
          ))}

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleUpdate}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
            >
              🔄 Update
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
