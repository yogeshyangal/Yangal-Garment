import React, { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';

const ProductManagement = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Classic School Polo T-Shirt', slug: 'classic-school-polo-tshirt', category: 'School Polo T-Shirts', price_min: 180, price_max: 280, moq: 100, is_featured: true, is_active: true },
        { id: 2, name: 'Custom Printed T-Shirt', slug: 'custom-printed-tshirt', category: 'Custom T-Shirts', price_min: 150, price_max: 250, moq: 100, is_featured: false, is_active: true },
        { id: 3, name: 'Sports Track Pants', slug: 'sports-track-pants', category: 'Track Pants', price_min: 200, price_max: 320, moq: 100, is_featured: true, is_active: true },
        { id: 4, name: 'Performance Polo T-Shirt', slug: 'performance-polo-tshirt', category: 'School Polo T-Shirts', price_min: 220, price_max: 350, moq: 100, is_featured: false, is_active: true },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const handleEdit = (product) => {
        setEditingProduct(product);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const handleToggleActive = (id) => {
        setProducts(products.map(p => 
            p.id === id ? { ...p, is_active: !p.is_active } : p
        ));
    };

    const handleToggleFeatured = (id) => {
        setProducts(products.map(p => 
            p.id === id ? { ...p, is_featured: !p.is_featured } : p
        ));
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <AdminSidebar currentPage="products" />
            <div className="ml-64">
                <AdminHeader />
                <main className="pt-20 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Products</h1>
                            <p className="text-gray-600">Manage your product catalog</p>
                        </div>
                        <button
                            onClick={() => {
                                setEditingProduct(null);
                                setShowModal(true);
                            }}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                            <span>➕</span>
                            Add Product
                        </button>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr className="text-left text-sm text-gray-500">
                                        <th className="px-6 py-3 font-medium">Product</th>
                                        <th className="px-6 py-3 font-medium">Category</th>
                                        <th className="px-6 py-3 font-medium">Price Range</th>
                                        <th className="px-6 py-3 font-medium">MOQ</th>
                                        <th className="px-6 py-3 font-medium">Featured</th>
                                        <th className="px-6 py-3 font-medium">Status</th>
                                        <th className="px-6 py-3 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {products.map((product) => (
                                        <tr key={product.id} className="text-sm">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900">{product.name}</div>
                                                <div className="text-gray-500 text-xs">{product.slug}</div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{product.category}</td>
                                            <td className="px-6 py-4 text-gray-600">
                                                ₹{product.price_min} - ₹{product.price_max}
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{product.moq}</td>
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() => handleToggleFeatured(product.id)}
                                                    className={`text-2xl ${product.is_featured ? 'opacity-100' : 'opacity-30'}`}
                                                >
                                                    ⭐
                                                </button>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    product.is_active 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                    {product.is_active ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => handleEdit(product)}
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        ✏️
                                                    </button>
                                                    <button
                                                        onClick={() => handleToggleActive(product.id)}
                                                        className="text-gray-600 hover:text-gray-800"
                                                    >
                                                        {product.is_active ? '🔒' : '🔓'}
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(product.id)}
                                                        className="text-red-600 hover:text-red-800"
                                                    >
                                                        🗑️
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {showModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
                                <div className="p-6 border-b">
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        {editingProduct ? 'Edit Product' : 'Add New Product'}
                                    </h2>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Product Name *
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={editingProduct?.name}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter product name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Slug *
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={editingProduct?.slug}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="product-slug"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category
                                        </label>
                                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                            <option value="">Select category</option>
                                            <option value="school-polo-tshirts">School Polo T-Shirts</option>
                                            <option value="custom-tshirts">Custom T-Shirts</option>
                                            <option value="track-pants">Track Pants</option>
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Min Price
                                            </label>
                                            <input
                                                type="number"
                                                defaultValue={editingProduct?.price_min}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="₹"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Max Price
                                            </label>
                                            <input
                                                type="number"
                                                defaultValue={editingProduct?.price_max}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="₹"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Minimum Order Quantity
                                        </label>
                                        <input
                                            type="number"
                                            defaultValue={editingProduct?.moq}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="100"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Short Description
                                        </label>
                                        <textarea
                                            rows={3}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Brief product description"
                                        />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" defaultChecked={editingProduct?.is_featured} />
                                            <span className="text-sm text-gray-700">Featured Product</span>
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" defaultChecked={editingProduct?.is_active} />
                                            <span className="text-sm text-gray-700">Active</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="p-6 border-t flex justify-end gap-3">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        {editingProduct ? 'Update' : 'Create'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ProductManagement;
