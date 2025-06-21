import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ShopPage from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import OrdersPage from "./pages/order";
import SettingsPage from "./pages/settings/page";
import SignUpPage from "./pages/auth/signup";
import LoginPage from "./pages/auth/login";
import OtpPage from "./pages/auth/otpPage";
import ForgotPassword from "./pages/auth/forgotPassword";
import ResetPassword from "./pages/auth/resetPassword";
import OrderDetailsPage from "./pages/order/orderProduct";
import Navbar2 from "./components/Navbar2";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <CartProvider>
            <Toaster />

            <div className="bg-white">
                <Router>
                    <Routes>
                        <Route
                            path="/create-account"
                            element={<SignUpPage />}
                        />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/otp" element={<OtpPage />} />
                        <Route
                            path="/reset-password"
                            element={<ResetPassword />}
                        />
                        <Route
                            path="/forgot-password"
                            element={<ForgotPassword />}
                        />
                    </Routes>
                    <Navbar2 />
                    <Routes>
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<ShopPage />} />
                        <Route
                            path="/product/:id"
                            element={<ProductDetails />}
                        />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/order" element={<OrdersPage />} />
                        <Route
                            path="/order/:id"
                            element={<OrderDetailsPage />}
                        />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </CartProvider>
    );
};

export default App;
