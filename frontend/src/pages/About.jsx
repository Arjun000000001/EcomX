import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          About EcomX
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          EcomX is your ultimate destination for quality products, amazing deals,
          and a seamless online shopping experience. Our mission is to bring
          convenience, trust, and joy to every customer.
        </p>
      </div>

      {/* Features / Mission Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Feature 1 */}
        <div className="bg-white shadow-xl rounded-2xl p-8 hover:scale-[1.05] transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To provide a seamless and enjoyable online shopping experience with
            top-quality products, fast delivery, and exceptional customer support.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white shadow-xl rounded-2xl p-8 hover:scale-[1.05] transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To become the most trusted and innovative e-commerce platform,
            empowering customers to shop smarter and live better.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white shadow-xl rounded-2xl p-8 hover:scale-[1.05] transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">
            Our Values
          </h3>
          <p className="text-gray-600">
            Trust, Quality, Innovation, Customer Satisfaction, and Continuous
            Improvement – we live by these principles in everything we do.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {["Arjun", "Lakshay", "Love", "Sneha"].map((name, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-200 flex items-center justify-center text-2xl font-bold text-blue-600">
                {name[0]}
              </div>
              <h4 className="text-xl font-semibold text-gray-800">{name}</h4>
              <p className="text-gray-500 text-sm mt-1">Team Member</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
