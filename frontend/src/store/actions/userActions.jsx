// src/store/actions/userActions.js
import axios from "../../api/axiosconfig.jsx";
import { loadUsers } from "../reducers/userSlice";

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
export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const email = encodeURIComponent(user.email);
    const password = encodeURIComponent(user.password);

    const response = await axios.get(`/users?email=${email}&password=${password}`);
    const users = response.data;

    if (users.length > 0) {
      console.log(users[0]); // sirf data print
      localStorage.setItem("loggedInUser", JSON.stringify(users[0])); // localStorage me store
    } else {
      console.log("Invalid email or password");
    }
  } catch (error) {
    console.error("Login Error:", error);
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
export const logoutUser = () => (dispatch, getState) => {
  localStorage.removeItem("loggedInUser"); // localStorage clear
  console.log("User logged out successfully");
};

// ✅ Get Current Logged-in User and load into Redux store
export const getCurrentUser = () => (dispatch) => {
  const user = localStorage.getItem("loggedInUser");
  if (user) {
    dispatch(loadUsers([JSON.parse(user)])); // Redux store me sirf loadUser
    console.log(JSON.parse(user)); // sirf data print
  } else {
    console.log("No user is currently logged in");
    dispatch(loadUsers([])); // Redux store me empty
  }
};
