import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          LotusStore
        </h1>

      
        <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-gray-900 transition">Home</a>
          <a href="#" className="hover:text-gray-900 transition">Products</a>
          <a href="#" className="hover:text-gray-900 transition">Categories</a>
          <a href="#" className="hover:text-gray-900 transition">Contact</a>
        </nav>

     
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>


      {open && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-4 text-gray-700 text-sm font-medium">
            <a href="#" className="hover:text-gray-900 transition">Home</a>
            <a href="#" className="hover:text-gray-900 transition">Products</a>
            <a href="#" className="hover:text-gray-900 transition">Categories</a>
            <a href="#" className="hover:text-gray-900 transition">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
