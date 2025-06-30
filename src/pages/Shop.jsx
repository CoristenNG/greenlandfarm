import React from "react";
import { Link } from "react-router-dom";
import "../styles/Shop.css";
import { ShoppingCart } from "lucide-react";
import ShopImg from "../assets/shopImg.png";
import AllCategories from "../assets/allCate.png";
import Maize from "../assets/maize.png";
import Poultry from "../assets/poultry.png";
import Vegetables from "../assets/vegetables.png";
import Snail from "../assets/snail.png";
import Fish from "../assets/fish.png";
import Crate from "../assets/allCrate.png";
import Egg from "../assets/allEgg.png";
import Pepper from "../assets/allPepper.png";
import Round from "../assets/allRoundPepper.png";
import Tomato from "../assets/allTomato.png";
import UserWrapper from "../components/wrapper/user";

function ShopPage() {
    const categories = [
        { icon: Vegetables, label: "Vegetables", active: true },
        { icon: Maize, label: "Root vegetables" },
        { icon: Fish, label: "Fruits & berries" },
        { icon: Poultry, label: "Hot & beverage" },
        { icon: Snail, label: "Dairy & beverage" },
        { icon: AllCategories, label: "Others" },
    ];

    const products = [
        {
            id: 1,
            name: "Fresh bell pepper",
            package: "vegetables",
            price: "₦ 3,000.00",
            quantity: "1 kg",
            image: Pepper,
            category: "vegetables",
        },
        {
            id: 2,
            name: "Fresh red pepper",
            package: "vegetables",
            price: "₦ 3,000.00",
            quantity: "1 kg",
            image: Round,
            category: "vegetables",
        },
        {
            id: 3,
            name: "Fresh red beans",
            price: "₦ 2,000.00",
            package: "Egg",
            quantity: "1 kg",
            image: Egg,
            category: "vegetables",
        },
        {
            id: 4,
            name: "Fresh tomato (medium)",
            price: "₦ 3,000.00",
            package: "vegetables",
            quantity: "1 kg",
            image: Tomato,
            category: "vegetables",
        },
        {
            id: 5,
            name: "Fresh live chicken",
            price: "₦ 5,000.00",
            package: "Egg",
            quantity: "1 kg",
            image: Egg,
            category: "others",
        },
        {
            id: 6,
            name: "Fresh vegetables",
            price: "₦ 3,000.00",
            package: "vegetables",
            quantity: "1 kg",
            image: Pepper,
            category: "vegetables",
        },
        {
            id: 7,
            name: "Fresh vegetables",
            price: "₦ 3,000.00",
            package: "vegetables",
            quantity: "1 kg",
            image: Pepper,
            category: "vegetables",
        },
        {
            id: 8,
            name: "Fresh vegetables",
            package: "vegetables",
            price: "₦ 3,000.00",
            quantity: "1 kg",
            image: Pepper,
            category: "vegetables",
        },
        {
            id: 9,
            name: "Fresh mixed vegetable",
            price: "₦ 2,000.00",
            package: "Egg",
            quantity: "1 kg",
            image: Crate,
            category: "vegetables",
        },
        {
            id: 10,
            name: "Fresh vegetables",
            package: "vegetables",
            price: "₦ 3,000.00",
            quantity: "1 kg",
            image: Pepper,
            category: "vegetables",
        },
    ];

    return (
        <UserWrapper>
            <div className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Shop / Mart</h1>
                </div>
            </div>

            {/* Hero Section */}

            <div className="main-content">
                {/* Categories Section */}
                <div className="my-4">
                    <h2 className="section-title">Categories</h2>

                    <div className="flex items-center md:justify-center overflow-auto gap-3 ">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className={`${
                                    category.active
                                        ? "bg-green-700 text-white"
                                        : "bg-gray-50 text-gray-600 hover:bg-green-100"
                                } flex flex-col justify-center items-center rounded-xl shrink-0 w-32  p-3 cursor-pointer`}
                            >
                                <div className="category-icon">
                                    <img
                                        src={category.icon}
                                        alt={category.label}
                                    />
                                </div>
                                <div className="category-label text-nowrap">
                                    {category.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* All Categories Link */}
                <div className="all-categories">
                    <a href="#" className="all-categories-link">
                        All Categories
                    </a>
                </div>
                <div className="">
                    {/* Products Grid */}
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-2 md:grid-cols-4 md:gap-5 lg:grid-cols-5 lg:gap-8">
                        {products.map((product) => (
                            <Link
                                to={`/product/${product.id}`}
                                key={product.id}
                                className="product-link"
                            >
                                <div className="bg-gray-100 group rounded-lg p-5 md:shadow-sm text-center transition-all relative">
                                    {product.quantity && (
                                        <div className="product-quantity">
                                            {product.quantity}
                                        </div>
                                    )}
                                    <div className="w-full h-full object-cover transform hover:scale-90 group-hover:scale-75 transition-transform">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                        />
                                    </div>
                                    <div className="product-footer">
                                        <div className="price-container">
                                            <span className="price-label">
                                                {product.package}
                                            </span>
                                            <h3 className="product-name">
                                                {product.name}
                                            </h3>
                                            <span className="product-price">
                                                {product.price}
                                            </span>
                                        </div>
                                        <button className="cart-icon absolute bottom-8 right-2">
                                            <ShoppingCart size={16} />
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </UserWrapper>
    );
}

export default ShopPage;
