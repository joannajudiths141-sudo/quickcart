# QuickCart - Part 3: Multi-page SPA with Context API

## Overview

QuickCart Part 3 is a complete, production-ready e-commerce single-page application built with React. It demonstrates modern React patterns including React Router for navigation, Context API for state management, and localStorage for data persistence.

## Features Implemented

### 🛣️ Multi-Page Navigation
- **React Router v6**: Implements dynamic client-side routing without page reloads
- **Routes**:
  - `/` - Home page with all products
  - `/category/:categoryId` - Category-specific product pages
  - `/cart` - Dedicated shopping cart page
- **Sticky Navigation Bar**: Persistent header with active link highlighting

### 🌐 Global State Management
- **Context API**: Centralized cart state management
- **Custom Hook (`useCart`)**: Clean component integration without prop drilling
- **Immutable Updates**: All state updates follow immutable patterns
- **No Props Drilling**: All components access cart state through custom hook

### 💾 Data Persistence
- **localStorage Integration**: Cart data persists across browser sessions
- **Automatic Hydration**: Cart data automatically loaded on app startup
- **JSON Serialization**: Safe data storage and retrieval

### 🔍 Search & Filtering
- **Real-time Search**: Filter products by name as you type
- **Category Filtering**: Browse products by category
- **Combined Filtering**: Search within selected category
- **Empty State Handling**: Graceful messages when no results found

### 🛒 Shopping Cart
- **Add to Cart**: Add products from any page
- **Quantity Management**: Increase/decrease quantities
- **Remove Items**: Delete items from cart
- **Order Summary**: Sticky summary showing total items and price
- **Empty Cart State**: Clear messaging when no items in cart

### 📱 Responsive Design
- **Mobile First**: Optimized for all screen sizes
- **Desktop**: Full-featured layout with grid products
- **Tablet**: Balanced view with responsive product cards
- **Mobile**: Single-column layout for easy scrolling
- **Touch Friendly**: Large buttons and controls for mobile

### 📦 Product Catalog
- **12 Products**: Electronics, Headphones, Wearables, Tablets
- **4 Categories**: Organized product browsing
- **Product Details**: Name, price, description, high-quality images
- **Product Links**: Quick navigation to category pages

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx              # Main page with products and filters
│   ├── CategoryPage.jsx       # Category-specific products
│   └── CartPage.jsx          # Shopping cart page
├── components/
│   ├── Navigation.jsx        # Main navigation bar
│   ├── Header.jsx            # Welcome header
│   ├── ProductList.jsx       # Legacy component
│   └── CartSidebar.jsx       # Legacy component
├── context/
│   └── CartContext.jsx       # Global cart state and provider
├── hooks/
│   └── useCart.js            # Custom hook for cart access
├── data/
│   └── products.js           # Product catalog and categories
├── styles/
│   ├── app.css              # Main app styles
│   ├── navigation.css        # Navigation styles
│   └── pages.css            # Page-specific styles
├── App.jsx                   # Main app with router setup
└── main.jsx                  # Entry point
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/joannajudiths141-sudo/quickcart.git
cd quickcart

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Visit http://localhost:5173 (or the URL shown in terminal)
```

## How to Use

### Browsing Products
1. **Home Page**: View all products with search and category filters
2. **Search**: Type in search box to filter products by name
3. **Filter by Category**: Click category buttons to filter
4. **View Category**: Click "More in Category" on any product

### Shopping
1. **Add to Cart**: Click "Add to Cart" button on any product
2. **View Cart**: Click "Cart" button in navigation
3. **Manage Quantity**: Use +/- buttons to adjust quantities
4. **Remove Items**: Click "Remove" to delete items
5. **Continue Shopping**: Click "Continue Shopping" to browse more

### Data Persistence
- Cart data is automatically saved to localStorage
- Close and reopen the browser - your cart items remain!
- Clear browser data to reset the cart

## Technical Implementation

### Context API Structure

```javascript
// CartContext provides:
- cartItems: Array of items in cart
- totalItems: Total quantity of items
- totalPrice: Total cost of all items
- addToCart(product): Add or update product quantity
- increaseQuantity(id): Increase item quantity
- decreaseQuantity(id): Decrease item quantity
- removeItem(id): Remove item from cart
- clearCart(): Empty the cart
```

### Custom Hook Usage

```javascript
import { useCart } from '../hooks/useCart';

function MyComponent() {
  const { 
    cartItems, 
    addToCart, 
    totalPrice,
    // ... other methods
  } = useCart();
  
  // Use cart state and methods
}
```

### localStorage Integration

```javascript
// Automatic save on cart change
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);

// Automatic load on app start
const [cartItems] = useState(() => {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : [];
});
```

## Features Breakdown

### 1. React Router
- **Dynamic Routes**: Categories use URL parameters
- **Link Navigation**: All navigation happens through `<Link>` components
- **No Page Reload**: SPA behavior with client-side routing
- **Active Link Styling**: Shows which page user is on

### 2. Context API
- **Provider**: Wraps entire app in CartProvider
- **Consumer**: Components use useCart hook to access state
- **Actions**: All cart operations as context methods
- **Scalability**: Easy to add more global state later

### 3. localStorage
- **Persistence**: Cart survives page refresh
- **Hydration**: Load saved cart on app startup
- **Clean Data**: Automatic JSON serialization
- **User Experience**: Remembers user's choices

### 4. Search & Filter
- **useMemo**: Optimized filtering performance
- **Real-time**: Updates as user types
- **Combination**: Search + category filters work together
- **Empty State**: Clear feedback when no results

### 5. Responsive Design
- **CSS Grid**: Responsive product layout
- **Media Queries**: Breakpoints at 1024px, 768px, 480px
- **Mobile Menu**: Navigation works on small screens
- **Sticky Elements**: Important info stays visible

## Common Tasks

### Adding a New Product

In `src/data/products.js`:

```javascript
{
  id: 13,
  name: "New Product",
  price: 29999,
  category: "electronics",
  image: "https://images.unsplash.com/...",
  description: "Product description",
}
```

### Adding a New Category

1. Add to `categories` array in `src/data/products.js`
2. Add products with matching category ID
3. Category automatically appears in navigation

### Customizing Styles

- Global styles: `src/index.css`
- App styles: `src/styles/app.css`
- Navigation: `src/styles/navigation.css`
- Pages: `src/styles/pages.css`

## Performance Optimizations

- **useMemo**: Filters products only when search/category changes
- **React.memo**: Prevent unnecessary re-renders (can be added)
- **Code Splitting**: Pages loaded as needed with React Router
- **localStorage**: Reduces API calls (if added later)

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile Browsers: ✅ Full support

## Troubleshooting

### Cart Not Persisting
- Check browser's localStorage is enabled
- Clear browser cache and try again
- Open DevTools (F12) → Application tab → localStorage

### Navigation Not Working
- Ensure React Router is properly configured
- Check route paths match exactly
- Look for console errors (F12)

### Styles Not Loading
- Verify all CSS files are imported
- Check file paths in import statements
- Clear browser cache (Ctrl+Shift+Delete)

### Products Not Showing
- Verify products.js has correct structure
- Check image URLs are accessible
- Ensure product category IDs exist

## Next Steps (Enhancements)

Potential features to add:
- ✅ Product details page
- ✅ User authentication
- ✅ Payment integration
- ✅ Order history
- ✅ Wishlist functionality
- ✅ Product reviews/ratings
- ✅ Advanced filtering (price, ratings)
- ✅ Dark mode theme
- ✅ Multiple language support

## File Summary

| File | Purpose |
|------|---------|
| `App.jsx` | Main app with router and context setup |
| `CartContext.jsx` | Global state and cart logic |
| `useCart.js` | Custom hook for cart access |
| `Home.jsx` | Main page with search and filters |
| `CategoryPage.jsx` | Category-specific products |
| `CartPage.jsx` | Shopping cart display and management |
| `Navigation.jsx` | Main navigation component |
| `products.js` | Product catalog data |

## Notes

- This is a frontend-only application (no backend)
- All data is stored locally in browser
- Suitable for learning and demonstration purposes
- Ready to integrate with a backend API
- Uses modern React patterns and best practices

---

**Created**: May 2024  
**Version**: 3.0 - Multi-page SPA with Context API  
**Status**: Production Ready ✅
