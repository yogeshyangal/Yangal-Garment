import React from 'react';

const BulkQuoteCTA = () => {
    return (
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Place Your Bulk Order?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Get a competitive quote for your custom t-shirts and track pants today
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/quote"
                        className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                    >
                        Get a Bulk Quote
                    </a>
                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-500 transition-colors flex items-center justify-center gap-2"
                    >
                        <span>💬</span>
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BulkQuoteCTA;
