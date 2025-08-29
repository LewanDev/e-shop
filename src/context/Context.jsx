import { createContext, useState } from "react";

export const dataContext = createContext();

const ContextProvider = ({ children }) => {
  const savedCart = localStorage.getItem("cart") || []
  const [cart, setCart] = useState([]);

  //setItem: LOCALSTORAGE

  //getItem

  const addProduct = (product) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quanty: productExists.quanty + 1 }
            : item 
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <dataContext.Provider value={{ cart, setCart, addProduct, clearCart }}>
        {children}
      </dataContext.Provider>
    </>
  );
};

export default ContextProvider;
