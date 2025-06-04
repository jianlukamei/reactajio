import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AjioContent from './components/main';
import ProductPage from './pages/product';
import Customer from './pages/customer';
import CartSummary from './pages/cart';
import CreditCardForm from './pages/payment';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      


      <Routes>
        <Route path="/" element={<AjioContent />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartSummary />} />
         <Route path="/payment" element={<CreditCardForm />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
