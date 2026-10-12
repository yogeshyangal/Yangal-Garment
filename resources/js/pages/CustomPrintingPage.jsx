import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CustomPrintingPage = () => {
    const printingServices = [
        {
            icon: '🏷️',
            title: 'Logo Printing',
            description: 'Professional logo printing on t-shirts and track pants',
        },
        {
            icon: '📝',
            title: 'Name Printing',
            description: 'Individual name printing for team members and students',
        },
        {
            icon: '🔢',
            title: 'Number Printing',
            description: 'Sports jersey numbers in various styles and fonts',
        },
        {
            icon: '🎨',
            title: 'Custom Graphics',
            description: 'Full custom graphics and artwork printing',
        },
        {
            icon: '🔤',
            title: 'Front & Back Printing',
            description: 'Printing on both front and back of garments',
        },
        {
            icon: '🎯',
            title: 'Custom Colors',
            description: 'Pantone color matching for brand consistency',
        },
        {
            icon: '🧵',
            title: 'Embroidery',
            description: 'Premium embroidery for logos and designs',
        },
        {
            icon: '✨',
            title: 'Screen Printing',
            description: 'High-quality screen printing for bulk orders',
        },
    ];

    const process = [
        {
            step: 1,
            title: 'Share Your Design',
            description: 'Upload your logo, design, or requirements. Our team will review and provide guidance.',
        },
        {
            step: 2,
            title: 'Design Preparation',
            description: 'Our design team prepares the artwork and creates digital proofs for your approval.',
        },
        {
            step: 3,
            title: 'Sample Approval',
            description: 'We create a sample for your approval before bulk production begins.',
        },
        {
            step: 4,
            title: 'Bulk Production',
            description: 'Once approved, we proceed with bulk manufacturing with your custom printing.',
        },
        {
            step: 5,
            title: 'Quality Check & Delivery',
            description: 'Each garment is quality checked before delivery to your location.',
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow bg-gray-50">
                <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Custom Printing Services
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl">
                            Professional printing and embroidery services for your custom garments. Logo, name, number printing and more.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our Printing Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We offer a wide range of printing options to meet your customization needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {printingServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-8 mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            How It Works
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                            {process.map((item) => (
                                <div key={item.step} className="text-center">
                                    <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="bg-blue-50 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">
                                Design Guidelines
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-900 mt-1">✓</span>
                                    <span>Provide high-resolution designs (300 DPI or higher)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-900 mt-1">✓</span>
                                    <span>Use vector formats (AI, EPS, PDF) for best results</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-900 mt-1">✓</span>
                                    <span>Specify Pantone colors for accurate color matching</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-900 mt-1">✓</span>
                                    <span>Include size and placement requirements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-900 mt-1">✓</span>
                                    <span>Send reference images if needed</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-yellow-900 mb-4">
                                File Formats Accepted
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {['JPG', 'JPEG', 'PNG', 'WEBP', 'PDF', 'AI', 'EPS', 'SVG'].map((format) => (
                                    <div
                                        key={format}
                                        className="bg-white rounded-lg p-4 text-center font-semibold text-gray-900"
                                    >
                                        {format}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to Customize Your Order?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Upload your design and requirements to get started with your custom printing order
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/quote"
                                className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors"
                            >
                                Get a Quote with Custom Printing
                            </a>
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-500 transition-colors flex items-center justify-center gap-2"
                            >
                                <span>💬</span>
                                Discuss on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CustomPrintingPage;
