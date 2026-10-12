import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import ProductCategories from './components/ProductCategories';
import WhoWeServe from './components/WhoWeServe';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import BulkQuoteCTA from './components/BulkQuoteCTA';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <TrustIndicators />
                <ProductCategories />
                <WhoWeServe />
                <HowItWorks />
                <WhyChooseUs />
                <BulkQuoteCTA />
            </main>
            <Footer />
        </div>
    );
}

export default App;
