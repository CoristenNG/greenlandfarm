import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  ShoppingCart,
  Heart,
  Share2,
  Star,
  Play,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import Rec from "../assets/shopRec.png";
import Pepper from "../assets/allPepper.png"; // Assuming you have an image for the pepper

const BellPepperProduct = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    name: "Organic Red Tomatoes (Premium)",
    price: "₦ 4500.00",
    rating: 4.8,
    reviews: 156,
    description:
      "Our vibrant Green Bell Peppers, also known simply as Bell Peppers, are a testament to fresh, wholesome produce. Cultivated with care in our Epe greenhouse, each pepper is a rich source of Vitamin C, powerful antioxidants, and dietary fiber, making them a delicious and healthy addition to any meal. We pride ourselves on growing them without synthetic pesticides or harmful chemicals, ensuring you receive only the purest, most natural goodness.",
    images: [Pepper, Rec, Rec, Rec],
    specifications: [
      { attribute: "Category", value: "Fresh Vegetables" },
      { attribute: "Weight/Unit", value: "Sold per kg" },
      { attribute: "Cultivation", value: "Greenhouse" },
      {
        attribute: "Delivery Area",
        value: "Lagos & Ogun (currently) Except for big bulk purchase",
      },
      { attribute: "Availability", value: "Year-round" },
    ],
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const tabs = [
    { id: "description", label: "Detailed Description / Benefits" },
    { id: "reviews", label: "Reviews and Testimonials" },
  ];

  return (
    <div className="product-page">
      {/* Main Product Section */}
      <div className="product-container">
        {/* Left Side - Images */}
        <div className="product-images">
          <div className="thumbnail-list">
            {product.images.map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${
                  selectedImage === index ? "active" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`Organic tomato ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>

          <div className="rating-section">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < Math.floor(product.rating) ? "filled" : "empty"
                  }
                />
              ))}
            </div>
          </div>
          <div className="product-price">{product.price}</div>

          <p className="short-description">
            Grade A+ | Fresh, organic tomatoes perfect for cooking, salads,
            sauces, and soups. Sustainably grown by certified organic farmers in
            Nigeria with guaranteed freshness and quality delivery.
          </p>

          {/* Quantity and Actions */}
          <div className="quantity-section">
            <div className="quantity-control">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>

            <button className="add-to-cart">
              <ShoppingCart size={18} />
              Add to Cart
            </button>

            <button className="wishlist">
              <Heart size={18} />
            </button>
          </div>

          {/* Share Section */}
          <div className="share-section">
            <span>Share With:</span>
            <div className="social-icons">
              <button className="social-btn">
                <Facebook size={18} />
              </button>
              <button className="social-btn">
                <Twitter size={18} />
              </button>
              <button className="social-btn">
                <Instagram size={18} />
              </button>
              <button className="social-btn">
                <Linkedin size={18} />
              </button>
              <button className="social-btn">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs-container">
        <div className="tab-headers">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-header ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === "description" && (
            <div className="description-content">
              <div className="description-text">
                <p>{product.description}</p>

                <div className="great-for">
                  <h3>Great for:</h3>
                  <ul>
                    <li>
                      <span>Cooking:</span> Perfect for adding a crisp texture
                      and subtly sweet flavor to soups, sauces, stir-fries,
                      fajitas, and roasts.
                    </li>
                    <li>
                      <span>Salads:</span> Slice them thin for a refreshing
                      crunch and vibrant color in your favorite fresh salads.
                      Snacking: Enjoy raw with hummus or your preferred dip for
                      a healthy and satisfying snack.
                    </li>
                    <li>
                      <span>Freezing for Future Use:</span> Ideal for dicing and
                      freezing, allowing you to enjoy farm-fresh flavor
                      year-round in your recipes.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="video-section">
                <div className="video-placeholder">
                  <Play size={48} className="play-icon" />
                </div>
              </div>
              <div className="specifications">
                <h3>Product Specifications Table</h3>
                <table className="specs-table">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "even" : "odd"}
                      >
                        <td>{spec.attribute}</td>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="reviews-content">
              <div className="reviews-container">
                <div className="reviews-layout">
                  <div className="reviews-list">
                    {/* Fatima K. Review */}
                    <div className="review-item">
                      <div className="review-header">
                        <div className="star-rating">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < 4 ? "filled" : "empty"}
                            />
                          ))}
                        </div>
                        <div className="star-division">
                          <span className="reviewer-name">Fatima K.</span>
                          <span className="review-date">
                            06 - 05 - 2025 | 06:37 AM
                          </span>
                        </div>
                      </div>
                      <p className="review-text">
                        I always order my green peppers from here, and they
                        never disappoint. So fresh and crisp, perfect for my
                        fajitas and other vegetable items. You can really taste
                        the difference from farm-fresh produce. Delivery to
                        Lagos is always on time too!
                      </p>
                      <div className="review-actions">
                        <span className="helpful-text">Was this helpful?</span>
                        <button className="vote-button helpful">
                          <ThumbsUp size={16} />4
                        </button>
                        <button className="vote-button not-helpful">
                          <ThumbsDown size={16} />3
                        </button>
                      </div>
                    </div>

                    {/* Chinedu O. Review */}
                    <div className="review-item">
                      <div className="review-header">
                        <div className="star-rating">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < 4 ? "filled" : "empty"}
                            />
                          ))}
                        </div>
                       <div className="star-division">
                         <span className="reviewer-name">Chinedu O.</span>
                        <span className="review-date">
                          05 - 05 - 2025 | 7:02 PM
                        </span>
                       </div>
                      </div>
                      <p className="review-text">
                        These bell peppers are always vibrant green and firm. I
                        use them constantly in my stir-fries and even for a
                        quick, healthy snack. Knowing they're from an Eco
                        greenhouse without chemicals makes me feel good about
                        what I'm eating. Highly recommend!
                      </p>
                      <div className="review-actions">
                        <span className="helpful-text">Was this helpful?</span>
                        <button className="vote-button helpful">
                          <ThumbsUp size={16} />2
                        </button>
                        <button className="vote-button not-helpful">
                          <ThumbsDown size={16} />6
                        </button>
                      </div>
                    </div>

                    {/* Aisha M. Review */}
                    <div className="review-item">
                      <div className="review-header">
                        <div className="star-rating">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < 3 ? "filled" : "empty"}
                            />
                          ))}
                        </div>
                        <div className="star-division">
                          <span className="reviewer-name">Aisha M.</span>
                        <span className="review-date">
                          04 - 05 - 2025 | 8:02 PM
                        </span>
                        </div>
                      </div>
                      <p className="review-text">
                        I'm impressed by how fresh these green peppers arrive.
                        It's like I just picked them myself. They last well in
                        the fridge too. Fantastic for salads and for adding that
                        authentic flavour to my jollof rice. Will definitely
                        keep buying!
                      </p>
                      <div className="review-actions">
                        <span className="helpful-text">Was this helpful?</span>
                        <button className="vote-button helpful">
                          <ThumbsUp size={16} />
                          20
                        </button>
                        <button className="vote-button not-helpful">
                          <ThumbsDown size={16} />0
                        </button>
                      </div>
                    </div>

                    <button className="view-more-btn">View More →</button>
                  </div>
                  {/* Right side - Rating Summary */}
                  <div className="rating-summary">
                    <div className="rating-display">
                      <div className="rating-number">4.5</div>
                      <div className="star-rating">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={i < 4 ? "filled" : "empty"}
                          />
                        ))}
                      </div>
                      <div className="rating-subtitle">Based on 56 reviews</div>
                    </div>

                    <div className="rating-bars">
                      <div className="rating-bar">
                        <span className="rating-label">5 Star</span>
                        <div className="rating-bar-container">
                          <div
                            className="rating-bar-fill"
                            style={{ width: "36%" }}
                          />
                        </div>
                        <span className="rating-percentage">36%</span>
                      </div>
                      <div className="rating-bar">
                        <span className="rating-label">4 Star</span>
                        <div className="rating-bar-container">
                          <div
                            className="rating-bar-fill"
                            style={{ width: "18%" }}
                          />
                        </div>
                        <span className="rating-percentage">18%</span>
                      </div>
                      <div className="rating-bar">
                        <span className="rating-label">3 Star</span>
                        <div className="rating-bar-container">
                          <div
                            className="rating-bar-fill"
                            style={{ width: "5%" }}
                          />
                        </div>
                        <span className="rating-percentage">5%</span>
                      </div>
                      <div className="rating-bar">
                        <span className="rating-label">2 Star</span>
                        <div className="rating-bar-container">
                          <div
                            className="rating-bar-fill"
                            style={{ width: "4%" }}
                          />
                        </div>
                        <span className="rating-percentage">4%</span>
                      </div>
                      <div className="rating-bar">
                        <span className="rating-label">1 Star</span>
                        <div className="rating-bar-container">
                          <div
                            className="rating-bar-fill"
                            style={{ width: "8%" }}
                          />
                        </div>
                        <span className="rating-percentage">8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Specifications */}

      <style jsx>{`
        .product-page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 5%;
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        .product-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        /* Image Section */
        .product-images {
          display: flex;
          gap: 20px;
        }

        .thumbnail-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .thumbnail {
          width: 60px;
          height: 60px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s;
        }

        .thumbnail.active {
          border-color: #4caf50;
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .main-image {
          flex: 1;
          max-width: 400px;
        }

        .main-image img {
          width: 100%;
          height: auto;
          border-radius: 12px;
        }

        /* Product Info */
        .product-info {
          padding: 20px 0;
          text-align: left;
        }

        .product-title {
          font-size: 28px;
          font-weight: 600;
          color: #333;
          margin: 0 0 10px 0;
        }

        .product-price {
          font-size: 24px;
          color: #4caf50;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .rating-section {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .stars .filled {
          color: #d9d9d9;
          fill: #d9d9d9;
        }

        .stars .empty {
          color: #ddd;
        }

        .rating-text {
          color: #666;
          font-size: 14px;
        }

        .short-description {
          color: #707070;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 14px;
        }

        .quantity-section {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .quantity-control {
          display: flex;
          align-items: center;
        }

        .quantity-control button {
          background: #efefef;
          border: none;
          border-radius: 10px;
          width: 40px;
          height: 40px;
          cursor: pointer;
          font-size: 18px;
          color: #666;
        }

        .quantity-control span {
          padding: 0 15px;
          font-weight: 500;
        }

        .add-to-cart {
          background: #79a637;
          color: white;
          border: none;
          width: 300px;
          padding: 12px 24px;
          text-align: center;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center; /* Add this to center horizontally */
          gap: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.3s;
        }

        .add-to-cart:hover {
          background: #45a049;
        }

        .wishlist {
          background: #efefef;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #666;
        }

        .share-section {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 14px;
          color: #666;
        }

        .social-icons {
          display: flex;
          gap: 8px;
        }

        .social-btn {
          background: #555555;
          color: white;
          width: 28px;
          height: 28px;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease;
        }

        /* Tabs */
        .tabs-container {
          margin-bottom: 40px;
          text-align: left;
        }

        .tab-headers {
          display: flex;
          border-bottom: 1px solid #ddd;
          margin-bottom: 20px;
        }

        .tab-header {
          background: none;
          border: none;
          padding: 15px 0;
          margin: 0px auto;
          cursor: pointer;
          font-size: 16px;
          color: #a2a2a2;
          border-bottom: 2px solid transparent;
          transition: all 0.3s;
        }

        .tab-header.active {
          color: #4b4b4b;
          border-bottom-color: #4caf50;
          font-weight: 600;
        }

        .tab-content {
          min-height: 200px;
        }

        .description-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .description-text p {
          line-height: 1.6;
          color: #333;
          margin-bottom: 20px;
        }

        .great-for h3 {
          color: #313131;
          margin-bottom: 15px;
        }

        .great-for span {
          color: #79a637;
        }

        .great-for ul {
          padding-left: 20px;
        }

        .great-for li {
          margin-bottom: 10px;
          line-height: 1.5;
          color: #707070;
        }

        .video-section {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .video-placeholder {
          width: 300px;
          height: 200px;
          background: #f0f0f0;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s;
        }

        .video-placeholder:hover {
          background: #e8e8e8;
        }

        .play-icon {
          color: #4caf50;
        }

        /* Specifications */
        .specifications h3 {
          margin-bottom: 20px;
          color: #333;
          text-align: left;
        }

        .specs-table {
          width: 40%;
          border-collapse: collapse;
          background: white;
          overflow: hidden;
        }

        .specs-table th {
          background: #f8f9fa;
          padding: 15px;
          text-align: left;
          font-weight: 600;
          color: #333;
          border-bottom: 1px solid #e9ecef;
        }

        .specs-table td {
          padding: 15px;
          border-bottom: 1px solid #e9ecef;
          color: #787878;
          text-align: left;
        }

        .specs-table tr.even {
          background: #f8f9fa;
        }

        .specs-table tr.odd {
          background: white;
        }

        @media (max-width: 768px) {
          .product-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .product-images {
            flex-direction: column-reverse;
          }

          .thumbnail-list {
            flex-direction: row;
            justify-content: center;
          }

          .description-content {
            grid-template-columns: 1fr;
          }

          .quantity-section {
            flex-wrap: wrap;
          }
        }

        .reviews-container {
          max-width: 1024px;
          margin: 0 auto;
          padding: 24px;
          background-color: white;
        }

        .reviews-layout {
          display: flex;
          gap: 32px;
        }

        .reviews-list {
          flex: 1;
        }

        .review-item {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 24px;
          margin-bottom: 24px;
        }

        .review-header {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 8px;
        }
          .star-division{
          display: flex;
          margin-left: -5px;
          gap: 8px;
          }

        .star-rating {
          display: flex;
        }

        .filled {
          color: #22c55e;
          fill: #22c55e;
        }

        .empty {
          color: #e5e7eb;
          fill: #e5e7eb;
        }

        .reviewer-name {
          color: #6b7280;
          font-size: 14px;
          margin-left: 8px;
        }

        .review-date {
          color: #9ca3af;
          font-size: 14px;
        }

        .review-text {
          color: #374151;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .review-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .helpful-text {
          font-size: 14px;
          color: #6b7280;
        }

        .vote-button {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          color: #6b7280;
          border: none;
          background: none;
          cursor: pointer;
          padding: 4px;
          transition: color 0.2s;
        }

        .vote-button.helpful:hover {
          color: #22c55e;
        }

        .vote-button.not-helpful:hover {
          color: #ef4444;
        }

        .view-more-btn {
          color: #22c55e;
          font-weight: 500;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 16px;
          transition: color 0.2s;
        }

        .view-more-btn:hover {
          color: #16a34a;
        }

        .rating-summary {
          width: 320px;
          padding-left: 32px;
        }

        .rating-display {
          text-align: center;
          margin-bottom: 24px;
        }

        .rating-number {
          font-size: 48px;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .rating-subtitle {
          color: #6b7280;
          margin-top: 8px;
        }

        .rating-bars {
          display: flex;
          flex-direction: column;
        }

        .rating-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .rating-label {
          color: #6b7280;
          width: 40px;
        }

        .rating-bar-container {
          flex: 1;
          background-color: #e5e7eb;
          border-radius: 9999px;
          height: 8px;
          position: relative;
        }

        .rating-bar-fill {
          background-color: #22c55e;
          height: 8px;
          border-radius: 9999px;
          transition: width 0.3s ease;
        }

        .rating-percentage {
          color: #6b7280;
          width: 32px;
        }

        @media (max-width: 768px) {
          .reviews-layout {
            flex-direction: column;
          }

          .rating-summary {
            width: 100%;
            padding-left: 0;
            margin-top: 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default BellPepperProduct;
