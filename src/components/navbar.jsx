import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tabTimeout = useRef();
  const tabs = ['MEN', 'WOMEN', 'KIDS', 'BEAUTY', 'HOME & KITCHEN'];

  const handleMouseEnter = (tab) => {
    clearTimeout(tabTimeout.current);
    setActiveTab(tab);
  };

  const handleMouseLeave = () => {
    tabTimeout.current = setTimeout(() => {
      setActiveTab(null);
    }, 100);
  };

  return (
    <nav className=" md:fixed top-0 left-0 w-full z-50 border-t-4 border-black bg-white">
      <section className="container mx-auto px-4 md:px-12">
        {/* Top Bar */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 text-sm font-medium py-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-[#666666] hover:text-[#4095CC] hover:underline"
          >
            Sign In / Join AJIO
          </button>
          <Link to="/Customer" className='text-[#666666] hover:text-[#4095CC] hover:underline'>Customer Care</Link>
          <a href="#" className="bg-black text-white px-4 py-2 hover:underline">Visit AJIOLUXE</a>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
              <div className="flex justify-between items-center p-4 ">
                <h3 className="text-xl font-semibold">Welcome to AJIO</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-xl">&times;</button>
              </div>
              <div className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="tel" className="block mb-1 text-sm font-medium">Enter your mobile number </label>
                    <input type="tel" id="tel" className="w-full border-b rounded p-2" required />
                  </div>
      
                  <button type="submit" className="w-24 bg-[#2F4254] text-white py-2 rounded">CONTINUE</button>
                  <p className="text-sm ">By Signing In, I agree to <a href="#" className="text-blue-600"> Terms & Conditions</a>  and <a href="#" className="text-blue-600">Privacy Policy</a></p>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Logo + Tabs + Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center py-4 gap-4">
          <Link to="/" className="text-[#2F4254] font-semibold text-4xl">AJIO</Link>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full lg:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-start gap-2 text-base font-medium">
              {tabs.map(tab => (
                <li key={tab}>
                  <button
                    onMouseEnter={() => handleMouseEnter(tab)}
                    className="tab-btn px-4 py-2 hover:text-blue-600"
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>

            {/* Search and Icons */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search AJIO"
                  className="py-1 pl-3 pr-10 border rounded-full bg-[#FFFDED] placeholder-gray-500"
                />
                <i className="fa-solid fa-magnifying-glass absolute top-2 right-3 text-gray-500 text-base"></i>
              </div>
              <a href="#" className="bg-[#2F4254] w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fa-regular fa-heart text-white"></i>
              </a>
              <a href="#" className="bg-[#2F4254] w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-bag-shopping text-white"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Tab Panel */}
        <div
          className="relative"
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => clearTimeout(tabTimeout.current)}
        >
          {tabs.map(tab => (
            <div
              key={tab}
              className={`tab-panel ${activeTab === tab ? 'block' : 'hidden'} absolute left-0 w-full p-6 bg-white border-t border-gray-700 rounded shadow`}
            >
              <div className="flex space-x-2 border-b mb-4 items-center">
                <h5 className="ps-6 text-gray-700 text-[16px]">Shop by :</h5>
                <button className="px-4 py-2 hover:text-black font-medium text-gray-600">CATEGORIES</button>
                <button className="px-4 py-2 hover:text-black font-medium text-gray-600">BRANDS</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
                {[...Array(5)].map((_, i) => (
                  <div key={i}>
                    <h4 className="font-semibold mb-2">CLOTHING {i + 1}</h4>
                    <ul className="space-y-1">
                      <li><Link to="/Product" className="hover:underline">Sneakers</Link></li>
                      <li><a href="#" className="hover:underline">All Clothing</a></li>
                      <li><a href="#" className="hover:underline">Jackets & Coats</a></li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </nav>
  );
}
