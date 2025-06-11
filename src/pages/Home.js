import React from "react";
import "../styles/Home.css";
import Maize from "../assets/maize.png";
import Poultry from "../assets/poultry.png";
import Vegetables from "../assets/vegetables.png";
import Snail from "../assets/snail.png";
import Fish from "../assets/fish.png";
import AllCategories from "../assets/allCate.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slide1 from "../assets/slide1.png";
import Slide2 from "../assets/slide2.png";

function Home() {
  const categories = [
    { icon: Vegetables, label: "Vegetables", active: true },
    { icon: Maize, label: "Root vegetables" },
    { icon: Fish, label: "Fruits & berries" },
    { icon: Poultry, label: "Hot & beverage" },
    { icon: Snail, label: "Dairy & beverage" },
    { icon: AllCategories, label: "Others" },
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-contents">
          <h1>
            Redefining Farm-Fresh <br></br>for Today's Cities
          </h1>
          <p className="hero-text">
            We grow with purpose cultivating top-quality products inside our
            advanced greenhouses and farm. Our journey begins in Lagos, but our
            mission is rooted in feeding cities across Nigeria with clean,
            healthy, and consistent produce.
          </p>
          <button className="cta-button">Check out our Products</button>
        </div>
      </div>

      <div className="categories-section">
        <div className="section-header">
          <h5 className="section-name">Our Shop</h5>
          <h2 className="section-title">Our Product Categories</h2>
          <p className="section-text">
            Here's what you can order today — no market stress, no trouble, just
            from your comfort.
          </p>
        </div>
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

      <section className="slider-section">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1.5} // Show 1.5 slides
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="pure-image-slider"
        >
          <SwiperSlide>
            <img
              src={Slide1}
              alt="Fresh farm produce"
              className="slider-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Slide2}
              alt="Healthy vegetables"
              className="slider-image"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default Home;
