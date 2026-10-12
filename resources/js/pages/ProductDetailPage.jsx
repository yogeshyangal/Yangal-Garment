import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BulkPriceTable from '../components/BulkPriceTable';

const ProductDetailPage = ({ slug }) => {
    // Sample product data - will be replaced with API data
    const product = {
        id: 1,
        name: 'Classic School Polo T-Shirt',
        slug: 'classic-school-polo-tshirt',
        short_description: 'Premium cotton polo shirt perfect for school uniforms and sports activities',
        description: 'Our Classic School Polo T-Shirt is designed for comfort and durability. Made from high-quality cotton fabric, it features a classic collar design with button placket. Perfect for school uniforms, sports academies, and corporate events.',
        price_min: 180,
        price_max: 280,
        moq: 100,
        fabric: '100% Cotton',
        gsm: '180 GSM',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'],
        colors: ['White', 'Navy Blue', 'Royal Blue', 'Red', 'Black', 'Yellow', 'Green'],
        printing_options: ['Logo Printing', 'Name Printing', 'Number Printing', 'Custom Graphics'],
        usage: 'School Uniforms, Sports Events, Corporate Events, Academies',
        images: [],
        pricing_tiers: [
            { min_quantity: 100, max_quantity: 249, price_min: 220, price_max: 260 },
            { min_quantity: 250, max_quantity: 499, price_min: 200, price_max: 230 },
            { min_quantity: 500, max_quantity: 999, price_min: 185, price_max: 215 },
        ],
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                                    <div className="text-9xl">👕</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <nav className="text-sm text-gray-500 mb-4">
                                <a href="/products" className="hover:text-blue-900">Products</a>
                                <span className="mx-2">/</span>
                                <span className="text-gray-900">{product.name}</span>
                            </nav>

                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>

                            <div className="flex items-center gap-4 mb-6">
                                <div>
                                    <span className="text-3xl font-bold text-blue-900">
                                        ₹{product.price_min}
                                    </span>
                                    {product.price_max && (
                                        <span className="text-gray-500 text-xl">
                                            {' '}– ₹{product.price_max}
                                        </span>
                                    )}
                                    <span className="text-gray-500 ml-1">/ piece</span>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                <p className="text-blue-900 font-semibold">
                                    Minimum Order Quantity: {product.moq} pieces
                                </p>
                            </div>

                            <p className="text-gray-600 mb-8">
                                {product.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <p className="text-sm text-gray-500 mb-1">Fabric</p>
                                    <p className="font-semibold text-gray-900">{product.fabric}</p>
                                </div>
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <p className="text-sm text-gray-500 mb-1">GSM</p>
                                    <p className="font-semibold text-gray-900">{product.gsm}</p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-semibold text-gray-900 mb-3">Available Sizes</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.sizes.map((size) => (
                                        <span
                                            key={size}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
                                        >
                                            {size}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-semibold text-gray-900 mb-3">Available Colors</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.colors.map((color) => (
                                        <span
                                            key={color}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
                                        >
                                            {color}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-semibold text-gray-900 mb-3">Printing Options</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.printing_options.map((option) => (
                                        <span
                                            key={option}
                                            className="bg-blue-100 text-blue-900 px-3 py-1 rounded-md text-sm"
                                        >
                                            {option}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-semibold text-gray-900 mb-3">Ideal For</h3>
                                <p className="text-gray-600">{product.usage}</p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <a
                                    href="/quote"
                                    className="flex-1 bg-blue-900 text-white text-center py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                                >
                                    Get Bulk Quote
                                </a>
                                <a
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-green-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-green-500 transition-colors flex items-center justify-center gap-2"
                                >
                                    <span>💬</span>
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <BulkPriceTable pricingTiers={product.pricing_tiers} />
                    </div>

                    <div className="mt-12 bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Suitable For
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Schools', 'Sports Academies', 'Coaching Institutes', 'Companies', 'Organizations', 'Clubs & Teams', 'Events', 'Sports Teams'].map((item) => (
                                <div key={item} className="bg-gray-50 rounded-lg p-4 text-center">
                                    <div className="text-2xl mb-2">✓</div>
                                    <p className="font-medium text-gray-900">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetailPage;
