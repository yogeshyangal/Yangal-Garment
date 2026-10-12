import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Products' },
        { id: 'school-polo-tshirts', name: 'School Polo T-Shirts' },
        { id: 'custom-tshirts', name: 'Custom T-Shirts' },
        { id: 'track-pants', name: 'Track Pants' },
    ];

    // Sample products - will be replaced with API data
    const products = [
        {
            id: 1,
            name: 'Classic School Polo T-Shirt',
            slug: 'classic-school-polo-tshirt',
            short_description: 'Premium cotton polo shirt perfect for school uniforms and sports activities',
            price_min: 180,
            price_max: 280,
            moq: 100,
            image: null,
            is_featured: true,
            category: 'school-polo-tshirts',
        },
        {
            id: 2,
            name: 'Custom Printed T-Shirt',
            slug: 'custom-printed-tshirt',
            short_description: 'Custom designed t-shirts with your logo and branding',
            price_min: 150,
            price_max: 250,
            moq: 100,
            image: null,
            is_featured: false,
            category: 'custom-tshirts',
        },
        {
            id: 3,
            name: 'Sports Track Pants',
            slug: 'sports-track-pants',
            short_description: 'Comfortable track pants for sports and physical activities',
            price_min: 200,
            price_max: 320,
            moq: 100,
            image: null,
            is_featured: true,
            category: 'track-pants',
        },
        {
            id: 4,
            name: 'Performance Polo T-Shirt',
            slug: 'performance-polo-tshirt',
            short_description: 'High-performance polo shirt with moisture-wicking fabric',
            price_min: 220,
            price_max: 350,
            moq: 100,
            image: null,
            is_featured: false,
            category: 'school-polo-tshirts',
        },
    ];

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow bg-gray-50">
                <div className="bg-blue-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
                        <p className="text-lg text-blue-100">
                            Custom T-Shirts & Track Pants for Schools, Academies & Organizations
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row gap-8">
                        <aside className="w-full md:w-64 flex-shrink-0">
                            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                    Categories
                                </h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => setSelectedCategory(category.id)}
                                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                                                selectedCategory === category.id
                                                    ? 'bg-blue-900 text-white'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        <div className="flex-grow">
                            <div className="mb-6">
                                <p className="text-gray-600">
                                    Showing {filteredProducts.length} products
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>

                            {filteredProducts.length === 0 && (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">📦</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        No products found
                                    </h3>
                                    <p className="text-gray-600">
                                        Try selecting a different category
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductsPage;
