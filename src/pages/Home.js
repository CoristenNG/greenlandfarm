import React from 'react'
import Shop from "../assets/shopImg.png"
import AllCategories from "../assets/allCate.png"
import Maize from "../assets/maize.png"
import Poultry from "../assets/poultry.png"
import Vegetables from "../assets/vegetables.png"
import Snail from "../assets/snail.png"
import Fish from "../assets/fish.png"

function Home() {
const categories = [
    { icon: Vegetables, label: 'Vegetables', active: true },
    { icon: Maize, label: 'Root vegetables' },
    { icon: Fish, label: 'Fruits & berries' },
    { icon: Poultry, label: 'Hot & beverage' },
    { icon: Snail, label: 'Dairy & beverage' },
    { icon: AllCategories, label: 'Others' }
];

  const products = [
    {
      id: 1,
      name: 'Fresh bell pepper',
      price: '₦ 3,000.00',
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=200&h=150&fit=crop&crop=center',
      category: 'vegetables'
    },
    {
      id: 2,
      name: 'Fresh red pepper',
      price: '₦ 3,000.00',
      image: 'https://images.unsplash.com/photo-1583663848850-46af132dc444?w=200&h=150&fit=crop&crop=center',
      category: 'vegetables'
    },
    {
      id: 3,
      name: 'Fresh red beans',
      price: '₦ 2,000.00',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=200&h=150&fit=crop&crop=center',
      category: 'vegetables'
    },
    {
      id: 4,
      name: 'Fresh tomato (medium)',
      price: '₦ 3,000.00',
      image: 'https://images.unsplash.com/photo-1546470427-e7c5e79a3f99?w=200&h=150&fit=crop&crop=center',
      category: 'vegetables'
    },
    {
      id: 5,
      name: 'Fresh live chicken',
      price: '₦ 5,000.00',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=200&h=150&fit=crop&crop=center',
      category: 'others'
    },
    {
      id: 6,
      name: 'Fresh vegetables',
      price: '₦ 3,000.00',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=150&fit=crop&crop=center',
      category: 'vegetables'
    },
    {
      id: 7,
      name: 'Fresh vegetables',
      price: '₦ 3,000.00',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&h=150&fit=crop&crop=center',
      category: 'vegetables'
    },
    {
      id: 8,
      name: 'Fresh vegetables',
      price: '₦ 3,000.00',
      image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=200&h=150&fit=crop&crop=center',
      category: 'vegetables'
    },
    {
      id: 9,
      name: 'Fresh mixed vegetable',
      price: '₦ 2,000.00',
      image: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=200&h=150&fit=crop&crop=center',
      category: 'vegetables'
    },
    {
      id: 10,
      name: 'Fresh vegetables',
      price: '₦ 3,000.00',
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=200&h=150&fit=crop&crop=center',
      category: 'vegetables'
    }
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
                  className={`category-card ${category.active ? 'active' : ''}`}
                >
                  <div className="category-icon">
                    <img src={category.icon} alt={category.label} />
                  </div>
                  <div className="category-label">
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

          {/* Products Grid */}
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3 className="product-name">
                  {product.name}
                </h3>
                <div className="product-footer">
                  <span className="product-price">
                    {product.price}
                  </span>
                  <button className="add-button">
                    Add
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
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${Shop});
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
           background: linear-gradient(45deg, #2C5F2D, #4B7B2C, #97621F, #A6432D);
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
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
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
          background-color: white;
          color: #333;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          border: 1px solid #e0e0e0;
        }

        .category-card.active {
          background-color: #4CAF50;
          color: white;
        }

        .category-card:not(.active):hover {
          background-color: #f5f5f5;
          transform: translateY(-2px);
        }

        .category-icon {
          margin-bottom: 10px;
        }

        .category-icon img {
          width: 50px;
          height: 50px;
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
          color: #4CAF50;
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
          background-color: white;
          border-radius: 10px;
          padding: 15px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          text-align: center;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e0e0e0;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        }

        .product-image {
          margin-bottom: 10px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .product-name {
          font-size: 0.9rem;
          margin: 0 0 10px 0;
          color: #333;
          font-weight: 500;
          min-height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .product-price {
          font-size: 1rem;
          font-weight: bold;
          color: #4CAF50;
        }

        .add-button {
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 5px 10px;
          font-size: 0.8rem;
          cursor: pointer;
          font-weight: 500;
        }

        .add-button:hover {
          background-color: #45a049;
        }
      `}</style>
    </>
  )
}

export default Home