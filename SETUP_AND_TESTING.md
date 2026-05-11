# QuickCart Part 3 - Setup & Testing Guide

## Quick Start (5 Minutes)

### Step 1: Install Dependencies

Open terminal/PowerShell in the quickcart directory:

```bash
cd c:\Users\DYNABOOK\Downloads\react\quickcart
npm install
```

**If npm install fails** (due to PowerShell policy), try:
```bash
# Using bash terminal (if available)
cd /mnt/c/Users/DYNABOOK/Downloads/react/quickcart
npm install

# Or try PowerShell with Set-ExecutionPolicy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v8.0.10  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Step 3: Open in Browser

Click the link or open:
- http://localhost:5173/

You should see the QuickCart application with:
- Navigation bar at top
- Welcome header
- Products displayed in a grid

---

## Feature Testing Checklist

### ✅ 1. Navigation & Routing

**Test Multi-Page Navigation:**
- [ ] Click "Home" in navigation → Shows all products
- [ ] Click "Electronics" → Shows only electronics products
- [ ] Click "Headphones" → Shows only headphones products
- [ ] Click "Wearables" → Shows only wearables products
- [ ] Click "Tablets" → Shows only tablets products
- [ ] Click "Cart" → Shows shopping cart page
- [ ] Page does NOT reload during navigation (check for flicker)

**Expected Behavior:**
- Navigation bar stays visible and active link is highlighted
- URL changes (e.g., /category/electronics)
- No page refresh or white flash

---

### ✅ 2. Search Functionality

**Test Product Search:**
1. On Home page, type in search box:
   - [ ] "iPhone" → Shows only iPhone products
   - [ ] "Galaxy" → Shows only Samsung products
   - [ ] "Watch" → Shows only wearable watches
   - [ ] "xyz123" → Shows "No products found" message
   - [ ] Clear search → Shows all products again

**Test Search in Category:**
1. Go to /category/headphones
2. Type in search box:
   - [ ] "Sony" → Shows only Sony headphones
   - [ ] "Bose" → Shows only Bose headphones
   - [ ] "xxx" → Shows "No products found"

**Expected Behavior:**
- Search is case-insensitive
- Results update in real-time as you type
- Empty state shows helpful message
- Filter buttons still work with search

---

### ✅ 3. Category Filtering

**Test Category Selection:**
1. On Home page:
   - [ ] All category selected by default
   - [ ] Click "Electronics" button → Only electronics show
   - [ ] Click "Headphones" button → Only headphones show
   - [ ] Click "All" button → All products show again
2. Click "More in Category" on a product:
   - [ ] Redirects to category page
   - [ ] All products in that category displayed

**Expected Behavior:**
- Active category button is highlighted with purple background
- Product grid updates immediately
- "More in Category" links work correctly

---

### ✅ 4. Shopping Cart - Add Items

**Test Adding Products:**
1. On Home page, click "Add to Cart" on iPhone:
   - [ ] Cart count in navigation increases to (1)
   - [ ] No page reload
2. Click "Add to Cart" on same product again:
   - [ ] Cart count increases to (2)
   - [ ] Product quantity increases, not duplicate added
3. Add 3 different products:
   - [ ] Cart count shows (5) or appropriate total
4. Verify no console errors (F12 to check)

**Expected Behavior:**
- Cart icon updates immediately
- Duplicate items increment quantity
- All cart operations work without refresh

---

### ✅ 5. Shopping Cart - View Cart

**Test Viewing Cart:**
1. Click "Cart" button in navigation:
   - [ ] Shows cart page
   - [ ] All added items displayed
   - [ ] Each item shows:
     - Product image
     - Product name
     - Unit price
     - Subtotal (price × quantity)
     - Quantity controls (+/-)
     - Remove button
2. Order Summary shows:
   - [ ] Number of items
   - [ ] Total quantity
   - [ ] Total price (sum of all subtotals)
   - [ ] "Proceed to Checkout" button
   - [ ] "Continue Shopping" link

**Expected Behavior:**
- All items properly displayed
- Calculations are correct
- Order summary is sticky (stays visible while scrolling)
- Layout is responsive

---

### ✅ 6. Shopping Cart - Quantity Management

**Test Quantity Controls:**
1. In cart, find an item with quantity 2:
   - [ ] Click "−" button → Quantity becomes 1
   - [ ] Click "−" again → Item is removed from cart
   - [ ] Click "+" button → Quantity increases
2. Verify calculations:
   - [ ] Item subtotal updates correctly
   - [ ] Total price recalculates
   - [ ] Cart count in navigation updates

**Expected Behavior:**
- Quantity changes instantly
- Item removes when quantity reaches 0
- All totals update automatically
- No refresh or lag

---

### ✅ 7. Shopping Cart - Remove Items

**Test Item Removal:**
1. In cart, click "Remove" button on an item:
   - [ ] Item disappears from cart
   - [ ] Total price updates
   - [ ] Cart count decreases
   - [ ] Order summary updates

**Expected Behavior:**
- Removal is instant
- All calculations update
- Navigation cart count reflects change

---

### ✅ 8. Empty Cart State

**Test Empty Cart:**
1. Add one product to cart
2. Go to Cart page
3. Click "Remove" on the only item:
   - [ ] Cart becomes empty
   - [ ] Shows "Your cart is empty" message
   - [ ] Shows "Continue Shopping" button
4. Click "Continue Shopping":
   - [ ] Redirects to home page
   - [ ] Cart count shows (0)

**Expected Behavior:**
- Clear, helpful empty state message
- Easy way to start shopping again
- No errors or broken layout

---

### ✅ 9. Data Persistence (localStorage)

**Test Cart Persistence:**
1. Add 3 items to cart (with various quantities):
   - [ ] Note the total price
2. Refresh the page (F5):
   - [ ] Cart items still there
   - [ ] Quantities preserved
   - [ ] Total price same
3. Close browser window completely
4. Reopen and navigate to app:
   - [ ] Cart items still there
5. Clear browser data and refresh:
   - [ ] Cart is now empty
   - [ ] Shows "Your cart is empty"

**Expected Behavior:**
- Cart survives page refresh
- Cart survives browser close/reopen
- Cart clears when browser data cleared
- No console errors

---

### ✅ 10. Responsive Design

**Test on Different Screen Sizes:**

**Desktop (1200px+):**
- [ ] Products in 4+ column grid
- [ ] Navigation shows all links
- [ ] Sidebar order summary visible
- [ ] Cart item layout horizontal

**Tablet (768px - 1023px):**
- [ ] Products in 3-column grid
- [ ] Navigation still visible
- [ ] Cart layout wraps properly
- [ ] All buttons clickable

**Mobile (< 480px):**
- [ ] Products in 2-column grid or single column
- [ ] Navigation is readable
- [ ] Buttons are easy to tap
- [ ] Search box works
- [ ] No horizontal scrolling (except full zoom)

**Test by:**
- Resizing browser window
- Using Chrome DevTools (F12 → Toggle device toolbar)
- Testing on actual mobile device

---

### ✅ 11. UI/UX Polish

**Test Visual Feedback:**
- [ ] Hover over buttons → Color changes
- [ ] Hover over product cards → Subtle shadow/lift effect
- [ ] Active navigation link → Highlighted in purple
- [ ] Category buttons respond to clicks with visual feedback
- [ ] Product images load properly
- [ ] No layout shifts while loading

**Test Interactions:**
- [ ] All links are clickable
- [ ] All buttons respond to clicks
- [ ] Search box accepts input smoothly
- [ ] No lag or stuttering

---

### ✅ 12. Console Errors

**Check for Errors:**
1. Open DevTools (F12)
2. Go to Console tab
3. Navigate through entire app
4. [ ] No red errors in console
5. [ ] No warnings about missing keys in lists
6. [ ] No "Cannot read properties" errors

---

## Test Scenarios

### Scenario 1: New User
1. Open app
2. Search for "Pixel"
3. Click on Google Pixel product
4. Add to cart
5. Browse Electronics category
6. Add 2 more items
7. View cart
8. Increase quantity on one item
9. Remove one item
10. Refresh page
11. Cart still has items ✅

### Scenario 2: Category Browsing
1. Click "Headphones" in nav
2. Search for "Bose"
3. Add to cart
4. Go to home
5. Filter by all products
6. Add something else
7. Click "More in Category" on a product
8. Verify routed to correct category ✅

### Scenario 3: Cart Management
1. Add 5 different products
2. View cart
3. Adjust quantities
4. Remove items strategically
5. Verify total updates each time
6. Clear cart completely
7. Verify empty state ✅

---

## Troubleshooting During Testing

### Issue: App not starting
**Solution:**
- Make sure you ran `npm install` first
- Check that no other app is using port 5173
- Try: `npm run dev` in a new terminal

### Issue: Page doesn't update when adding items
**Solution:**
- Check console for errors (F12)
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

### Issue: Styling looks broken
**Solution:**
- Make sure CSS files are in src/styles/
- Check import statements in components
- Clear browser cache
- Restart dev server

### Issue: Navigation doesn't work
**Solution:**
- Verify you're using React Router (check App.jsx)
- Check URL in address bar changed
- Look for errors in console

### Issue: Cart doesn't persist
**Solution:**
- Check if localStorage is enabled in browser
- Open DevTools → Application → localStorage
- Check "cart" key has JSON data
- Make sure not in private/incognito mode

---

## Performance Check

**Verify Optimization:**
1. Open DevTools (F12) → Network tab
2. Refresh page
3. [ ] Initial load < 2 seconds
4. [ ] CSS and JS files downloaded
5. [ ] No failed requests
6. Open Console tab:
7. [ ] No warnings
8. [ ] No errors

---

## Next: Recording Your Video Demo

### Key Points to Demonstrate:

1. **Application Overview (30 seconds)**
   - Show home page with products
   - Explain the UI layout

2. **React Router/Navigation (1 minute)**
   - Click different category links
   - Show URL changing
   - Highlight no page reloads

3. **Context API & State (1 minute)**
   - Add items to cart from different pages
   - Show cart count updating
   - Explain useCart hook integration
   - Show components accessing global state

4. **Search & Filtering (1 minute)**
   - Search for products
   - Filter by category
   - Show empty state
   - Demonstrate combination of search + filter

5. **Shopping Cart (1 minute)**
   - Add items to cart
   - Manage quantities
   - Remove items
   - Show order summary
   - Show empty cart state

6. **localStorage Persistence (30 seconds)**
   - Add items to cart
   - Refresh page (F5)
   - Show items still there
   - Explain localStorage mechanism

7. **Responsive Design (30 seconds)**
   - Show desktop view
   - Resize browser to tablet size
   - Resize to mobile
   - Show everything adapts

8. **Code Walkthrough (2-3 minutes)**
   - Show CartContext.jsx and explain Context API
   - Show useCart hook usage in a component
   - Show product data structure
   - Show router configuration in App.jsx

---

## Creating the Pull Request

When ready:

1. Go to: https://github.com/joannajudiths141-sudo/quickcart/compare/main...feature-cart-page

2. Click "Create Pull Request"

3. Add Title:
```
Part 3: Multi-page SPA with Context API and Data Persistence
```

4. Add Description:
```markdown
## Features Implemented

✅ React Router for multi-page navigation
✅ Context API for global cart state
✅ Custom useCart hook to eliminate prop drilling
✅ localStorage persistence for cart data
✅ Real-time search functionality
✅ Category-based filtering
✅ Dedicated cart page with management
✅ Responsive design (mobile, tablet, desktop)
✅ Empty state handling
✅ Sticky navigation and order summary

## Technical Details

- **Pages**: Home, Category, Cart
- **Routes**: `/`, `/category/:categoryId`, `/cart`
- **State**: Global cart using Context API
- **Data**: 12 products across 4 categories
- **Persistence**: localStorage with automatic hydration
- **Styling**: Mobile-first responsive design

## File Changes

- `src/App.jsx` - Router setup
- `src/context/CartContext.jsx` - Global state
- `src/hooks/useCart.js` - Custom hook
- `src/pages/*` - New page components
- `src/components/Navigation.jsx` - Nav component
- `src/data/products.js` - Product catalog
- `src/styles/*` - New CSS files
```

5. Click "Create Pull Request"

---

## Submission Checklist

- [ ] npm install completed successfully
- [ ] npm run dev runs without errors
- [ ] All 12 feature tests passed ✅
- [ ] No console errors
- [ ] Responsive design verified
- [ ] Cart persists after refresh
- [ ] Pull Request created
- [ ] Video demo recorded
- [ ] Video uploaded to Google Drive
- [ ] Drive access set to "Anyone with link can edit"
- [ ] Links submitted

---

## Files Modified/Created

```
CREATED:
- src/context/CartContext.jsx
- src/hooks/useCart.js
- src/pages/Home.jsx
- src/pages/CategoryPage.jsx
- src/pages/CartPage.jsx
- src/components/Navigation.jsx
- src/data/products.js
- src/styles/app.css
- src/styles/navigation.css
- src/styles/pages.css
- PART3_DOCUMENTATION.md

MODIFIED:
- package.json (added react-router-dom)
- src/App.jsx (routing setup)
- src/components/Header.jsx (updated)
- src/index.css (global styles)
- src/App.css (app container styles)
- src/main.jsx (cleanup)
```

---

Good luck! 🚀
