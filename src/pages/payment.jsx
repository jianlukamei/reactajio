import React, { useState } from "react";

const CreditCardForm = () => {
  const [ccNum, setCcNum] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const ccType = ccNum.startsWith("4") ? { name: "Visa" } : ccNum.startsWith("5") ? { name: "MasterCard" } : null;

  const formatCreditCard = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
  };

  const handleCcChange = (e) => {
    setCcNum(formatCreditCard(e.target.value));
  };

  const formatExpiry = (value) => {
    const clean = value.replace(/\D/g, "").slice(0, 6);
    if (clean.length >= 3) return `${clean.slice(0, 2)} / ${clean.slice(2)}`;
    return clean;
  };

  const handleExpiryChange = (e) => {
    setExpiry(formatExpiry(e.target.value));
  };

  return (
    <section className=" md:mt-[150px] py-10">
      <div className="container mx-auto bg-blue-200 flex justify-center items-center shadow-lg rounded-lg p-8">
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-3 gap-6">
            {/* Card Number */}
            <label htmlFor="cc" className="relative block w-full col-span-3">
              <span className="text-sm font-medium text-gray-700">Card number</span>
              <p className="py-1 text-xs text-gray-600">Spaces are added for legibility based on card type.</p>
              <input
                type="text"
                name="cc"
                id="cc"
                placeholder="XXXX XXXX XXXX XXXX"
                inputMode="numeric"
                value={ccNum}
                onChange={handleCcChange}
                className="block w-full h-11 mt-2 px-3 py-2.5 text-base font-mono font-medium border rounded border-gray-300 text-gray-800 bg-white focus:ring-1 focus:ring-[#1e90ff] focus:bg-indigo-50 focus:border-[#1e90ff] shadow-inner hover:border-gray-500"
              />
              <span className="absolute top-0 right-0 text-sm font-medium text-blue-600">
                {ccType ? ccType.name : ""}
              </span>
            </label>

            {/* Expiry Date */}
            <label htmlFor="expiry" className="relative block w-full col-span-3 sm:col-span-2">
              <span className="text-sm font-medium text-gray-700">Expiration date</span>
              <p className="py-1 text-xs text-gray-600">A slash is added automatically after the month.</p>
              <input
                type="text"
                name="expiry"
                id="expiry"
                placeholder="MM / YYYY"
                maxLength="9"
                inputMode="numeric"
                value={expiry}
                onChange={handleExpiryChange}
                className="block w-full h-11 mt-2 px-3 py-2.5 text-base font-mono font-medium border rounded border-gray-300 text-gray-800 bg-white focus:ring-1 focus:ring-[#1e90ff] focus:bg-indigo-50 focus:border-[#1e90ff] shadow-inner hover:border-gray-500"
              />
            </label>

            {/* CVV */}
            <label htmlFor="cvv" className="relative block w-full col-span-3 sm:col-span-1">
              <span className="text-sm font-medium text-gray-700">CVV</span>
              <p className="py-1 text-xs text-gray-600">Enter your cvv.</p>
              <input
                type="text"
                name="cvv"
                id="cvv"
                inputMode="numeric"
                maxLength="4"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                className="block w-full h-11 mt-2 px-3 py-2.5 text-base font-mono font-medium border rounded border-gray-300 text-gray-800 bg-white focus:ring-1 focus:ring-[#1e90ff] focus:bg-indigo-50 focus:border-[#1e90ff] shadow-inner hover:border-gray-500"
              />
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreditCardForm;
