import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Shoes", category: "fashion" },
  { id: 2, name: "Phone", category: "electronics" },
];

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p>No products found</p>
      ) : (
        filtered.map((p) => (
          <div key={p.id}>
            <h3>{p.name}</h3>
            <button onClick={() => addToCart(p)}>
              Add to Cart
            </button>

            <button onClick={() =>
              navigate(`/category/${p.category}`)
            }>
              View Category
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;