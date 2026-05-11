import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import "./App.css";

function AppContent() {
  return (
    <>
      <Navigation />
      <Header />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/category/:categoryId"
            element={<CategoryPage />}
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;