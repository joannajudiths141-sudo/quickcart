function Header({ totalItems }) {
  return (
    <header className="header">
      <h1>QuickCart</h1>
      <p>Cart Items: {totalItems}</p>
    </header>
  );
}

export default Header;