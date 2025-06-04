import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShopPage from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar />
       <Routes>
         {/* <Route path="/" element={<Home />} /> */}
         <Route path="/shop" element={<ShopPage />} />
         <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
       </Routes>
       <Footer />
     </Router>
    </div>
  );
}

export default App;