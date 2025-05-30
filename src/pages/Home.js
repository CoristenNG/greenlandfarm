import React from "react";
import { ShoppingCart } from "lucide-react";
import Shop from "../assets/shopImg.png";
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

function Home() {
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
              <div key={product.id} className="product-card">
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
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        .hero {
          height: 300px;
          background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
            url(${Shop});
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: relative;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            #2c5f2d,
            #4b7b2c,
            #97621f,
            #a6432d
          );
          opacity: 0.8;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .hero-title {
          font-size: 2.5rem;
          margin: 0 0 10px 0;
          font-weight: bold;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .categories-section {
          margin-bottom: 30px;
        }

        .section-title {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
          font-size: 1.5rem;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }

        .category-card {
          background-color: #e8f2f3;
          color: #333;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .category-card.active {
          background-color: #4caf50;
          color: white;
        }

        .category-icon {
          margin-bottom: 10px;
        }

        .category-icon img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          object-fit: cover;
        }

        .category-label {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .all-categories {
          text-align: center;
          margin-bottom: 30px;
        }

        .all-categories-link {
          color: #4caf50;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }

        .product-card {
          background-color: #f5f5f5;
          border-radius: 10px;
          padding: 15px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .product-quantity {
    position: absolute;
    top: 5px;
    left: 5px;
    color: black;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    z-index: 1;
    transition: opacity 0.3s ease;
  }

        .product-image {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-name {
          font-size: 0.85rem;
          color: #333;
          font-weight: 500;
          margin: 0;
          text-align: left;
          line-height: 1.2;
          max-width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-top: 10px;
          border-top: 1px solid #eee;
          margin-top: 10px;
        }

        .product-price {
          font-size: 1.1rem;
          font-weight: 600;
          color: #4caf50;
          margin-bottom: 5px;
        }

        .price-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1;
          margin-right: 10px;
        }

        .price-label {
          font-size: 0.7rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }

        .cart-icon {
          margin-left: auto;
          align-self: flex-end;
          color: black;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          background: none;
        }
      `}</style>
    </>
  );
}

export default Home;
