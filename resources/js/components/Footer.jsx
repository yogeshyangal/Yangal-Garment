import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Yangal Garment</h3>
                        <p className="text-gray-400 mb-4">
                            Custom T-Shirts & Track Pants for Schools, Academies & Organizations
                        </p>
                        <p className="text-gray-400">
                            Premium quality bulk manufacturing with custom printing and branding
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                            <li><a href="/custom-printing" className="text-gray-400 hover:text-white transition-colors">Custom Printing</a></li>
                            <li><a href="/bulk-orders" className="text-gray-400 hover:text-white transition-colors">Bulk Orders</a></li>
                            <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>📞 +91 98765 43210</li>
                            <li>📧 info@yangalgarment.com</li>
                            <li>📍 Your Address Here</li>
                            <li>🏙️ City, State - PIN</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">📘</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">📸</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">🐦</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">💼</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Yangal Garment. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
