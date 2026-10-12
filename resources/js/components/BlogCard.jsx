import React from 'react';

const BlogCard = ({ blog }) => {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
            {blog.featured_image ? (
                <img
                    src={blog.featured_image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                />
            ) : (
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-6xl">
                    📝
                </div>
            )}
            <div className="p-6">
                {blog.category && (
                    <span className="inline-block bg-blue-100 text-blue-900 text-sm px-3 py-1 rounded-full mb-3">
                        {blog.category}
                    </span>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{blog.author}</span>
                    <span>{blog.date}</span>
                </div>
                <a
                    href={`/blog/${blog.slug}`}
                    className="block mt-4 text-blue-900 font-semibold hover:text-blue-800"
                >
                    Read More →
                </a>
            </div>
        </div>
    );
};

export default BlogCard;
