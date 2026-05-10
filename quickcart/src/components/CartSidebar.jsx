function CartSidebar({ cartItems }) {
  return (
    <div className="cart">
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CartSidebar;