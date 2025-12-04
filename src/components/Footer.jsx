import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 bg-white border-t border-gray-200 text-gray-700 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">ProductStore</h2>
          <p className="text-sm mt-2 text-gray-500">
            Your trusted marketplace for quality products.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="hover:text-gray-900 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-gray-900 cursor-pointer transition">
              Products
            </li>
            <li className="hover:text-gray-900 cursor-pointer transition">
              Categories
            </li>
            <li className="hover:text-gray-900 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
          <div className="flex items-center space-x-5 mt-3 text-gray-600 text-xl">
            <FaFacebook className="hover:text-blue-600 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
            <FaGithub className="hover:text-gray-900 cursor-pointer transition" />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ProductStore — All rights reserved.
      </div>
    </footer>
  );
}
