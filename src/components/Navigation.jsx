import { Link, useLocation } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "../styles/navigation.css";

export default function Navigation() {
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🛒 QuickCart
        </Link>

        <div className="nav-menu">
          <Link
            to="/"
            className={`nav-link ${isActive("/")}`}
          >
            Home
          </Link>

          <Link
            to="/category/electronics"
            className={`nav-link ${isActive(
              "/category/electronics"
            )}`}
          >
            Electronics
          </Link>

          <Link
            to="/category/headphones"
            className={`nav-link ${isActive(
              "/category/headphones"
            )}`}
          >
            Headphones
          </Link>

          <Link
            to="/category/wearables"
            className={`nav-link ${isActive(
              "/category/wearables"
            )}`}
          >
            Wearables
          </Link>

          <Link
            to="/category/tablets"
            className={`nav-link ${isActive(
              "/category/tablets"
            )}`}
          >
            Tablets
          </Link>

          <Link
            to="/cart"
            className={`nav-link cart-link ${isActive(
              "/cart"
            )}`}
          >
            Cart ({totalItems})
          </Link>
        </div>
      </div>
    </nav>
  );
}
