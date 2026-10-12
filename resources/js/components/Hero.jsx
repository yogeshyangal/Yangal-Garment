import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Custom T-Shirts & Track Pants for Schools, Academies & Organizations
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100">
                            Bulk manufacturing with custom printing, branding and designs according to your requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/quote"
                                className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors text-center"
                            >
                                Get a Bulk Quote
                            </a>
                            <a
                                href="/products"
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors text-center"
                            >
                                Explore Products
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/20 rounded-lg p-6 text-center">
                                    <div className="text-4xl mb-2">👕</div>
                                    <div className="font-semibold">Polo T-Shirts</div>
                                </div>
                                <div className="bg-white/20 rounded-lg p-6 text-center">
                                    <div className="text-4xl mb-2">🎽</div>
                                    <div className="font-semibold">Custom T-Shirts</div>
                                </div>
                                <div className="bg-white/20 rounded-lg p-6 text-center">
                                    <div className="text-4xl mb-2">👖</div>
                                    <div className="font-semibold">Track Pants</div>
                                </div>
                                <div className="bg-white/20 rounded-lg p-6 text-center">
                                    <div className="text-4xl mb-2">🎨</div>
                                    <div className="font-semibold">Custom Printing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
