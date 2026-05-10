import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/CartSidebar";
import "./styles/style.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Header totalItems={cartItems.length} />
      
      <div style={{ display: "flex" }}>
        <ProductList addToCart={addToCart} />
        <CartSidebar cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;