import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/wrapper/user/Navbar";
import Footer from "./components/wrapper/user/Footer";
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
import Navbar2 from "./components/wrapper/user/Navbar2";
import { Toaster } from "react-hot-toast";
import ShippingAddress from "./pages/order/addresses";
import { SWRConfig } from "swr";
import { server } from "./redux/api/axiosBaseQuery";
import ProtectedRoute from "./components/ProtectedRoute";
import ContactFAQPage from "./pages/misc/ContactUs";
import AboutUsPage from "./pages/misc/AboutUs";

const App = () => {
    return (
        <CartProvider>
            <Toaster />
            <SWRConfig
                value={{
                    refreshInterval: false,
                    revalidateOnFocus: true,
                    fetcher: async (resource, init) => {
                        let url = resource;

                        const token = localStorage.getItem("user_token") || "";

                        const res = await fetch(`${server}/api/v1/${url}`, {
                            method: "GET",
                            headers: {
                                Authorization: `Bearer ${token}`,
                                "Content-Type": "application/json",
                            },
                            ...init, // Spread any additional init options
                        });

                        if (!res.ok) {
                            const error = new Error(
                                "An error occurred while fetching the data."
                            );
                            error.info = await res.json();
                            error.status = res.status;
                            throw error;
                        }

                        return res.json();
                    },
                }}
            >
                <div className="bg-white">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/contact-us"
                                element={<ContactFAQPage />}
                            />
                            <Route path="/about-us" element={<AboutUsPage />} />
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
                        <Routes>
                            {/* <Route path="/" element={<Home />} /> */}
                            <Route
                                path="/shop"
                                element={
                                    <ProtectedRoute>
                                        <ShopPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/product/:id"
                                element={
                                    <ProtectedRoute>
                                        <ProductDetails />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/cart"
                                element={
                                    <ProtectedRoute>
                                        <Cart />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/order"
                                element={
                                    <ProtectedRoute>
                                        <OrdersPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/order/:id"
                                element={
                                    <ProtectedRoute>
                                        <OrderDetailsPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/settings"
                                element={
                                    <ProtectedRoute>
                                        <SettingsPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/addresses"
                                element={
                                    <ProtectedRoute>
                                        <ShippingAddress />
                                    </ProtectedRoute>
                                }
                            />
                        </Routes>
                    </Router>
                </div>
            </SWRConfig>
        </CartProvider>
    );
};

export default App;
