import { Link } from "react-router-dom";
import { useState } from 'react';


export default function ProductPage() {
  const [mainImage, setMainImage] = useState(
    'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop'
  );
  const [quantity, setQuantity] = useState(1);

  const thumbnails = [
    'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop'
  ];

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <section className=" md:mt-[140px]">

 <main className="container mx-auto px-4 md:px-12 py-8 
 
 ">
         
         
      <div className="grid md:grid-cols-2 gap-8">
     
        <div className="space-y-4">
          <div className="rounded shadow flex items-center justify-center bg-white">
            <img src={mainImage} alt="Nike Air Max 2024" className="object-contain max-h-full max-w-full" />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`thumbnail-${index}`}
                className="rounded-lg hover:opacity-75 cursor-pointer"
                onClick={() => setMainImage(thumb)}
              />
            ))}
          </div>
        </div>

     
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Nike Air Max 2024</h1>
            <p className="text-gray-500">Men's Running Shoes</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400">
              {[...Array(4)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span className="text-gray-600">(128 Reviews)</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-gray-900">$179.99</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Select Size</h3>
            <div className="grid grid-cols-4 gap-2">
              {["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11", "US 11.5"].map((size, i) => (
                <button key={i} className="border py-2 rounded-md hover:border-black">{size}</button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quantity</h3>
            <div className="flex items-center space-x-2">
              <button onClick={decrement} className="border p-2 rounded-md hover:border-black">
                <i className="fas fa-minus"></i>
              </button>
              <input
                type="num"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 text-center border p-2 rounded-md"
              />
              <button onClick={increment} className="border p-2 rounded-md hover:border-black">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <button className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800">
               <Link to="/cart">Add to cart</Link>
            </button>
            <button className="w-full border border-black py-4 rounded-full hover:bg-gray-100">
              Favorite <i className="far fa-heart ml-2"></i>
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Product Description</h3>
            <p className="text-gray-600">
              Experience the future of comfort with the Nike Air Max 2024. Featuring innovative cushioning
              technology, breathable mesh upper, and responsive foam midsole...
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Dynamic Air cushioning system</li>
              <li>Breathable mesh upper with Flywire cables</li>
              <li>Foam midsole for responsive cushioning</li>
              <li>Rubber outsole for durable traction</li>
              <li>Reflective details for visibility in low light</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {[{
            name: 'Michael R.',
            time: '2 days ago',
            review: 'These shoes are amazing! The comfort level is unmatched...',
            stars: 5
          }, {
            name: 'Sarah L.',
            time: '1 week ago',
            review: 'Great shoes overall. The cushioning is perfect...',
            stars: 4
          }].map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="flex text-yellow-400 mb-1">
                    {[...Array(r.stars)].map((_, j) => (
                      <i key={j} className="fas fa-star"></i>
                    ))}
                    {[...Array(5 - r.stars)].map((_, j) => (
                      <i key={j} className="far fa-star"></i>
                    ))}
                  </div>
                  <h3 className="font-semibold">{r.name}</h3>
                </div>
                <span className="text-gray-500">{r.time}</span>
              </div>
              <p className="text-gray-600">{r.review}</p>
            </div>
          ))}
        </div>
      </section>
  
    </main>
       
         </section>
   
  );
}
