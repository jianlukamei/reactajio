import { Link } from "react-router-dom";
import React from 'react';

const CartSummary = () => {
  return (
  
      <div className="px-10 mt-[130px] py-10 bg-blue-100 text-gray-800">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-3/4 bg-gray-50 p-6 shadow-sm">
          <h1 className="text-xl font-serif mb-4 ml-2">Shopping Cart</h1>
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="text-sm text-left border-b border-gray-300">
                <th className="py-3">Item</th>
                <th className="py-3 text-right">Price</th>
                <th className="py-3">Qty</th>
                <th className="py-3 text-right hidden sm:table-cell">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="flex items-center gap-4 py-4">
                  <img
                    src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop"
                    alt="Watch"
                    className="w-20"
                  />
                  <p className="text-sm">
                    Nike Air Max 2024 & Men's Running Shoes
                  </p>
                </td>
                <td className="text-right align-middle pe-2 py-4">$7,600.00</td>
                <td className="py-4">
                  <input type="text" value="1" className="w-12 text-center border border-gray-300 rounded p-1" readOnly />
                </td>
                <td className="text-right align-middle py-4 hidden sm:table-cell">$7,600.00</td>
              </tr>
            </tbody>
          </table>

         
          <div className="flex flex-col gap-3 border-b border-gray-300 pb-5 mb-6">
            <h3 className="text-base font-medium">Gift options</h3>
            <p className="text-sm">Pick a paper of your choice (optional)</p>
            <label className="text-sm">
              <input type="checkbox" className="mr-2" /> Gift Receipt
            </label>
            <label className="text-sm">
              <input type="checkbox" className="mr-2" /> Printed card
            </label>
          </div>

         
          <div className="pb-6 border-b border-gray-300 mb-6">
            <h3 className="text-base font-medium mb-4">Gift Cards</h3>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="text"
                placeholder="Enter the gift card code"
                className="flex-1 border border-gray-300 rounded p-2"
              />
              <button className="bg-black text-white px-6 py-2 text-sm">ADD GIFT CARD</button>
            </div>
          </div>

        
          <div className="pt-6">
            <h3 className="text-base font-medium mb-4">Apply Discount Code</h3>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="text"
                placeholder="Enter discount code"
                className="flex-1 border border-gray-300 rounded p-2"
              />
              <button className="bg-black text-white px-6 py-2 text-sm">APPLY DISCOUNT</button>
            </div>
          </div>
        </div>

      
        <div className="w-full lg:w-1/4 border border-gray-300 p-6 text-sm">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-3 mb-4">Order Summary</h2>

          <div className="flex flex-col gap-4 mb-4">
            <h3 className="text-base font-medium">Estimate Shipping and Tax</h3>
            <label>Country</label>
            <select className="border border-gray-300 rounded p-2 text-gray-500">
              <option>United States</option>
            </select>
            <label>State/Province</label>
            <select className="border border-gray-300 rounded p-2 text-gray-500">
              <option>State/Province</option>
            </select>
            <label>Zip/Postal Code</label>
            <input type="text" placeholder="Zip/Postal Code" className="border border-gray-300 rounded p-2 text-gray-500" />
          </div>

          <div className="flex flex-col gap-3 border-b border-gray-300 pb-4 mb-4">
            <label>
              <input type="radio" name="shipping" defaultChecked className="mr-2" /> Flat Rate ($5.00)
            </label>
            <label>
              <input type="radio" name="shipping" className="mr-2" /> Best Way (Table Rate $15.00)
            </label>
          </div>

          <div className="flex flex-col gap-1 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$7,600.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between font-bold border-t border-gray-300 pt-3">
              <span>Order Total</span>
              <span>$7,605.00</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button className="bg-black text-white w-full py-3 text-sm">
              <Link to="/payment">PROCEED TO CHECKOUT</Link>
            </button>
            <span className="text-center text-xs text-gray-500">Check Out with Multiple Addresses</span>
          </div>
        </div>
      </div>

     
      <div className="bg-gray-50 py-6 flex justify-evenly text-center text-sm text-gray-600 font-light mt-10">
        {[
          {
            icon: 'https://www.svgrepo.com/show/60587/fast-delivery.svg',
            label: 'Free \nU.S. Shipping'
          },
          {
            icon: 'https://www.svgrepo.com/show/158198/return.svg',
            label: '30 DAY \n FREE RETURN'
          },
          {
            icon: 'https://static.thenounproject.com/png/1063365-200.png',
            label: 'FINANCING \nAVAILABLE'
          },
          {
            icon: 'https://pic.onlinewebfonts.com/thumbnails/icons_397927.svg',
            label: 'Authenticity\nGuaranteed'
          }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <img src={item.icon} alt={item.label} className="w-10 h-10" />
            <p>{item.label.split('\n').map((line, idx) => (<span key={idx}>{line}<br /></span>))}</p>
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default CartSummary;
