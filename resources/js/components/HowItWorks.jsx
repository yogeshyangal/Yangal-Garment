import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            number: '1',
            title: 'Share Requirement',
            description: 'Tell us your requirements including quantity, sizes, colors, and printing needs',
        },
        {
            number: '2',
            title: 'Get Quote',
            description: 'Receive a competitive quotation with bulk pricing based on your order quantity',
        },
        {
            number: '3',
            title: 'Design & Approval',
            description: 'Our team creates designs for your approval before production begins',
        },
        {
            number: '4',
            title: 'Bulk Production',
            description: 'Quality manufacturing with attention to detail and timely delivery',
        },
        {
            number: '5',
            title: 'Delivery',
            description: 'Fast and reliable pan-India delivery to your doorstep',
        },
    ];

    return (
        <section className="bg-blue-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Simple process to get your custom garments delivered
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-yellow-500 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                                {step.number}
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                            <p className="text-sm text-blue-100">{step.description}</p>
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-yellow-500 transform translate-x-1/2"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
