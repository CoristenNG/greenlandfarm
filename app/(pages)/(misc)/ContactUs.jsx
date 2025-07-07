import React, { useState } from "react";
import { ChevronDown, MapPin, Mail, Phone } from "lucide-react";
import UserWrapper from "../../components/wrapper/user";

export default function ContactFAQPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        reason: [],
        message: "",
        newsletter: false,
    });

    const [openFAQ, setOpenFAQ] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            if (name === "newsletter") {
                setFormData((prev) => ({ ...prev, newsletter: checked }));
            } else {
                setFormData((prev) => ({
                    ...prev,
                    reason: checked
                        ? [...prev.reason, value]
                        : prev.reason.filter((item) => item !== value),
                }));
            }
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
    };

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: "What products do you currently sell?",
            answer: "Right now, we have fresh tomatoes, bell peppers (green, yellow, red), red rodo hot peppers), and eggs – all farm-fresh, sorted, and clean. More vegetables, fish and poultry will be available soon as we expand.",
        },
        {
            question: "How do I place an order?",
            answer: "You can place an order through our website or by contacting us directly via phone or email.",
        },
        {
            question: "Can I buy in bulk?",
            answer: "Yes, we offer bulk purchasing options for restaurants, markets, and large households.",
        },
        {
            question: "Do you offer home delivery?",
            answer: "Yes, we provide home delivery services within Lagos and surrounding areas.",
        },
        {
            question: "How soon will I receive my order?",
            answer: "Standard delivery takes 24-48 hours within Lagos. Same-day delivery is available for orders placed before 2 PM.",
        },
        {
            question: "Can someone receive my order on my behalf?",
            answer: "Yes, someone can receive your order on your behalf. Please ensure they have proper identification.",
        },
        {
            question: "Do I need to create an account to order?",
            answer: "While creating an account makes future orders easier, you can also place orders as a guest.",
        },
        {
            question: "What payment options are available?",
            answer: "We accept cash on delivery, bank transfers, and mobile money payments.",
        },
        {
            question: "Is payment required before delivery?",
            answer: "Payment can be made on delivery or in advance via bank transfer for your convenience.",
        },
        {
            question: "How can I track my order?",
            answer: "You'll receive a tracking number via SMS once your order is dispatched.",
        },
        {
            question: "What if I don't receive my order?",
            answer: "Please contact our customer service immediately if you don't receive your order within the estimated time.",
        },
        {
            question: "Can I return or exchange items?",
            answer: "We accept returns for damaged or spoiled items within 24 hours of delivery.",
        },
        {
            question: "What if I wasn't around to collect my order?",
            answer: "We'll attempt redelivery the next business day or you can arrange a new delivery time.",
        },
        {
            question: "Where are you located?",
            answer: "We have three locations in Lagos for your convenience. Check our office and shops section for addresses.",
        },
    ];

    return (
        <UserWrapper>
            <div className="min-h-screen bg-white">
                <div className="hero">
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h1 className="hero-title">Contact Us</h1>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="md:max-w-10/12 mx-auto px-4 py-16">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Let's Chat,{" "}
                                <span className="text-green-600">
                                    Reach Out
                                </span>{" "}
                                to Us.
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Whether you have a question about your order,
                                need help with bulk purchasing, or just want to
                                say hi, we're here for you, and we respond
                                within 24 hours.
                            </p>

                            <div className="space-y-4 mb-8">
                                <h3 className="font-semibold text-gray-800">
                                    Or Just reach out manually to:
                                </h3>

                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">
                                        Support@greenlandfarms.com
                                    </span>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">
                                        Urbanlogofarms@gmail.com
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">
                                    Or Call us to:
                                </h3>
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">
                                        +234 (913) 4634 790
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="bg-gray-50 md:bg-white p-4 md:p-8 rounded-lg md:shadow-sm">
                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="Enter your first name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            placeholder="Enter your last name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email address"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Reason for Contact
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            {
                                                value: "general",
                                                label: "General Inquiry",
                                            },
                                            { value: "order", label: "Order" },
                                            {
                                                value: "bulk",
                                                label: "Bulk Purchase",
                                            },
                                            {
                                                value: "delivery",
                                                label: "Delivery",
                                            },
                                            {
                                                value: "feedback",
                                                label: "Feedback",
                                            },
                                            {
                                                value: "partnership",
                                                label: "Partnership / Collaboration",
                                            },
                                            {
                                                value: "others",
                                                label: "Others",
                                            },
                                        ].map((option) => (
                                            <label
                                                key={option.value}
                                                className="flex items-center space-x-2 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    name="reason"
                                                    value={option.value}
                                                    onChange={handleInputChange}
                                                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                                />
                                                <span className="text-sm text-gray-700">
                                                    {option.label}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Leave us a message"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="newsletter"
                                        checked={formData.newsletter}
                                        onChange={handleInputChange}
                                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                    />
                                    <span className="text-sm text-gray-700">
                                        I agree to receive promotional messages
                                        and newsletter.
                                    </span>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                                >
                                    Submit Form
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Office & Shops Section */}
                <div className="bg-white py-16">
                    <div className="md:max-w-10/12 mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Our Office & Shops
                        </h2>
                        <p className="text-gray-600 mb-12">
                            You can visit our shops anytime to get whatever
                            goods and products you are in need of.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    city: "Lagos",
                                    address:
                                        "65, Fola Osibo Street, Lekki Phase 1, Lagos Nigeria",
                                },
                                {
                                    city: "Lagos",
                                    address:
                                        "17b, Rahman Adeboyego Street, Lekki Phase 1, Lagos Nigeria",
                                },
                                {
                                    city: "Lagos",
                                    address:
                                        "7a, Oladimeji Alo Street, Lekki Phase 1, Lagos Nigeria",
                                },
                            ].map((location, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-lg p-6"
                                >
                                    <div className="flex items-center space-x-2 mb-3">
                                        <MapPin className="w-5 h-5 text-green-600" />
                                        <h3 className="font-semibold text-gray-800">
                                            {location.city}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        {location.address}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white py-16">
                    <div className="md:max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                            Frequently Asked Questions (FAQs)
                        </h2>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-t-lg border-b border-gray-200 mb-4"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none"
                                    >
                                        <span className="font-medium text-gray-800">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                                                openFAQ === index
                                                    ? "transform rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </button>
                                    {openFAQ === index && (
                                        <div className="px-6 pb-4 pt-5">
                                            <p className="text-gray-600">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </UserWrapper>
    );
}
