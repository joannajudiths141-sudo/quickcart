function CartSidebar({
  cartItems,
  isCartOpen,
  setIsCartOpen,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  totalPrice,
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: isCartOpen ? 0 : "-400px",
        width: "350px",
        height: "100vh",
        backgroundColor: "white",
        padding: "20px",
        transition: "0.3s",
        overflowY: "auto",
        boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
      }}
    >
      <button onClick={() => setIsCartOpen(false)}>
        Close
      </button>

      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid gray",
                marginBottom: "15px",
                paddingBottom: "10px",
              }}
            >
              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <button
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>

              <button
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>

              <button
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{totalPrice}</h3>
        </>
      )}
    </div>
  );
}

export default CartSidebar;