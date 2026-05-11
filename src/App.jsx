import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/CartSidebar";

function App() {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 79999,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      id: 2,
      name: "Headphones",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ADD TO CART
  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  // INCREASE
  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
  };

  // DECREASE
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  };

  // REMOVE
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Header
        totalItems={totalItems}
        setIsCartOpen={setIsCartOpen}
      />

      <ProductList
        products={products}
        addToCart={addToCart}
      />

      <CartSidebar
        cartItems={cartItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default App;