import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import PayButton from './payment/PayButton'
import VerifyPage from  './payment/VerifyPage'

import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Sign from "./user/Sign";
import Login from "./user/Login";
import ForgotPassword from "./user/ForgotPassword";
import ProductDetail from "./product/ProductDetail/ProductDetail";
import Checkout from "./components/Checkout";
import KidsProducts from "./kids/KidsProducts";
import ManProducts from "./man/ManProducts";
import WomanProducts from "./woman/WomanProducts";
import DiscountProduct from "./discount/DiscountProduct";

function App() {
  return (
    <UserProvider>
       <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/kidsproducts" element={<KidsProducts />} />
          <Route path="/manProducts" element={<ManProducts />} />
          <Route path="/womanProducts" element={<WomanProducts />} />
          <Route path="/discountProduct" element={<DiscountProduct />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/PayButton" element={<PayButton />} />
          <Route path="/VerifyPage" element={<VerifyPage />} />


        </Routes>
      </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
