import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8081/api/auth/home", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.status !== 201) {
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">MyApp</h1>

        <div className="space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to MyApp 🚀
        </h2>

        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Build your authentication system with React, Node.js, and MySQL. Fast,
          secure, and easy to use.
        </p>

        <div className="space-x-4">
          <Link
            to="/register"
            className="px-6 py-3 bg-green-500 rounded-lg text-lg hover:bg-green-600 transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg text-lg hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full text-center py-4 text-sm text-gray-200">
        © 2026 MyApp. All rights reserved.
      </div>
    </div>
  );
};

export default HomePage;
