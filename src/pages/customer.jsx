import React, { useState } from "react";
import { Link } from "react-router-dom";

const Customer = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      console.log("Searching for:", searchInput);
    }
  };

  return (
    <>
      <section className="py-10 mt-[150px]">
        <div className="container mx-auto px-4 md:px-12">
          <div className="text-center">
            <h2 className="text-[16px] text-black font-bold pb-6">
              Need help with your recent orders?
            </h2>
            <button className="text-white bg-[#866528] text-[16px] font-normal py-3 px-12 md:px-[110px]">
              LOGIN
            </button>
          </div>

          <h2 className="text-[18px] text-center mt-20 font-semibold">
            Frequently Asked Questions
          </h2>

          <form onSubmit={handleSearch} className="w-full mx-auto mt-6">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
              <div className="flex items-center flex-1 px-4">
                <span className="fa fa-search text-gray-500 mr-3 text-sm"></span>
                <input
                  type="text"
                  id="faqSearch"
                  placeholder="Search for topics or questions"
                  className="w-full py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                  value={searchInput}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                id="searchBtn"
                className={`text-white text-sm px-6 py-2 h-full font-semibold transition-all duration-300 ${
                  searchInput.trim()
                    ? "bg-[#866528] cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!searchInput.trim()}
              >
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-gray-200">
        <div className="container mx-auto px-4 md:px-[120px]">
          <div className="bg-gray-200 mt-4 py-4">
            <ul className="flex flex-wrap justify-between gap-6 text-center text-sm text-gray-700">
              <li className="flex flex-col items-center space-y-4 p-2">
                <i className="fa-solid fa-bag-shopping text-[50px]"></i>
                <h2 className="text-[18px] text-black font-bold">EASY EXCHANGE</h2>
              </li>
              <li className="flex flex-col items-center space-y-4 p-2">
                <i className="fa-solid fa-hand-holding-heart text-[50px]"></i>
                <h2 className="text-[18px] text-black font-bold">100% HANDPICKED</h2>
              </li>
              <li className="flex flex-col items-center space-y-4 p-2">
                <i className="fa-solid fa-circle-check text-[50px]"></i>
                <h2 className="text-[18px] text-black font-bold">ASSURED QUALITY</h2>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customer;
