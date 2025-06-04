import React from "react";

const footerSections = [
  {
    title: "Ajio",
    links: [
      "Who We Are",
      "Join Our Team",
      "Terms & Conditions",
      "We Respect Your Privacy",
      "Fees & Payments",
      "Returns & Refunds Policy",
      "Promotions Terms & Conditions"
    ]
  },
  {
    title: "Help",
    links: [
      "Track Your Order",
      "Frequently Asked Questions",
      "Returns",
      "Cancellations",
      "Payments",
      "Customer Care",
      "How Do I Redeem My Coupon"
    ]
  },
  {
    title: "Shop By",
    links: [
      "All",
      "Men",
      "Women",
      "Kids",
      "Indie",
      "Stores",
      "New Arrivals",
      "Brand Directory",
      "Home",
      "Collections"
    ]
  },
  {
    title: "Follow Us",
    links: [
      "Facebook",
      "Instagram- AJIOlife",
      "Instagram- AJIOLUXE",
      "Twitter",
      "Pinterest"
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#2C4152]" id="footer">
      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h2 className="mb-4 text-[14px] font-[400] text-white">{section.title}</h2>
              <ul className="text-white text-[13px] space-y-2 font-light">
                {section.links.map((link, i) => (
                  <li className="relative group" key={i}>
                    <a
                      href="/"
                      className="hover:underline text-[12px] font-[400]"
                    >
                      {link}
                    </a>
                    <div className="absolute left-1/2 top-full mt-1 transform -translate-x-1/2 z-10 hidden group-hover:block px-2 py-1 text-[12px] font-light text-black bg-white whitespace-nowrap rounded shadow-md">
                      {link}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-[14px] font-[400]">Payment methods</h2>
          <h2 className="text-white text-[14px] font-[400]">Secure Systems</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
          <ul className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
            <li>
              <h5 className="text-white font-normal text-sm text-center md:text-left">
                Net
                <span className="ml-2 text-[#2C4152] rounded bg-white px-2">Banking</span>
              </h5>
            </li>
          {['verified.png', 'mastercard.png', 'cashondelivery.png', 'jiomoney.png'].map((src, i) => (
  <li key={i}>
    <img
      src={`/assets/images/${src}`}
      alt={src.split('.')[0]}
      className="w-20 h-12 object-contain"
    />
  </li>
))}

<img src="/assets/images/right.png" alt="SSL" className="w-[90px] h-[60px] object-contain" />
          </ul>

          <ul className="flex justify-center md:justify-end">
            <li>
              <img
                src="./assets/images/right.png"
                alt="SSL"
                className="w-[90px] h-[60px] object-contain"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}