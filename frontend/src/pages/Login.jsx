import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoginUser } from "../store/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Get user from Redux (if already logged in)
  const currentUser = useSelector((state) => state.user.users);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // ✅ Redirect to /products if already logged in (even after refresh)
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (currentUser || savedUser) {
      navigate("/products");
    }
  }, [currentUser, navigate]);

  const onSubmit = async (data) => {
    const formData = {
      id: nanoid(),
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe || false,
    };

    // ✅ Dispatch login action
    const res = await dispatch(asyncLoginUser(formData));

    // ✅ Navigate on success
    if (res?.success) {
      navigate("/products");
    } else {
      alert("Invalid email or password!");
    }

    reset();
  };

  // ✅ Hide login form if user is already logged in
  if (currentUser || localStorage.getItem("loggedInUser")) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "32px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Login
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          {/* Email */}
          <div>
            <label
              style={{
                fontWeight: "500",
                marginBottom: "4px",
                display: "block",
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Email is invalid" },
              })}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: errors.email ? "1px solid red" : "1px solid #ccc",
                outline: "none",
              }}
            />
            {errors.email && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              style={{
                fontWeight: "500",
                marginBottom: "4px",
                display: "block",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: errors.password ? "1px solid red" : "1px solid #ccc",
                outline: "none",
              }}
            />
            {errors.password && (
              <span style={{ color: "red", fontSize: "12px" }}>
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Remember Me */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              {...register("rememberMe")}
              style={{ width: "16px", height: "16px" }}
            />
            <label style={{ fontSize: "14px" }}>Remember me</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              background: "#3b82f6",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>

          <div style={{ textAlign: "center", marginTop: "8px" }}>
            <Link
              to="/forgot-password"
              style={{
                fontSize: "14px",
                color: "#3b82f6",
                textDecoration: "underline",
              }}
            >
              Forgot Password?
            </Link>
          </div>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "16px",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{ color: "#3b82f6", textDecoration: "underline" }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
