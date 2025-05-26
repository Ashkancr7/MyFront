import React, { createContext, useState, useEffect, useContext } from "react";

// ایجاد Context برای سبد خرید
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // هنگام بارگذاری صفحه، سبد خرید را از localStorage بازیابی می‌کنیم
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        // تبدیل داده‌ها از رشته به آرایه
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart); // اگر داده‌ها آرایه هستند، آنها را به سبد خرید اختصاص می‌دهیم
        } else {
          // اگر داده‌ها آرایه نباشند، آرایه خالی قرار می‌دهیم
          setCart([]);
        }
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        setCart([]); // در صورت بروز خطا، سبد خرید را خالی می‌کنیم
      }
    }
  }, []);

  // اضافه کردن کالا به سبد خرید و ذخیره در localStorage
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // ذخیره سبد خرید در localStorage
      return updatedCart;
    });
  };

  // حذف کالا از سبد خرید و ذخیره مجدد در localStorage
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // ذخیره مجدد سبد خرید در localStorage
      return updatedCart;
    });
  };

  // خالی کردن سبد خرید و ذخیره در localStorage
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // حذف سبد خرید از localStorage
  };
  const totalItems = cart.reduce((sum, item) => cart.length , 0);


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart,totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

// یک hook سفارشی برای دسترسی راحت به context
export const useCart = () => useContext(CartContext);
