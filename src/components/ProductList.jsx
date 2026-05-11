function ProductList({ products, addToCart }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            width: "220px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            width="200"
            height="200"
          />

          <h3>{product.name}</h3>

          <p>₹{product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;