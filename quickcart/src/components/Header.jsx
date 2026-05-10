import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2 onClick={() => navigate("/")}>QuickCart</h2>

      <button onClick={() => navigate("/cart")}>
        Cart ({cart.length})
      </button>
    </div>
  );
};

export default Header;