import React from 'react';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: '✅',
            title: 'Premium Quality',
            description: 'High-quality fabric and manufacturing standards',
        },
        {
            icon: '💰',
            title: 'Competitive Pricing',
            description: 'Best prices for bulk orders with quantity discounts',
        },
        {
            icon: '🎨',
            title: 'Custom Design',
            description: 'Professional design and printing services',
        },
        {
            icon: '⚡',
            title: 'Fast Delivery',
            description: 'Timely delivery with pan-India shipping',
        },
        {
            icon: '🤝',
            title: 'Trusted Partner',
            description: 'Serving schools and organizations for years',
        },
        {
            icon: '📞',
            title: 'Excellent Support',
            description: 'Dedicated customer support throughout the process',
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose Yangal Garment
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your trusted partner for custom garment manufacturing
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
                        >
                            <div className="text-4xl mb-4">{reason.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
