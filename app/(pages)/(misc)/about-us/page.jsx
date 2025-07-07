import React from "react";
import { Leaf, Truck, Users, Award, Clock } from "lucide-react";
import UserWrapper from "../../../components/wrapper/user";
import "../../../styles/Shop.css";

export default function AboutUsPage() {
    return (
        <UserWrapper>
            <div className="min-h-screen bg-gray-50">
                {/* About Us Header */}
                <div className="hero">
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1 className="hero-title">About Us</h1>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                    <p className="text-gray-600 leading-relaxed">
                        Urban Lagos Greenland Farms Limited is a modern
                        agro-business built with one purpose, which is to grow
                        clean, fresh, and sustainable food for Nigeria and
                        beyond. What started as an idea to solve the problem of
                        chemically-preserved, imported vegetables has become a
                        fast-growing farm ecosystem committed to high-quality
                        food production and direct-to-consumer delivery.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                        We believe food should be fresh, safe, and grown with
                        intention. And with the abundance of land and sunshine
                        at our fingertips, there's no reason why Nigeria
                        shouldn't have fresh and even export.
                    </p>
                </div>

                {/* Our Journey Section */}
                <div className="bg-white py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <img
                                    src="/images/about-us-tomato.png"
                                    alt="Greenhouse with green plants"
                                    className="w-full h-40 md:h-[500px] object-cover rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                    Our Journey
                                </h2>

                                <div className="space-y-4 text-gray-600">
                                    <div>
                                        <h3 className="font-semibold text-green-500 mb-2">
                                            It all began with a challenge:
                                        </h3>
                                        <p>
                                            Too many of the vegetables consumed
                                            locally were being imported, treated
                                            with preservatives, or grown in
                                            unhealthy conditions. This posed a
                                            health risk and an opportunity.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-green-500 mb-2">
                                            So, we decided to change the
                                            narrative.
                                        </h3>
                                        <p>
                                            We researched the best farming
                                            practices, acquired land, assembled
                                            our 15 acres and began constructing
                                            our greenhouse. It clearly
                                            controlled environment for
                                            high-yield vegetable production. We
                                            hired skilled farmhands, trained a
                                            committed team, and started planting
                                            with one goal in mind.
                                        </p>
                                    </div>

                                    <div>
                                        <p>
                                            To become a trusted, healthy, and
                                            scalable supply chain for vegetables
                                            and agro-products across Lagos,
                                            Nigeria, and eventually the world.
                                            We partner with eco-friendly buyers,
                                            and work closely with vendors and
                                            restaurants with farm-fresh produce
                                            directly from the soil to their
                                            doorstep.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission and Vision */}
                <div className="py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                    Our Mission
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    To grow, process, and deliver safe,
                                    chemical-free, farm-fresh products while
                                    building a sustainable, scalable agro-supply
                                    chain that serves homes, businesses, and
                                    global markets.
                                </p>
                            </div>
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                    Our Vision
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    To be one of Nigeria's leading
                                    agro-ecosystems, producing quality food
                                    locally, reducing dependency on imports, and
                                    building a strong, export-ready brand that
                                    competes on the global stage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Urban Greenland Section */}
                <div className="bg-white py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-12 items-start">
                            <div className="lg:col-span-2">
                                <div className="mb-8">
                                    <span className="text-green-600 font-medium">
                                        Why Urban Greenland?
                                    </span>
                                    <h2 className="text-3xl font-bold text-gray-800 mt-2">
                                        More Than Just a Farm. It's a Full
                                        Freshness Ecosystem.
                                    </h2>
                                </div>

                                <p className="text-gray-600 mb-8">
                                    At Urban Greenland Farms, we're not just
                                    growing vegetables we're growing healthier
                                    communities and a better way to get food at
                                    your table. Here's why customers,
                                    businesses, and chefs choose Urban Greenland
                                    time beyond choose us again and again:
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-green-100 p-2 rounded-full">
                                            <Leaf className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-green-500 mb-2">
                                                Grown Under Ideal Conditions
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                Our greenhouses provide the
                                                perfect, controlled environment
                                                to grow farm fresh weather,
                                                pests, and diseases giving you
                                                cleaner, safer, healthier
                                                produce all year round.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-green-100 p-2 rounded-full">
                                            <Award className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-green-500 mb-2">
                                                Sorted and Delivered Clean
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                We're harvested the same week or
                                                night from your kitchen. Every
                                                pepper, tomato, or egg is
                                                carefully sorted and packed
                                                ready to cook straight out of
                                                the bag.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-green-100 p-2 rounded-full">
                                            <Truck className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-green-500 mb-2">
                                                Fast Delivery. No Stress.
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                Same-day and next-day delivery
                                                options mean you get your orders
                                                quickly and fresh in good
                                                condition. Whether it's a quick
                                                recipe or a big weekly bulk
                                                order, we're ready.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-green-100 p-2 rounded-full">
                                            <Users className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-green-500 mb-2">
                                                Bulk Orders? No Wahala.
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                Restaurants, caterers, food
                                                vendors we've got your back. Get
                                                consistent supply at better
                                                prices, all without market
                                                stress or haggling.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-green-100 p-2 rounded-full">
                                            <Clock className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-green-500 mb-2">
                                                A Team That Cares
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                Whether you're a first-time
                                                buyer or longtime client,
                                                everyone who moves the
                                                decisions, and a digital order
                                                ensuring every click counts.
                                                We're farming with heart and
                                                purpose.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:mt-16">
                                <img
                                    src="/images/about-us-tomato.png"
                                    alt="Greenhouse farming"
                                    className="w-full h-24 md:h-full object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visit Our Shop Section */}
                <div className="py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-0 items-center">
                            <div className="relative md:-mr-10 !overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src="/images/store-shelf.png"
                                    alt="Grocery store interior"
                                    className="w-full h-fit object-cover "
                                />
                                <div className="absolute inset-0 bg-black opacity-50 rounded-xl flex items-center justify-center"></div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg md:-ml-8 z-30">
                                <span className="text-green-600 font-medium">
                                    Visit Our Shop Today
                                </span>
                                <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-4">
                                    Walk In. Pick Fresh. Walk Out Happy.
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Step by step quality-controlled and
                                    farm-to-table farm-fresh experience in
                                    person. Our store in Phase 1, Lagos is
                                    stocked with our latest harvest clean,
                                    sorted, and ready to go. Whether you're
                                    buying for your home or your food business,
                                    we've got something for you.
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-green-500">
                                            + Shop Address 1
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            65, Fola Osibo Street, Lekki Phase 1
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-green-500">
                                            + Shop Address 2
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            17b Rahman Adeboyejo Street, Lekki
                                            Phase 1
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-green-500">
                                            + Shop Address 3
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            7a, Oladimeji Alo Street, Lekki
                                            Phase1
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-green-500">
                                            + Call or WhatsApp
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            +234 913 4634 790, +234 806 300
                                            8910, +234 706 546 0043
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            +234 808 392 7361
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-green-500">
                                            + Opening Hours
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Monday – Saturday: 8:00AM – 5:00PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bulk Purchase CTA */}
                <div className="bg-gray-100 text-black py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Want to Buy in Bulk?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Don't worry, we get your back. We supply
                            restaurants, food vendors, caterers, and markets.
                            Contact us live to get our bulk price list and place
                            your order.
                        </p>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
                            Talk to Us
                        </button>
                    </div>
                </div>
            </div>
        </UserWrapper>
    );
}
