import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow bg-gray-50">
                <div className="bg-blue-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold mb-4">About Us</h1>
                        <p className="text-lg text-blue-100">
                            Your trusted partner for custom garment manufacturing
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Our Story
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Yangal Garment is a leading B2B garment manufacturer specializing in custom t-shirts, track pants, and printed apparel for schools, academies, and organizations across India.
                            </p>
                            <p className="text-gray-600 mb-4">
                                With years of experience in the garment industry, we understand the unique needs of educational institutions, sports academies, and corporate organizations. Our commitment to quality, competitive pricing, and timely delivery has made us a trusted partner for bulk garment orders.
                            </p>
                            <p className="text-gray-600">
                                We offer complete customization including logo printing, name printing, number printing, and custom designs to help you create uniforms and apparel that represent your brand identity.
                            </p>
                        </div>
                        <div className="bg-blue-100 rounded-xl p-8">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
                                    <div className="text-gray-600">Happy Clients</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-900 mb-2">50K+</div>
                                    <div className="text-gray-600">Garments Delivered</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-900 mb-2">10+</div>
                                    <div className="text-gray-600">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
                                    <div className="text-gray-600">Quality Guarantee</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Our Mission
                        </h2>
                        <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
                            <p className="text-lg text-gray-600 text-center">
                                To provide high-quality, affordable custom garments to schools, academies, and organizations across India, while maintaining exceptional service standards and building long-term relationships with our clients.
                            </p>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Our Values
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl shadow-md p-6 text-center">
                                <div className="text-5xl mb-4">✨</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
                                <p className="text-gray-600">
                                    We never compromise on quality. Every garment undergoes strict quality checks before delivery.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-6 text-center">
                                <div className="text-5xl mb-4">💰</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordability</h3>
                                <p className="text-gray-600">
                                    Competitive pricing with quantity discounts to make bulk orders affordable for everyone.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-6 text-center">
                                <div className="text-5xl mb-4">⏰</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Timely Delivery</h3>
                                <p className="text-gray-600">
                                    We understand deadlines and ensure on-time delivery for all bulk orders.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Why Choose Us
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {[
                                'Premium quality fabric and manufacturing',
                                'Custom printing and embroidery services',
                                'Bulk quantity discounts',
                                'Pan-India delivery',
                                'Easy ordering process',
                                'Dedicated customer support',
                                'Design assistance available',
                                'Flexible payment options',
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-blue-900 text-xl">✓</div>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Ready to Work With Us?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Get in touch with us to discuss your bulk garment requirements
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/quote"
                                className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors"
                            >
                                Get a Quote
                            </a>
                            <a
                                href="/contact"
                                className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 hover:text-white transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
