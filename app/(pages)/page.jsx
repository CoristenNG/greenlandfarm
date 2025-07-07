"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "../styles/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
    Utensils,
    Truck,
    BookOpen,
    Bubbles,
} from "lucide-react";
import UserWrapper from "../components/wrapper/user";
import { FaPlantWilt } from "react-icons/fa6";
import Image from "next/image";

function Home() {
    const categories = [
        { icon: "/images/vegetables.png", label: "Vegetables", active: true },
        { icon: "/images/maize.png", label: "Root vegetables" },
        { icon: "/images/fish.png", label: "Fruits & berries" },
        { icon: "/images/poultry.png", label: "Hot & beverage" },
        { icon: "/images/snail.png", label: "Dairy & beverage" },
        { icon: "/images/allCate.png", label: "Others" },
    ];

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const features = [
        {
            title: "Quality-First Farming",
            content:
                "From tomatoes to table eggs, we prioritize cleanliness, safety, and freshness at every step.",
        },
        {
            title: "Diverse, Expanding Offerings",
            content:
                "We continuously expand our product range to meet all your agricultural needs.",
        },
        {
            title: "No Pesticides or Harmful Practices",
            content:
                "Our farming methods are 100% organic and environmentally friendly.",
        },
        {
            title: "Sorted, Cleaned & Ready to Use",
            content: "All our products are pre-processed for your convenience.",
        },
        {
            title: "Reliable Service & Support",
            content:
                "Our dedicated team ensures you get the best service and support.",
        },
    ];

    const testimonials = [
        {
            id: 1,
            name: "Adetula Monisola",
            title: "Owner of Sadek Kitchen • Lagos",
            rating: 5,
            text: "We used to rely on open market vendors for tomatoes and peppers, but the inconsistency was killing our kitchen flow. Since switching to Urban Greenland, our ingredients are always fresh, clean, and right on time.",
        },
        {
            id: 2,
            name: "John Doe",
            title: "Restaurant Manager • Abuja",
            rating: 5,
            text: "Urban Greenland has transformed our supply chain. The quality and consistency of their produce is unmatched in the market.",
        },
        {
            id: 3,
            name: "Amina Yusuf",
            title: "Head Chef • Kano",
            rating: 4,
            text: "Great service and reliable delivery. Our kitchen operations have become much smoother since we started using Urban Greenland.",
        },
        {
            id: 4,
            name: "Michael Okoro",
            title: "Catering Director • Port Harcourt",
            rating: 5,
            text: "The freshness of their produce makes all the difference in our dishes. Highly recommended for any professional kitchen.",
        },
    ];

    return (
        <UserWrapper>
            <div className="home-container">
                <div className="hero-section">
                    <div className="hero-contents !px-2 md:!px-5">
                        <h1>
                            Redefining Farm-Fresh <br></br>for Today's Cities
                        </h1>
                        <p className="hero-text">
                            We grow with purpose cultivating top-quality
                            products inside our advanced greenhouses and farm.
                            Our journey begins in Lagos, but our mission is
                            rooted in feeding cities across Nigeria with clean,
                            healthy, and consistent produce.
                        </p>
                        <button className="cta-button">
                            Check out our Products
                        </button>
                    </div>
                </div>

                <div className="categories-section">
                    <div className="section-header">
                        <h5 className="section-name">Our Shop</h5>
                        <h2 className="section-title">
                            Our Product Categories
                        </h2>
                        <p className="section-text">
                            Here's what you can order today — no market stress,
                            no trouble, just from your comfort.
                        </p>
                    </div>
                    {/* Categories Section */}
                    <div className="">
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
                </div>

                <section className="slider-section">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={
                            typeof window !== "undefined"
                                ? window.innerWidth < 700
                                    ? 1
                                    : 1.5
                                : 1
                        } // Show 1.5 slides
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
                            <Image
                                width={500}
                                height={500}
                                src={"/images/slide1.png"}
                                alt="Fresh farm produce"
                                className="slider-image"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                width={500}
                                height={500}
                                src={"/images/slide2.png"}
                                alt="Healthy vegetables"
                                className="slider-image"
                            />
                        </SwiperSlide>
                    </Swiper>
                </section>

                <section className="max-w-6xl mx-auto px-4 mt-16">
                    <div className="grid md:grid-cols-3 gap-12 items-start">
                        <div className="lg:col-span-2 md:pr-28">
                            <span className="about-label">About Us</span>
                            <h2 className="about-title">
                                Who We Are & Why We Farm Differently
                            </h2>

                            <p className="about-description">
                                We're not your typical farm — we're the modern
                                face of smart, eco-friendly agriculture in
                                Nigeria. From our greenhouse in Lagos, we're
                                launching a movement for clean,
                                climate-resilient, and high-yield vegetable
                                farming:
                            </p>

                            <div className="about-features">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <Bubbles size={20} />
                                    </div>
                                    <div className="feature-content">
                                        <h3>Eco-Friendly Greenhouse Farming</h3>
                                        <p>
                                            We grow crops in controlled
                                            environments that use less water, no
                                            pesticides, and produce healthier
                                            yields year-round.
                                        </p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <Bubbles size={20} />
                                    </div>
                                    <div className="feature-content">
                                        <h3>Farm-to-Door Delivery</h3>
                                        <p>
                                            Fresh produce delivered straight
                                            from our greenhouse to your door —
                                            fast, clean, and convenient.
                                        </p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <Bubbles size={20} />
                                    </div>
                                    <div className="feature-content">
                                        <h3>One Shop, Many Produce Options</h3>
                                        <p>
                                            From Vegetables, Fruits, Poultry and
                                            more — get all your essentials from
                                            one trusted source.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative lg:mt-20">
                            <Image
                                width={500}
                                height={500}
                                src={"/images/bigAbout.png"}
                                alt="Main farm image"
                                className="w-full h-68 md:h-full object-cover rounded-lg shadow-lg"
                            />
                            <Image
                                width={500}
                                height={500}
                                src={"/images/smallAbout.png"}
                                alt="Secondary farm image"
                                className="hidden md:block w-40 h-40 absolute md:top-1/2 -left-20 -mt-20 rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                <section className="services-section">
                    <div className="section-header">
                        <h2 className="section-subtitle">What We Offer</h2>
                        <h3 className="section-title">
                            Services – Bridging Farm <br></br>to Market
                        </h3>
                    </div>

                    <div className="services-grid">
                        {/* First Row */}
                        <div className="service-row gap-3 md:gap-6">
                            <div className="service-card p-2 md:p-6">
                                <div className="service-content gap-2 md:gap-4">
                                    <div className="service-icon">
                                        <FaPlantWilt size={24} />
                                    </div>
                                    <div className="service-text">
                                        <h4>Fresh Produce Sales</h4>
                                        <p>
                                            From hot ata rodo to colorful bell
                                            peppers and fresh eggs — everything
                                            we grow is clean, greenhouse-raised,
                                            and carefully packed for freshness.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-card p-2 md:p-6">
                                <div className="service-content gap-2 md:gap-4">
                                    <div className="service-icon">
                                        <Utensils size={24} />
                                    </div>
                                    <div className="service-text">
                                        <h4>Vendor Supply (B2B)</h4>
                                        <p>
                                            Restaurants, caterers, and food
                                            vendors can rely on us for bulk,
                                            consistent, and premium-quality
                                            produce without market stress.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="service-row gap-3 md:gap-6">
                            <div className="service-card p-2 md:p-6">
                                <div className="service-content gap-2 md:gap-4">
                                    <div className="service-icon">
                                        <Truck size={24} />
                                    </div>
                                    <div className="service-text">
                                        <h4>Delivery Services</h4>
                                        <p>
                                            Same-day delivery within our current
                                            operating zones (starting with Lagos
                                            Phase 2). As we grow, so does our
                                            reach.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-card p-2 md:p-6">
                                <div className="service-content gap-2 md:gap-4 ">
                                    <div className="service-icon">
                                        <BookOpen size={24} />
                                    </div>
                                    <div className="service-text">
                                        <h4>Agro–Education (Coming Soon)</h4>
                                        <p>
                                            We’re preparing to share our methods
                                            — hands-on training, virtual
                                            sessions, and more to empower the
                                            next generation of greenhouse
                                            farmers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="team-section">
                    <div className="team-container">
                        <div className="team-content">
                            <h5 className="team-title">Our Team</h5>
                            <h3 className="team-subtitle">
                                Growing Stronger Every Season
                            </h3>
                            <p className="team-description">
                                Behind every crisp tomato and smooth pepper is a
                                team of growers, logistics experts, and
                                coordinators – all working with love, precision,
                                and vibes.
                            </p>
                            <button className="team-button">Learn More</button>
                        </div>

                        <div className="team-slider">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={30}
                                slidesPerView={2.2}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                className="team-image-slider"
                            >
                                <SwiperSlide>
                                    <Image
                                        width={500}
                                        height={500}
                                        src={"/images/team1.png"}
                                        alt="Team working at greenhouse"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        width={500}
                                        height={500}
                                        src={"/images/team2.png"}
                                        alt="Team harvesting produce"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        width={500}
                                        height={500}
                                        src={"/images/team1.png"}
                                        alt="Team packaging products"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>

                <div className="stats-division">
                    <div className="section-header">
                        <h5 className="section-name">Stats Highlight</h5>
                        <h3 className="stats-title">The Numbers Don’t Lie</h3>
                        <p className="section-text">
                            We may be starting out, but our roots are deep — and
                            so is our growth!
                        </p>
                    </div>
                    <div className="stats-grid">
                        <div className="stats-categories">
                            <h5>200+</h5>
                            <p>Deliveries Completed</p>
                        </div>
                        <div className="stats-categories">
                            <h5>500+</h5>
                            <p>Happy Clients</p>
                        </div>
                        <div className="stats-categories">
                            <h5>1300+</h5>
                            <p>Farm-Fresh Products Supplied</p>
                        </div>
                    </div>
                </div>

                <section className="features-section">
                    <div className="container">
                        <div className="content-wrapper">
                            <div className="text-content">
                                <span className="section-label">
                                    Why Choose Us
                                </span>
                                <h2 className="section-heading">
                                    What makes us dependable, and trust-worthy
                                </h2>
                                <p className="section-description">
                                    There's farm produce - and then there's
                                    produce that's been grown, raised, and
                                    handled with precision and care. Whether
                                    it's greenhouse or quality, or fresh eggs,
                                    we bring the same standard of excellence to
                                    anything we offer. Here's why our customers
                                    stick with us:
                                </p>

                                <div className="features-accordion">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className={`accordion-item ${
                                                activeIndex === index
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <button
                                                className="accordion-header"
                                                onClick={() =>
                                                    toggleAccordion(index)
                                                }
                                                aria-expanded={
                                                    activeIndex === index
                                                }
                                            >
                                                <span className="accordion-icon">
                                                    {activeIndex === index ? (
                                                        <Minus size={20} />
                                                    ) : (
                                                        <Plus size={20} />
                                                    )}
                                                </span>
                                                <span className="accordion-title">
                                                    {feature.title}
                                                </span>
                                            </button>
                                            <div className="accordion-content">
                                                <p>{feature.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="media-content">
                                <div className="video-wrapper">
                                    <div className="video-placeholder">
                                        <button
                                            className="play-button"
                                            aria-label="Play video"
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                width="48"
                                                height="48"
                                            >
                                                <path
                                                    fill="white"
                                                    d="M8,5.14V19.14L19,12.14L8,5.14Z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bulk-section">
                    <div className="bulk-container flex flex-col md:flex-row ">
                        <div className="bulk-image w-full">
                            <Image
                                width={500}
                                height={500}
                                src={"/images/bulkImg.png"}
                                alt="Bulk produce for businesses"
                                className="bulk-main-image h-60 w-full md:w md:h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="bulk-text">
                            <span className="bulk-head">
                                Buy in Bulk – For Businesses & Big Needs
                            </span>
                            <h2 className="bulk-title">
                                Supplying restaurants, retailers, and food
                                vendors.
                            </h2>
                            <p className="bulk-description">
                                Supplying restaurants, retailers, and food
                                vendors. We've got you covered. Our bulk service
                                is built for speed, hygiene, and reliability.
                                Whether you run a kitchen, a supermarket, or an
                                event business, you can count on us for sorted,
                                form-fresh produce that's ready to go.
                            </p>

                            <h3 className="bulk-subtitle">
                                Why choose our bulk service?
                            </h3>

                            <div className="bulk-features">
                                <div className="bulk-feature-item">
                                    <div className="bulk-feature-icon">
                                        <Bubbles size={20} />
                                    </div>
                                    <div className="bulk-feature-content">
                                        <p>Competitive bulk pricing</p>
                                    </div>
                                </div>
                                <div className="bulk-feature-item">
                                    <div className="bulk-feature-icon">
                                        <Bubbles size={20} />
                                    </div>
                                    <div className="bulk-feature-content">
                                        <p>
                                            Clean, sorted, ready-to-use produce
                                        </p>
                                    </div>
                                </div>
                                <div className="bulk-feature-item">
                                    <div className="bulk-feature-icon">
                                        <Bubbles size={20} />
                                    </div>
                                    <div className="bulk-feature-content">
                                        <p>Fast, consistent delivery</p>
                                    </div>
                                </div>
                                <div className="bulk-feature-item">
                                    <div className="bulk-feature-icon">
                                        <Bubbles size={20} />
                                    </div>
                                    <div className="bulk-feature-content">
                                        <p>
                                            Dedicated support for large orders
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="bulk-cta">Talk to Sales</button>
                        </div>
                    </div>
                </section>

                <div className="testimonials-container">
                    <div className="testimonials-content">
                        <h3 className="section-label">Testimonials</h3>
                        <h2 className="main-heading">
                            Inspiring Testimonials from our Clients
                        </h2>

                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                el: ".testimonials-pagination",
                                bulletClass: "dot",
                                bulletActiveClass: "active",
                            }}
                            loop={true}
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="testimonial-card">
                                        <div className="testimonial-image">
                                            <div className="image-placeholder"></div>
                                        </div>

                                        <div className="stars">
                                            {[...Array(5)].map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={
                                                        i < testimonial.rating
                                                            ? "star"
                                                            : "star-outline"
                                                    }
                                                >
                                                    {i < testimonial.rating
                                                        ? "★"
                                                        : "☆"}
                                                </span>
                                            ))}
                                        </div>

                                        <h4 className="client-name">
                                            {testimonial.name}
                                        </h4>
                                        <p className="client-title">
                                            {testimonial.title}
                                        </p>

                                        <p className="testimonial-text">
                                            {testimonial.text}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="testimonials-pagination">
                            {/* Pagination dots will be injected here by Swiper */}
                        </div>
                    </div>
                </div>
            </div>
        </UserWrapper>
    );
}

export default Home;
