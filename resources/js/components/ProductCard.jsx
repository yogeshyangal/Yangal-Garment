import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="relative aspect-square bg-gray-100">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                        👕
                    </div>
                )}
                {product.is_featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.short_description}
                </p>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="text-lg font-bold text-blue-900">
                            ₹{product.price_min}
                        </span>
                        {product.price_max && (
                            <span className="text-gray-500">
                                {' '}– ₹{product.price_max}
                            </span>
                        )}
                        <span className="text-gray-500 text-sm ml-1">/ piece</span>
                    </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">MOQ:</span> {product.moq} pieces
                </div>
                <a
                    href={`/products/${product.slug}`}
                    className="block w-full bg-blue-900 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                    View Details
                </a>
            </div>
        </div>
    );
};

export default ProductCard;
