import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } =
    useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.qty * 100,
    0
  );

  if (cart.length === 0) return <h2>Cart is empty</h2>;

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <button
            onClick={() => updateQty(item.id, item.qty - 1)}
          >
            -
          </button>

          {item.qty}

          <button
            onClick={() => updateQty(item.id, item.qty + 1)}
          >
            +
          </button>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
};

export default Cart;