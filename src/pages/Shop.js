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
    <>
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Shop / Mart</h1>
        </div>
      </div>

      <div className="container">
        {/* Hero Section */}

        <div className="main-content">
          {/* Categories Section */}
          <div className="categories-section">
            <h2 className="section-title">Categories</h2>

            <div className="categories-grid">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`category-card ${category.active ? "active" : ""}`}
                >
                  <div className="category-icon">
                    <img src={category.icon} alt={category.label} />
                  </div>
                  <div className="category-label">{category.label}</div>
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

          {/* Products Grid */}
          <div className="products-grid">
            {products.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="product-link"
              >
                <div className="product-card">
                  {product.quantity && (
                    <div className="product-quantity">{product.quantity}</div>
                  )}
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-footer">
                    <div className="price-container">
                      <span className="price-label">{product.package}</span>
                      <h3 className="product-name">{product.name}</h3>
                      <span className="product-price">{product.price}</span>
                    </div>
                    <button className="cart-icon">
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

     
    </>
  );
}

export default ShopPage;
