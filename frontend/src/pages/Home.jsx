import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">EcomX</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Discover premium products, unbeatable prices, and a smooth shopping
          experience — all in one place.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Shop Now
          </Link>
          <a
            href="#about"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
          >
            Learn More
          </a>
        </div>

        {/* Hero Image */}
        <div className="mt-12 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/shopping-concept-illustration_114360-1228.jpg"
            alt="EcomX Shopping"
            className="w-full max-w-3xl rounded-2xl shadow-md"
          />
        </div>
      </section>

      {/* Featured Section */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-16 text-center border-t border-gray-200"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-blue-600">EcomX</span>?
        </h2>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          At EcomX, we’re not just another online store. We’re a shopping
          destination built with passion, speed, and trust.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2769/2769390.png"
              alt="Quality"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-600 text-sm">
              Only the best products, carefully selected for you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/679/679821.png"
              alt="Fast Delivery"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Get your order at lightning speed, anywhere in India.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/484/484167.png"
              alt="Support"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600 text-sm">
              We’re here for you, anytime you need help or advice.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-center text-white mt-10">
        <h2 className="text-3xl font-bold mb-4">
          Join the <span className="text-yellow-300">EcomX</span> Revolution 🚀
        </h2>
        <p className="text-lg mb-6">
          Experience the future of online shopping — simple, stylish, and smart.
        </p>
        <Link
          to="/products"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
        >
          Start Shopping
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t mt-10">
        © {new Date().getFullYear()} EcomX — Built with ❤️ by Arjun
      </footer>
    </div>
  );
};

export default Home;
