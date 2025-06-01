import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
import "../styles/ProductDetails.css"; 
import Egg from "../assets/allEgg.png";
import Pepper from "../assets/allPepper.png";
import Round from "../assets/allRoundPepper.png";
import Tomato from "../assets/allTomato.png";
import Rec from "../assets/shopRec.png"; // Assuming you have an image for the pepper

const BellPepperProduct = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    name: "Organic Red Tomatoes (Premium)",
    price: "₦ 7000.00",
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
      name: "Fresh tomato",
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
          <div className="product-price">{product.price} <span className="product-price-span">/kg</span></div>

          <p className="short-description">
            Our Bell Peppers are handpicked fresh from our pesticide-free fields. They’re sweet, crunchy, and perfect for stews, salads, and jollof rice.
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
                            (06 - 05 - 2025) | 06:37 AM
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
                            (05 - 05 - 2025) | 7:02 PM
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
                            (04 - 05 - 2025) | 8:02 PM
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
                      <div className="rating-number">4.5<span> /5 Stars</span></div>
                     <div className="absolute-rating">
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
                    </div>

                    <div className="rating-bars">
                      <div className="rating-bar">
                        <span className="rating-label">5 Star</span>
                        <div className="rating-bar-container">
                          <div
                            className="rating-bar-fill"
                            style={{ width: "74%" }}
                          />
                        </div>
                        <span className="rating-percentage">74%</span>
                      </div>
                      <div className="rating-bar">
                        <span className="rating-label">4 Star</span>
                        <div className="rating-bar-container">
                          <div
                            className="rating-bar-fill"
                            style={{ width: "11%" }}
                          />
                        </div>
                        <span className="rating-percentage">11%</span>
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
                            style={{ width: "1%" }}
                          />
                        </div>
                        <span className="rating-percentage">1%</span>
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

      {/* All Categories Link */}
      <div className="all-categories">
        <a href="#" className="all-categories-link">
          Related Products
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

      <button className="view-more-btn">View More →</button>

    </div>
  );
};

export default BellPepperProduct;
