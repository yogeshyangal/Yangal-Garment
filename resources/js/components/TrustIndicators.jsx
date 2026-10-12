import React from 'react';

const TrustIndicators = () => {
    const indicators = [
        { icon: '📦', title: 'Bulk Orders', description: 'Minimum 100 pieces per order' },
        { icon: '🎨', title: 'Custom Printing', description: 'Logo, name & number printing' },
        { icon: '✨', title: 'Quality Fabric', description: 'Premium cotton & polyester blends' },
        { icon: '📏', title: 'Multiple Sizes', description: 'XS to 5XL available' },
        { icon: '🚚', title: 'Pan-India Delivery', description: 'Fast & reliable shipping' },
    ];

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {indicators.map((indicator, index) => (
                        <div key={index} className="text-center">
                            <div className="text-5xl mb-4">{indicator.icon}</div>
                            <h3 className="font-semibold text-gray-900 mb-2">{indicator.title}</h3>
                            <p className="text-sm text-gray-600">{indicator.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustIndicators;
