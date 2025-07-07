import React from "react";
import "../../styles/Shop.css";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import UserWrapper from "../../components/wrapper/user";

function ShopPage() {
    const categories = [
        { icon: "/images/vegetables.png", label: "Vegetables", active: true },
        { icon: "/images/maize.png", label: "Root vegetables" },
        { icon: "/images/fish.png", label: "Fruits & berries" },
        { icon: "/images/poultry.png", label: "Hot & beverage" },
        { icon: "/images/snail.png", label: "Dairy & beverage" },
        { icon: "/images/allCate.png", label: "Others" },
    ];


    const productss = [
        {
            id: 1,
            name: "Fresh bell pepper",
            package: "vegetables",
            price: "₦ 3,000.00",
            quantity: "1 kg",
            image: "/images/allPepper.png",
            category: "vegetables",
        },
        {
            id: 2,
            name: "Fresh red pepper",
            package: "vegetables",
            price: "₦ 3,000.00",
            quantity: "1 kg",
            image: "/images/allRoundPepper.png",
            category: "vegetables",
        },
        {
            id: 3,
            name: "Fresh red beans",
            price: "₦ 2,000.00",
            package: "Egg",
            quantity: "1 kg",
            image: "/images/allEgg.png",
            category: "vegetables",
        },
        {
            id: 4,
            name: "Fresh tomato (medium)",
            price: "₦ 3,000.00",
            package: "vegetables",
            quantity: "1 kg",
            image: "/images/allTomato.png",
            category: "vegetables",
        },
        {
            id: 5,
            name: "Fresh live chicken",
            price: "₦ 5,000.00",
            package: "Egg",
            quantity: "1 kg",
            image: "/images/allEgg.png",
            category: "others",
        },
        {
            id: 6,
            name: "Fresh vegetables",
            price: "₦ 3,000.00",
            package: "vegetables",
            quantity: "1 kg",
            image: "/images/allRoundPepper.png",
            category: "vegetables",
        },
        {
            id: 7,
            name: "Fresh vegetables",
            price: "₦ 3,000.00",
            package: "vegetables",
            quantity: "1 kg",
            image: "/images/allRoundPepper.png",
            category: "vegetables",
        },
        {
            id: 8,
            name: "Fresh vegetables",
            package: "vegetables",
            price: "₦ 3,000.00",
            quantity: "1 kg",
            image: "/images/allPepper.png",
            category: "vegetables",
        },
        {
            id: 9,
            name: "Fresh mixed vegetable",
            price: "₦ 2,000.00",
            package: "Egg",
            quantity: "1 kg",
            image: "/images/allCrate.png",
            category: "vegetables",
        },
        {
            id: 10,
            name: "Fresh vegetables",
            package: "vegetables",
            price: "₦ 3,000.00",
            quantity: "1 kg",
            image: "/images/allTomato.png",
            category: "vegetables",
        },
    ];
    console.log(productss);
    const products = [];
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
                                    <Image
                                        src={category.icon}
                                        alt={category.label}
                                        width={200}
                                        height={200}
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
                        {products.length > 0 ? (
                            products.map((product) => (
                                <Link
                                    href={`/product/${product.id}`}
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
                            ))
                        ) : (
                            <div className="col-span-5 text-center text-gray-500 py-20 w-full rounded-lg mb-20 border border-dashed">
                                No products available in this category.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </UserWrapper>
    );
}

export default ShopPage;
