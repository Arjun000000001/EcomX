import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  // Redux se user fetch
  const user = useSelector((state) => state.user.user);

  // NavLink styling
  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1 transition-all"
      : "text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 pb-1 transition-all";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-gray-800">
              MyBrand
            </NavLink>
          </div>

          {/* Menu */}
          <div className="flex space-x-8 items-center">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>

            <NavLink to="/products" className={navLinkClasses}>
              Products
            </NavLink>

            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>

            {/* Admin-only button */}
            {user && user.isAdmin && (
              <NavLink to="/admin/create-product" className={navLinkClasses}>
                Create Product
              </NavLink>
            )}

            {/* ✅ Settings button for all logged-in users */}
            {user && (
              <NavLink
                to={user.isAdmin ? "/admin/profile" : "/profile"}
                className={navLinkClasses}
              >
                Settings
              </NavLink>
            )}

            {/* Login button for non-logged-in users */}
            {!user && (
              <NavLink
                to="/login"
                className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-md font-medium transition"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
