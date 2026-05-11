import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { allProducts, categories } from "../data/products";
import "../styles/pages.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState(null);
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        !selectedCategory ||
        product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="home-page">
      {/* Search Bar */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Categories */}
      <div className="categories-section">
        <h3>Categories</h3>
        <div className="categories-list">
          <button
            className={`category-btn ${
              selectedCategory === null ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${
                selectedCategory === cat.id ? "active" : ""
              }`}
              onClick={() =>
                setSelectedCategory(cat.id)
              }
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="products-section">
        <h2>
          {searchTerm || selectedCategory
            ? "Filtered Products"
            : "All Products"}
        </h2>

        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <p>No products found matching your search.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory(null);
              }}
              className="reset-btn"
            >
              Clear Filters
            </button>
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
                <div className="product-actions">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <Link
                    to={`/category/${product.category}`}
                    className="view-category-link"
                  >
                    More in Category
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
