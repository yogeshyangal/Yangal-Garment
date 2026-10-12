import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';

const BlogPage = () => {
    // Sample blog posts - will be replaced with API data
    const blogs = [
        {
            id: 1,
            title: 'How to Choose the Right T-Shirt Fabric for Your Academy',
            slug: 'choose-right-tshirt-fabric',
            excerpt: 'Understanding different fabric types and their benefits for academy uniforms and sports apparel.',
            featured_image: null,
            category: 'Fabric Guide',
            author: 'Yangal Garment',
            date: 'Oct 15, 2024',
        },
        {
            id: 2,
            title: 'Cotton vs Polyester T-Shirts: Which is Better?',
            slug: 'cotton-vs-polyester-tshirts',
            excerpt: 'A comprehensive comparison between cotton and polyester fabrics for custom t-shirts.',
            featured_image: null,
            category: 'Fabric Guide',
            author: 'Yangal Garment',
            date: 'Oct 10, 2024',
        },
        {
            id: 3,
            title: 'How Much Does Custom T-Shirt Printing Cost?',
            slug: 'custom-tshirt-printing-cost',
            excerpt: 'Factors that influence the cost of custom t-shirt printing and how to get the best value.',
            featured_image: null,
            category: 'Pricing',
            author: 'Yangal Garment',
            date: 'Oct 5, 2024',
        },
        {
            id: 4,
            title: 'How to Order Track Pants in Bulk',
            slug: 'order-track-pants-bulk',
            excerpt: 'Step-by-step guide to ordering track pants in bulk for your school or organization.',
            featured_image: null,
            category: 'Ordering Guide',
            author: 'Yangal Garment',
            date: 'Sep 28, 2024',
        },
        {
            id: 5,
            title: 'Understanding GSM in T-Shirts',
            slug: 'understanding-gsm-tshirts',
            excerpt: 'What GSM means and how it affects the quality and comfort of t-shirts.',
            featured_image: null,
            category: 'Fabric Guide',
            author: 'Yangal Garment',
            date: 'Sep 20, 2024',
        },
        {
            id: 6,
            title: 'How to Prepare Your Logo for T-Shirt Printing',
            slug: 'prepare-logo-tshirt-printing',
            excerpt: 'Best practices for preparing your logo design for high-quality t-shirt printing.',
            featured_image: null,
            category: 'Design Tips',
            author: 'Yangal Garment',
            date: 'Sep 15, 2024',
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow bg-gray-50">
                <div className="bg-blue-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold mb-4">Blog</h1>
                        <p className="text-lg text-blue-100">
                            Insights, tips, and guides about custom garments and printing
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPage;
