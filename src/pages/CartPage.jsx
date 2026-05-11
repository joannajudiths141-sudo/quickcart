import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "../styles/pages.css";

export default function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="empty-cart-state">
          <p>Your cart is empty</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-container">
        {/* Cart Items */}
        <div className="cart-items-section">
          <h2>Items ({cartItems.length})</h2>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="item-image"
                />

                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">
                    ₹{item.price}
                  </p>
                  <p className="item-subtotal">
                    Subtotal: ₹
                    {item.price * item.quantity}
                  </p>
                </div>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    className="qty-btn"
                  >
                    −
                  </button>
                  <span className="quantity">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                    className="qty-btn"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Items:</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="summary-row">
            <span>Total Quantity:</span>
            <span>
              {cartItems.reduce(
                (sum, item) => sum + item.quantity,
                0
              )}
            </span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total">
            <span>Total Price:</span>
            <span>₹{totalPrice}</span>
          </div>
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
