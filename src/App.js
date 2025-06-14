import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import ShopPage from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
   <CartProvider>
     <div className="App">
     <Router>
       <Navbar />
       <Routes>
         {/* <Route path="/" element={<Home />} /> */}
         <Route path="/" element={<Home />} />
         <Route path="/shop" element={<ShopPage />} />
         <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
       </Routes>
       <Footer />
     </Router>
    </div>
   </CartProvider>
  );
}

export default App;