import React from 'react';

const WhoWeServe = () => {
    const customers = [
        { icon: '🏫', name: 'Schools' },
        { icon: '⚽', name: 'Sports Academies' },
        { icon: '📚', name: 'Coaching Institutes' },
        { icon: '🎓', name: 'Educational Institutes' },
        { icon: '🏢', name: 'Companies' },
        { icon: '🏛️', name: 'Organizations' },
        { icon: '🏆', name: 'Clubs & Teams' },
        { icon: '🎪', name: 'Events' },
    ];

    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Who We Serve
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Trusted by leading institutions and organizations across India
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {customers.map((customer, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors"
                        >
                            <div className="text-4xl mb-3">{customer.icon}</div>
                            <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeServe;
