import Navbar from "../components/Navbar";
import { products } from "../data/products";

function Home() {
  return (
    <>
      <Navbar />

      <h1>All Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </>
  );
}

export default Home;