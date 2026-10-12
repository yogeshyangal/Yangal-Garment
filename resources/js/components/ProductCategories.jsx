import React from 'react';

const ProductCategories = () => {
    const categories = [
        {
            name: 'School Polo T-Shirts',
            slug: 'school-polo-tshirts',
            icon: '👔',
            description: 'Premium polo shirts for schools and academies',
        },
        {
            name: 'Custom T-Shirts',
            slug: 'custom-tshirts',
            icon: '🎽',
            description: 'Custom designed t-shirts with your branding',
        },
        {
            name: 'Track Pants',
            slug: 'track-pants',
            icon: '👖',
            description: 'Comfortable track pants for sports and activities',
        },
        {
            name: 'Custom Printing',
            slug: 'custom-printing',
            icon: '🎨',
            description: 'Professional printing and embroidery services',
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Product Categories
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our range of custom garments designed for schools, academies, and organizations
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <a
                            key={category.slug}
                            href={`/products?category=${category.slug}`}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 text-center group"
                        >
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {category.name}
                            </h3>
                            <p className="text-gray-600">{category.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;
