// src/store/actions/userActions.js
import axios from "../../api/axiosconfig.jsx";
import { loadUsers,removeUser } from "../reducers/userSlice";

// ✅ Register User
export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const response = await axios.post("/users", user);
    console.log(response.data); // sirf data print
  } catch (error) {
    console.error("Register Error:", error);
  }
};


// ✅ Login User
export const asyncLoginUser = (user) => async (dispatch) => {
  try {
    const email = encodeURIComponent(user.email);
    const password = encodeURIComponent(user.password);

    const response = await axios.get(`/users?email=${email}&password=${password}`);
    const users = response.data;

    if (users.length > 0) {
      const loggedInUser = users[0];

      // ✅ Store in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

      // ✅ Redux update
      dispatch(loadUsers(loggedInUser));

      console.log("User logged in:", loggedInUser);

      return { success: true, user: loggedInUser }; // ✅ Return success
    } else {
      console.log("Invalid email or password");
      return { success: false }; // ❌ Return failure
    }
  } catch (error) {
    console.error("Login Error:", error);
    return { success: false, error };
  }
};


// ✅ Get User Details
export const asyncGetUserDetails = (email) => async (dispatch, getState) => {
  try {
    const encodedEmail = encodeURIComponent(email);
    const response = await axios.get(`/users?email=${encodedEmail}`);
    const users = response.data;

    if (users.length > 0) {
      console.log(users[0]); // sirf data print
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.error("Get User Details Error:", error);
  }
};

// ✅ Logout User
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("loggedInUser"); // localStorage clear
  dispatch(removeUser()); // Redux state me user ko null kare
  console.log("User logged out successfully");
};

export const getCurrentUser = () => (dispatch) => {
  const user = localStorage.getItem("loggedInUser");
  if (user) {
    dispatch(loadUsers(JSON.parse(user))); // ✅ direct object
    console.log("User loaded:", JSON.parse(user));
  } else {
    dispatch(loadUsers(null)); // ✅ null if not logged in
  }
};
// ✅ Update user (DB + localStorage + Redux)
export const asyncUpdateUser = (updatedData) => async (dispatch, getState) => {
  const currentUser = getState().user.user;
  if (!currentUser || !currentUser.id) return;

  try {
    // ✅ 1. Update in DB
    const response = await axios.put(`/users/${currentUser.id}`, {
      ...currentUser,
      ...updatedData,
    });

    const updatedUser = response.data;

    // ✅ 2. Update localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

    // ✅ 3. Update Redux state
    dispatch(loadUsers(updatedUser));

    console.log("User updated successfully:", updatedUser);
    return { success: true, user: updatedUser };

  } catch (error) {
    console.error("Update User Error:", error);
    return { success: false, error };
  }
};
