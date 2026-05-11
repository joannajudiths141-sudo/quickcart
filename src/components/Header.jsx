function Header({ totalItems, setIsCartOpen }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: "#222",
        color: "white",
      }}
    >
      <h2>QuickCart</h2>

      <button onClick={() => setIsCartOpen(true)}>
        Cart ({totalItems})
      </button>
    </div>
  );
}

export default Header;