import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductList({ addToCart }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </div>
  );
}

export default ProductList;