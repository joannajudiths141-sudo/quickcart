import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { allProducts, categories } from "../data/products";
import "../styles/pages.css";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  const categoryData = categories.find(
    (cat) => cat.id === categoryId
  );

  const filteredProducts = useMemo(() => {
    return allProducts.filter(
      (product) =>
        product.category === categoryId &&
        product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, categoryId]);

  if (!categoryData) {
    return (
      <div className="error-page">
        <h1>Category Not Found</h1>
        <Link to="/" className="back-link">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>
          {categoryData.icon} {categoryData.name}
        </h1>
        <p>Browse products in this category</p>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <input
          type="text"
          placeholder={`Search ${categoryData.name.toLowerCase()}...`}
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="search-input"
        />
      </div>

      {/* Products */}
      <div className="products-section">
        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <p>
              No products found in this category.
            </p>
            <Link to="/" className="back-link">
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
              >
                <img
                  src={product.image}
                  alt={product.name}
                />
                <h3>{product.name}</h3>
                <p className="description">
                  {product.description}
                </p>
                <p className="price">₹{product.price}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
